import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const dmsans = localFont({
  src: "../../public/fonts/DMSans-VariableFont_opsz,wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viver de IA Experience Amazônia",
  description: "Imersão de Inteligência Artificial para Empresário e Líderes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* 1) Inicializa dataLayer e dispara o pageview inicial */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'pageview',
              page_path: window.location.pathname + window.location.search,
              page_title: document.title
            });
          `}
        </Script>

        {/* 2) Carrega o GTM */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WPHTG3K9');
            `,
          }}
        />

        {/* 3) Pageviews em navegações SPA (App Router) */}
        <Script id="gtm-spa" strategy="afterInteractive">
          {`
            (function() {
              if (typeof window === 'undefined') return;

              const pushPV = () => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'pageview',
                  page_path: window.location.pathname + window.location.search,
                  page_title: document.title
                });
              };

              // Dispara em mudanças de histórico (Next.js App Router usa pushState/replaceState)
              const wrap = (type) => {
                const orig = history[type];
                return function() {
                  const rv = orig.apply(this, arguments);
                  setTimeout(pushPV, 0);
                  return rv;
                };
              };

              history.pushState = wrap('pushState');
              history.replaceState = wrap('replaceState');
              window.addEventListener('popstate', pushPV);
            })();
          `}
        </Script>
      </head>

      <body className={`${dmsans.className} antialiased`}>
        {children}

        {/* NoScript para fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPHTG3K9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}