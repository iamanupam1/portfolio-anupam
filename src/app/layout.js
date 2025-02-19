import { Providers } from "@/components/provider/ThemeProvider";
import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Anupam Dhakal | Portfolio",
  description: "Anupam Dhakal Portfolio Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kanit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
