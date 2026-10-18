import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
    return (
        <div id="page-wrapper">
            <ScrollToTop />
            <Header />
            <div id="container">
                <Nav />
                <Main>
                    <Outlet />
                </Main>
            </div>
            <Footer />
        </div>
    );
}