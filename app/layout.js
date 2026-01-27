import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/Wrapper";
import ProductProvider from "@/components/ProductProvider";

const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant_garamond",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"]
})

export const metadata = {
  title: "Shop.CO",
  description: "This is an online platform to sell your outfit ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    // crosspilot=""
    >
      <body className={`${cormorant_garamond.variable} ${raleway.variable} antialiased`}>
        
        <ProductProvider>
          <Wrapper>
            {children}
          </Wrapper>
        </ProductProvider>

      </body>
    </html>
  );
}
