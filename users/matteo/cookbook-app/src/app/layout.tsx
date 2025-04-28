import './globals.css';
import type { Metadata } from 'next';
import Layout from '../components/layout/Layout';

export const metadata: Metadata = {
  title: 'Flow Cookbook',
  description: 'Favorite recipes from our employees',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}