"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Plane, Texture } from "ogl";

export default function BlobReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    /* -----------------------------
       RENDERER
    ----------------------------- */
    const renderer = new Renderer({
      dpr: 2,
      alpha: true,
      canvas: document.createElement("canvas"),
    });

    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const resize = () => {
      const { clientWidth, clientHeight } = containerRef.current!;
      renderer.setSize(clientWidth, clientHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    /* -----------------------------
       GEOMETRY (FULLSCREEN PLANE)
    ----------------------------- */
    const geometry = new Plane(gl, {
      widthSegments: 100,
      heightSegments: 100,
    });

    /* -----------------------------
       LOAD IMAGES (COVER MODE)
    ----------------------------- */
    const textureBase = new Texture(gl);
    const textureReveal = new Texture(gl);

    const img1 = new Image();
    img1.src = "/newIrfan.png";
    img1.onload = () => (textureBase.image = img1);

    const img2 = new Image();
    img2.src = "/irfan.png";
    img2.onload = () => (textureReveal.image = img2);

    /* -----------------------------
       SHADER PROGRAM
    ----------------------------- */
    const program = new Program(gl, {
      vertex: `
        precision highp float;
        attribute vec2 uv;
        attribute vec3 position;

        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;

        uniform sampler2D tBase;
        uniform sampler2D tReveal;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uStrength;

        varying vec2 vUv;

        /* HASH */
        float hash(vec2 p){
          return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123);
        }

        /* BASIC NOISE */
        float noise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          vec2 u = f*f*(3.0-2.0*f);

          return mix(a, b, u.x)
            + (c - a) * u.y * (1.0 - u.x)
            + (d - b) * u.x * u.y;
        }

        /* FBM (Layered Noise) */
        float fbm(vec2 p){
          float v = 0.0;
          float a = 0.5;

          for(int i=0; i<5; i++){
            v += a * noise(p);
            p *= 2.3;
            a *= 0.5;
          }
          return v;
        }

        /* ORGANIC SUPER BLOB */
        float superBlob(vec2 uv, vec2 center, float time){
          float d = distance(uv, center);

          float turb = fbm(uv * 5.0 + time * 0.4);

          float deform =
            sin(uv.x * 12.0 + time * 1.2) * 0.05 +
            sin(uv.y * 15.0 + time * 1.7) * 0.05 +
            (turb - 0.5) * 0.25;

          float radius = 0.25 + deform;

          return smoothstep(radius, radius - 0.035, d);
        }

        void main(){
          vec2 mouseUV = uMouse;
          float mask = superBlob(vUv, mouseUV, uTime) * uStrength;

          vec4 base = texture2D(tBase, vUv);
          vec4 reveal = texture2D(tReveal, vUv);

          gl_FragColor = mix(base, reveal, mask);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0.5, 0.5] },
        uStrength: { value: 0 },
        tBase: { value: textureBase },
        tReveal: { value: textureReveal },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    /* -----------------------------
       MOUSE MOVEMENT
    ----------------------------- */
    let strength = 0;

    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      program.uniforms.uMouse.value = [x, y];
    };

    containerRef.current.addEventListener("mousemove", onMove);
    containerRef.current.addEventListener("mouseenter", () => (strength = 1));
    containerRef.current.addEventListener("mouseleave", () => (strength = 0));

    /* -----------------------------
       ANIMATION LOOP
    ----------------------------- */
    const animate = (t: number) => {
      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uStrength.value +=
        (strength - program.uniforms.uStrength.value) * 0.1;

      renderer.render({ scene: mesh });
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      containerRef.current?.removeEventListener("mousemove", onMove);
      gl.canvas.remove();
    };
  }, []);

  /* -----------------------------
     FULLSCREEN CONTAINER
  ----------------------------- */
  return <div ref={containerRef} className="w-full h-full "></div>;
}
