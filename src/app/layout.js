import Footer from "./Footer";
import Navbar from "./Navbar";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Open Sans Condensed:300' rel='stylesheet'></link>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
