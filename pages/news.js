import theme from "../styles/theme";
import { useEffect, useState, useRef } from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";

import parse from "html-react-parser";
import jQuery from "jquery";

import * as _AppModelD from "../api/_AppModelD";
import { ThemeProvider } from "styled-components";

const News = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isSafari, setIsSafari] = useState();
    const [arrayResponseData, setArrayResponseData] = useState([]);

    useEffect(() => {
        __apiGetItemData();
    }, [loading]);

    function __apiGetItemData() {
        // project, news, concept, about
        const req = { query: `?param1=news` };
        _AppModelD.getData(req).then(res => {
            if (res.status < 300) {
                if (res && res.data && res.data.results) {
                    setArrayResponseData(Array.from([...res.data.results]));
                    setLoading(true);
                    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
                }
            }
        });
    }

    return (
        <ThemeProvider theme={theme}>
            {loading && (
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
                                    style={{ color: "#BABABA" }}
                                >
                                    Architecture
                                </div>
                                <div
                                    onClick={() => {
                                        router.push({
                                            pathname: "/conceptual",
                                        });
                                    }}
                                    style={{ color: "#BABABA" }}
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
                                    onClick={() => {
                                        router.push({
                                            pathname: "/about",
                                        });
                                    }}
                                    className="about_position"
                                    style={{ color: "#BABABA" }}
                                >
                                    About
                                </div>
                            </div>
                        </div>
                        <div
                            className="header_sub_container news_header_sub_container"
                            style={isSafari ? { paddingTop: "66.5px" } : { paddingTop: "66.7px" }}
                        >
                            <div className="news_content_container">
                                <div className="news_content_wrapper">
                                    {arrayResponseData.map(news => {
                                        return (
                                            <div className="news_module">
                                                <div className="mobile_only news_date_row">
                                                    {" "}
                                                    {news.created_at.slice(0, 10).replace(/-/g, ".")}
                                                </div>
                                                <div className="news_module_slideshow">
                                                    <Slideshow imgArr={news.images} isArrowOn />
                                                </div>
                                                <div className="news_module_info">
                                                    <span className="desktop_only">
                                                        {news.created_at.slice(0, 10).replace(/-/g, ".")}
                                                    </span>
                                                    <br className="desktop_only"></br>
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
            )}
        </ThemeProvider>
    );
};

export default News;
