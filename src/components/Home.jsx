import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{/* page content goes here */}</main>
        <Footer />
      </div>
    </>
  );
}
