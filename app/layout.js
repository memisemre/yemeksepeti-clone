import Header from "./components/header/header";
import "./global.css";
export const metadata = {
  title:
    "Delivery from restaurants near me - online food order - Yemeksepeti.com",
  description:
    "Hungry? Choose your favorite food from thousands of restaurant menus on Yemeksepeti, have it delivered right to your door.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
