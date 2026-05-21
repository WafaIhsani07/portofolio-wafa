import "./globals.css";

export const metadata = {
  title: "Nurwahidah Wafa Ihsani - Portofolio",
  description: "Portofolio pribadi Nurwahidah Wafa Ihsani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
