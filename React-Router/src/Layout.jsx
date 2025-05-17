import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";
export function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
