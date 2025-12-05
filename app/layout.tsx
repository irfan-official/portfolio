// app/layout.tsx  (server component)
import "./globals.css";
import EntryLoadingClient from "@/components/EntryLoading";
import ScrollIndicator from "@/components/ScrollIndicator";

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
        {/* Loading screen */}
        <div id="entry-loader" aria-hidden="false">
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

          <EntryLoadingClient />
        </div>

        {/* Scroll indicator (always visible because of high z-index) */}
        <div id="app-content">
          {/* <ScrollIndicator /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
