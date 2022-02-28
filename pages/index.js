import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import projectData from "../constants/projectData";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import jQuery from "jquery";

import * as _AppModelD from "../api/_AppModelD";

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [thumbIdx, setThumbIdx] = useState(0);
    const [viewMode, setViewMode] = useState("list");
    const [arrayResponseData, setArrayResponseData] = useState([]);
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (!query.mode) setViewMode("list");
        else if (query.mode === "list") setViewMode("list");
        else setViewMode("thumbnail");
    }, [thumbIdx, viewMode, router.query]);

    function removeMobileOnclick() {
        if (isMobile()) {
            document.querySelector(".index_row").onTouchStart = "";
        }
    }

    function isMobile() {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) {
            return true;
        }
    }

    useEffect(() => {
        window.$ = window.jQuery = jQuery;
        // __apiGetItemData();

        const projectRows = document.getElementsByClassName("index_row");
        var projetArr = Array.prototype.slice.call(projectRows);

        window.addEventListener("load", removeMobileOnclick);

        /* code using jquery */

        /* endof code using jquery */
    }, []);

    function __apiGetItemData() {
        console.log("__apiGetItemData - 0");
        // project, news, concept, about
        const req = { query: `?param1=concept` };
        _AppModelD.getData(req).then(res => {
            console.log("__apiGetItemData - 1");
            console.log(res);
            if (res.status < 300) {
                if (res && res.data && res.data.results) {
                    setArrayResponseData(Array.from([...res.data.results]));
                }
            }
        });
    }

    return (
        <ThemeProvider theme={theme}>
            {loading && (
                <>
                    <PageLayout>
                        {thumbIdx !== 0 &&
                            projectData &&
                            projectData[thumbIdx - 1] &&
                            projectData[thumbIdx - 1].thumburl && (
                                <div
                                    className="thumb_container"
                                    style={thumbIdx === 0 ? { display: "none !important" } : null}
                                >
                                    <img src={projectData[thumbIdx - 1].thumburl}></img>
                                </div>
                            )}
                        <div className="mobile_thumb_container" style={{ top: `${thumbIdx * 26.5 + 155}px` }}>
                            {thumbIdx !== 0 &&
                                projectData &&
                                projectData[thumbIdx - 1] &&
                                projectData[thumbIdx - 1].thumburl && (
                                    <img src={projectData[thumbIdx - 1].thumburl}></img>
                                )}
                        </div>
                        <div className="indexing" style={viewMode === "thumbnail" ? { flexDirection: "column" } : null}>
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
                                        style={{ color: "#BABABA" }}
                                    >
                                        News
                                    </div>
                                    <div
                                        onClick={() => {
                                            router.push({
                                                pathname: "/about",
                                            });
                                        }}
                                        style={{ color: "#BABABA" }}
                                    >
                                        About
                                    </div>
                                </div>
                            </div>
                            <div className="view_filter">
                                <div
                                    onClick={() => {
                                        router.push({
                                            pathname: "/",
                                            query: {
                                                mode: "thumbnail",
                                            },
                                        });
                                    }}
                                    style={viewMode === "list" ? { color: "#BABABA" } : null}
                                >
                                    Thumbnail
                                </div>
                                <div
                                    onClick={() => {
                                        router.push({
                                            pathname: "/",
                                            query: {
                                                mode: "list",
                                            },
                                        });
                                    }}
                                    style={viewMode === "thumbnail" ? { color: "#BABABA" } : null}
                                >
                                    List
                                </div>
                            </div>
                            {viewMode === "list" ? (
                                <div className="header_sub_container">
                                    <div className="header_sub_menu">
                                        <div className="project">
                                            <div>Project</div>
                                        </div>
                                        <div className="year">
                                            <div>Year</div>
                                        </div>
                                        <div className="program">
                                            <div>Program</div>
                                        </div>
                                    </div>
                                    <div className="content_index">
                                        {arrayResponseData &&
                                            arrayResponseData.map(el => {
                                                return (
                                                    <div
                                                        key={el.index + el.title}
                                                        className="index_row"
                                                        onMouseOver={() => {
                                                            setThumbIdx(el.aid);
                                                        }}
                                                        onMouseLeave={() => {
                                                            setThumbIdx(0);
                                                        }}
                                                        onClick={() => {
                                                            router.push({
                                                                pathname: "/architecture",
                                                                query: {
                                                                    id: el.aid,
                                                                },
                                                            });
                                                        }}
                                                    >
                                                        <div className="project">
                                                            <div>
                                                                {el.title}
                                                                <span className="more_button">More ▶︎</span>
                                                            </div>
                                                        </div>
                                                        <div className="year">
                                                            <div>{el.period}</div>
                                                        </div>
                                                        <div className="program">
                                                            <div>{el.category}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        {projectData &&
                                            projectData.map(el => {
                                                return (
                                                    <div
                                                        key={el.index + el.title}
                                                        className="index_row"
                                                        onMouseOver={() => {
                                                            setThumbIdx(el.index);
                                                        }}
                                                        onMouseLeave={() => {
                                                            setThumbIdx(0);
                                                        }}
                                                        onTouchStart={() => {
                                                            setThumbIdx(el.index);
                                                        }}
                                                        onTouchCancel={() => {
                                                            setThumbIdx(0);
                                                        }}
                                                        onClick={() => {
                                                            router.push({
                                                                pathname: "/architecture",
                                                                query: {
                                                                    id: el.index,
                                                                },
                                                            });
                                                        }}
                                                    >
                                                        <div className="project">
                                                            <div>
                                                                {el.title}
                                                                <span className="more_button">More ▶︎</span>
                                                            </div>
                                                        </div>
                                                        <div className="year">
                                                            <div>{el.period}</div>
                                                        </div>
                                                        <div className="program">
                                                            <div>{el.category}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            ) : (
                                <div className="thumbnail_gallery">
                                    {projectData.map(el => {
                                        return (
                                            <div
                                                key={el.index + el.title}
                                                onClick={() => {
                                                    router.push({
                                                        pathname: "/architecture",
                                                        query: {
                                                            id: el.index,
                                                        },
                                                    });
                                                }}
                                            >
                                                <img src={el.thumburl}></img>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </PageLayout>
                </>
            )}
        </ThemeProvider>
    );
};

export default Index;
