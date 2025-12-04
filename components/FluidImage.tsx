"use client";

//blob effect

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Plane, Texture } from "ogl";

export default function BlobImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({
      dpr: 2,
      alpha: true,
      canvas: document.createElement("canvas"),
    });

    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );

    const geometry = new Plane(gl, {
      widthSegments: 100,
      heightSegments: 100,
    });

    const texture = new Texture(gl);

    const img = new Image();
    img.src = "/profilePic.png"; // your image
    img.onload = () => {
      texture.image = img;
    };

    const program = new Program(gl, {
      vertex: `
    precision highp float;
    attribute vec2 uv;
    attribute vec3 position;

    uniform float uTime;
    varying vec2 vUv;

    // Hash noise
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    // Smooth noise
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);

      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(a, b, u.x) +
             (c - a) * u.y * (1.0 - u.x) +
             (d - b) * u.x * u.y;
    }

    void main() {
      vUv = uv;

      float n = noise(uv * 3.0 + uTime * 0.5);

      // 🎯 THIS MAKES THE REAL BLOB EFFECT
      vec3 pos = position;
      pos.x += n * 0.08;
      pos.y += n * 0.08;

      gl_Position = vec4(pos, 1.0);
    }
  `,
      fragment: `
    precision highp float;
    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
      gl_FragColor = texture2D(tMap, vUv);
    }
  `,
      uniforms: {
        uTime: { value: 0 },
        tMap: { value: texture },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const animate = (t: number) => {
      program.uniforms.uTime.value = t * 0.001;

      renderer.render({ scene: mesh });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      gl.canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[400px] h-[500px] relative overflow-hidden"
    />
  );
}
