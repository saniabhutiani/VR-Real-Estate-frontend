import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
