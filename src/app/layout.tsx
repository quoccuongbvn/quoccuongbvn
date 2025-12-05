import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Tarota.vn - Tarot Oracle",
  description: "Trải nghiệm bói Tarot hiện đại với hiệu ứng cosmic mượt mà.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
