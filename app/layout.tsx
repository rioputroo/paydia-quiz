import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import ModalProvider from "@/components/modals/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const sora = Sora({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Paydia Quiz - Test Your Knowledge!",
  description: "A Quiz App from Paydia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.className}>
        <ModalProvider />
        <main>{children}</main>
        <Toaster position="top-center" duration={5000} richColors />
      </body>
    </html>
  );
}
