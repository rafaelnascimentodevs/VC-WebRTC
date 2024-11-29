import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/Layout/Navbar";
import Container from "@/components/Layout/Container";
import SocketProvider from "@/providers/SocketProviders";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VideoChat",
  description: "Video Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "relative flex flex-col min-h-screen")}>
          <SocketProvider>
            <main className="flex flex-col flex-grow bg-secondary">
              <NavBar />
              <Container>{children}</Container>
            </main>
          </SocketProvider>

          {/* Footer Section */}
                <footer className="bg-gray-800 text-white p-6 mt-auto">
                    <div className="container mx-auto flex justify-between items-center">
                      <p className="text-sm">Made by Rafael Nascimento</p>
                        <div>
                            <a href="https://github.com/rafaelnascimentodevs" className="hover:underline text-lg mr-4">
                              Github
                            </a>
                            <a href="https://www.linkedin.com/in/rafael-nascimento-513408b2/" className="hover:underline text-lg">
                              Linkedin
                            </a>
                          </div>
                    </div>
                </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
