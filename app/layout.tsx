// app/layout.tsx  (server component)
import "./globals.css";
import EntryLoadingClient from "@/components/EntryLoading";

export const metadata = {
  title: "My App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 1) Server-rendered loader markup (visible by default on SSR) */}

        <div id="entry-loader" aria-hidden="false">
          {/* fallback: simple static content so server renders something immediately */}
          <div className="loader-fallback">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" stroke="#9d1bd2" strokeWidth="2" />
            </svg>
            <div>Loading…</div>
          </div>

          {/* Client component that will mount and initialise Vanta and hide the loader */}
          <EntryLoadingClient />
        </div>

        {/* 2) Main app content hidden by default via CSS (#app-content) */}
        <div id="app-content">{children}</div>
      </body>
    </html>
  );
}
