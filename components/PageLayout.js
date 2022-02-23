import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function PageLayout({ children }) {
    const router = useRouter();
    const { query } = router;

    const excludePath = ["/architecture", "/conceptual"];

    return (
        <div className="layout_container">
            <div id="body">
                <div id="container">{children}</div>
                {router.query.id ? null : <Footer />}
            </div>
        </div>
    );
}

export default PageLayout;
