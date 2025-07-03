import Header from "./Header";
import Sidebar from "./SideBar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        <Sidebar /> {children}
      </main>
    </div>
  );
}

export default Layout;
