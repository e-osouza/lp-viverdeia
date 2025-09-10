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
      <body
        className={`${dmsans.className} antialiased`}
      >
        {/* Script do GTM */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WPHTG3K9');
          `}
        </Script>
        {children}

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
