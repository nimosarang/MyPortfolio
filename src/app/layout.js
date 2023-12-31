import "@/assets/scss/style.scss"

export const metadata = {
  title: "My Portfolio",
  description: "the Project Generated by create next app",
  keywords: ["portfolio", "next.js", "eddy"],
};

export default function RootLayout({children}) {
  return (
      <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg"/>
      <body>{children}</body>
      </html>
  );
}
