import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function PageLayout({ children }) {
    const router = useRouter();

    const excludePath = ["/architecture"];

    return (
        <div className="layout_container">
            <div id="body">
                <div id="container">{children}</div>
                {router.pathname.includes(excludePath) ? null : <Footer></Footer>}
            </div>
        </div>
    );
}

export default PageLayout;
