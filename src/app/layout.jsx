import Navbar from "@/sections/navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>curelogics</title>
      </head>
      <body>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
