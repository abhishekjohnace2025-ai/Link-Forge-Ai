import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProviderWrapper } from '@/components/ClerkProvider';
import { ConvexProviderWrapper } from '@/components/ConvexProviderWrapper';
import { AuthProvider } from '@/lib/authContext';
import { Analytics } from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "A simple and efficient URL shortening service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ClerkProviderWrapper>
          <ConvexProviderWrapper>
            <AuthProvider>
              {children}
              <Analytics/>
            </AuthProvider>
          </ConvexProviderWrapper>
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
