// src/app/layout.tsx
import { ProvedorTarefa } from "@/data/ContextTarefa";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ProvedorTarefa>
          {children}
        </ProvedorTarefa>
      </body>
    </html>
  );
}
