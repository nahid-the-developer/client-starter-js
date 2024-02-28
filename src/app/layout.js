import {Inter} from "next/font/google";
import "./globals.css";
import {SessionProvider} from "@/providers/SessionProvider";
import {TokenProvider} from "@/context/tokenContext";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import ThemeProvider from "@/providers/themeProvider";
import {ThemeProvider as NextThemeProvider, useTheme} from "next-themes";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Client Starter",
    description: "Generated by Nahid Hasan",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <NextThemeProvider defaultTheme='dark'>
            <AppRouterCacheProvider options={{key: 'css'}}>
                <ThemeProvider>
                    <SessionProvider>
                        <TokenProvider>
                            {children}
                        </TokenProvider>
                    </SessionProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </NextThemeProvider>
        </body>
        </html>
    );
}
