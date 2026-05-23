import "@/styles/globals.css"
import "@/styles/site.css"
import type { Metadata } from "next";
import { OutfitFont } from "./fonts";
import { ModalProvider } from "@/components/Modal/ModalContext";
import { Toaster } from "sonner";
import ChatBot from "@/components/ChatBot/ChatBot";

export const metadata: Metadata = {
  title: {
    default: "PA Electrix | Trusted Electricians in London & Essex",
    template: "%s | PA Electrix",
  },

  description:
    "PA Electrix provides reliable electrical services across London & Essex. Specialising in consumer unit upgrades, rewires, lighting installations, electrical testing, fault finding, repairs, and more.",

  keywords: [
    "PA Electrix",
    "electrician London",
    "electrician Essex",
    "consumer unit upgrade",
    "fuse board replacement",
    "house rewiring",
    "electrical testing",
    "EICR certificate",
    "lighting installation",
    "fault finding electrician",
    "domestic electrician",
    "commercial electrician",
    "socket installation",
    "electrical repairs",
    "trusted electrician UK",
  ],

  authors: [{ name: "PA Electrix" }],

  creator: "PA Electrix",

  publisher: "PA Electrix",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://paelectrix.co.uk",
    siteName: "PA Electrix",

    title:
      "PA Electrix | Reliable Electrical Services in London & Essex",

    description:
      "Professional electrical services for homes and businesses across London & Essex. Consumer unit upgrades, rewires, lighting, fault finding, testing, repairs, and more.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PA Electrix",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "PA Electrix",

    description:
      "Reliable, tidy & honest electrical services across London & Essex. Installations, testing, repairs & upgrades.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },

  metadataBase: new URL("https://paelectrix.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <html lang="en">
        <body className={OutfitFont.className}>
          {children}
          <Toaster richColors position="top-center" />
          <ChatBot />
        </body>
      </html>
    </ModalProvider>
  );
}
