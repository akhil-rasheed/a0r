import DesktopHeader from "./components/DesktopHeader";
import MobileSiteTemp from "./components/MobileSiteTemp";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="h-screen">
      <div className="hidden lg:flex h-screen flex-col w-full bg-white p-8">
        <DesktopHeader />
        <Content />
        <Footer />
      </div>
      <MobileSiteTemp />
    </div>
  );
}
