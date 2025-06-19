import "./globals.css";



export const metadata = {
  title: "Gamersupps landing page",
  description: "Gamersupps landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
