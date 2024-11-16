import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header/Header";
import Script from "next/script"; // Импортируем Script из next/script

// Подключаем первый шрифт
const sourceSerif4 = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

// Подключаем второй шрифт
const sourceSansPro = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Чайный таймер",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={sourceSerif4.className}>
      <body>
        {/* Загружаем скрипт Font Awesome асинхронно */}
        <Script
          src="https://kit.fontawesome.com/8252c2d253.js"
          crossOrigin="anonymous"
          strategy="afterInteractive" // Скрипт загружается после интерактивности
        />
        <Header />
        <main className={sourceSansPro.className}>{children}</main>
      </body>
    </html>
  );
}
