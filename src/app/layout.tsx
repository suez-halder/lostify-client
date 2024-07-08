import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lostify | Home Page",
    description: "Lost and found website for everyone",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
