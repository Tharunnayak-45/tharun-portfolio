import type { Metadata } from "next";
// @ts-ignore: allow side-effect CSS import in Next.js app directory
import "./globals.css";

export const metadata: Metadata = {
    title: "Mudavath Tharun | Portfolio",
    description:
        "Mudavath Tharun - Computer Science Engineering Student Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}