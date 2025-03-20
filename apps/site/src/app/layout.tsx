import { Inter } from 'next/font/google';
import 'src/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="h-screen w-screen bg-support text-primary">
        <header className="border-b-2 border-primary flex pr-5 pl-5">
          <ul className="flex gap-4 items-end">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </header>
        <main className="p-5">
          {children}
          <p className="border-t-2 border-b-2 border-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </main>
      </body>
    </html>
  );
}
