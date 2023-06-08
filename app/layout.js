import "../app/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "ARH",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section id="my-portfolio">
          <div className="container">
            <div className="my-portfolio-content-wrapper">
              <div className="portfolio-content-left">
                <Nav />
              </div>
              <div className="portfolio-content-right">{children}</div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}