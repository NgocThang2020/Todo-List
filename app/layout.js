import "./globals.css";
import SidebarWrapper from "./components/SidebarWrapper";

export const metadata = {
  title: "Dashboard App",
  description: "Quản lý hệ thống người dùng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
}
