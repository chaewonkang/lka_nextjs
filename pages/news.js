import theme from "../styles/theme";
import { useEffect, useState, useRef } from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const News = () => {
    const menuTop = useRef();
    const router = useRouter();
    const [contentTop, setContentTOp] = useState(0);

    useEffect(() => {
        setContentTOp(menuTop.current.offsetTop);
    }, [contentTop]);

    return (
        <PageLayout>
            <div className="indexing">
                <div className="header_container">
                    <Link href="/">
                        <div className="company_title">
                            <div>Leehong Kim</div>
                            <div>Architects</div>
                        </div>
                    </Link>
                    <div className="category">
                        <div
                            onClick={() => {
                                router.push({
                                    pathname: "/architecture",
                                    query: {
                                        id: 1,
                                    },
                                });
                            }}
                        >
                            Architecture
                        </div>

                        <div
                            onClick={() => {
                                router.push({
                                    pathname: "/conceptual",
                                });
                            }}
                        >
                            Conceptual
                        </div>
                        <div
                            onClick={() => {
                                router.push({
                                    pathname: "/news",
                                });
                            }}
                        >
                            News
                        </div>
                        <Link href="/about">
                            <div ref={menuTop}>About</div>
                        </Link>
                    </div>
                </div>
                <div className="header_sub_container" style={{ top: contentTop - 5 }}></div>
            </div>
        </PageLayout>
    );
};

export default News;
