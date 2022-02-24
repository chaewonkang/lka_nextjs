import theme from "../styles/theme";
import { useEffect, useState, useRef } from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";
import newsData from "../constants/newsData";

const News = () => {
    const menuTop = useRef();
    const router = useRouter();
    const [contentTop, setContentTop] = useState(0);

    useEffect(() => {
        setContentTop(menuTop.current.offsetTop);
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
                        <div
                            ref={menuTop}
                            onClick={() => {
                                router.push({
                                    pathname: "/about",
                                });
                            }}
                        >
                            About
                        </div>
                    </div>
                </div>
                <div
                    className="header_sub_container"
                    style={{ top: contentTop - 5, height: `calc(100vh - ${contentTop}px)` }}
                >
                    <div className="news_content_container" style={{ height: `calc(100% - ${contentTop + 30}px)` }}>
                        <div className="news_content_wrapper">
                            {newsData.map(news => {
                                return (
                                    <div className="news_module">
                                        <div className="news_module_slideshow">
                                            <Slideshow imgArr={news.images} isArrowOn />
                                        </div>
                                        <div className="news_module_info">
                                            <span>{news.createAt}</span>
                                            <br />
                                            <span>{news.title}</span>
                                            <span>
                                                <a href={news.linkUrl} target="_blank">
                                                    {news.link}
                                                </a>
                                            </span>
                                            <span>
                                                {news.category}| {news.publication}
                                            </span>
                                            <span>{news.issn}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default News;
