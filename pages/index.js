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
    const [loading, setLoading] = useState(false);
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

    useEffect(() => {
        window.$ = window.jQuery = jQuery;
        __apiGetItemData();
        if (arrayResponseData) {
            setLoading(true);
        }
    }, []);

    function __apiGetItemData() {
        const req = { query: `?param1=project` };
        _AppModelD.getData(req).then(res => {
            if (res.status < 300) {
                if (res && res.data && res.data.results) {
                    setArrayResponseData(
                        Array.from([...res.data.results]).sort((a, b) => parseFloat(a.aid) - parseFloat(b.aid)),
                        console.log(
                            Array.from([...res.data.results]).sort(
                                (a, b) => parseFloat(parseInt(a.rid)) - parseFloat(parseInt(b.rid)),
                            ),
                        ),
                    );
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
                            arrayResponseData &&
                            arrayResponseData[thumbIdx - 1] &&
                            arrayResponseData[thumbIdx - 1].image && (
                                <div
                                    className="thumb_container"
                                    style={thumbIdx === 0 ? { display: "none !important" } : null}
                                >
                                    <img src={arrayResponseData[thumbIdx - 1].image}></img>
                                </div>
                            )}
                        <div className="mobile_thumb_container" style={{ top: `${thumbIdx * 26.5 + 159}px` }}>
                            {thumbIdx !== 0 &&
                                arrayResponseData &&
                                arrayResponseData[thumbIdx - 1] &&
                                arrayResponseData[thumbIdx - 1].image && (
                                    <img src={arrayResponseData[thumbIdx - 1].image}></img>
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
                                        setThumbIdx(0);
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
                                                    <div key={parseInt(el.rid) + el.title} className="index_row">
                                                        <div className="project">
                                                            <div className="main_project_div">
                                                                <span
                                                                    className="mobile_only"
                                                                    style={{ width: "100%", display: "block" }}
                                                                    onTouchStart={() => {
                                                                        setThumbIdx(parseInt(el.rid));
                                                                    }}
                                                                    onTouchCancel={() => {
                                                                        setThumbIdx(0);
                                                                    }}
                                                                    onMouseOver={() => {
                                                                        setThumbIdx(parseInt(el.rid));
                                                                    }}
                                                                    onMouseLeave={() => {
                                                                        setThumbIdx(0);
                                                                    }}
                                                                >
                                                                    {el.title}
                                                                </span>
                                                                <span
                                                                    className="desktop_only"
                                                                    style={{ width: "100%", display: "block" }}
                                                                    onTouchStart={() => {
                                                                        setThumbIdx(parseInt(el.rid));
                                                                    }}
                                                                    onTouchCancel={() => {
                                                                        setThumbIdx(0);
                                                                    }}
                                                                    onMouseOver={() => {
                                                                        setThumbIdx(parseInt(el.rid));
                                                                    }}
                                                                    onMouseLeave={() => {
                                                                        setThumbIdx(0);
                                                                    }}
                                                                    onClick={() => {
                                                                        router.push({
                                                                            pathname: "/architecture",
                                                                            query: {
                                                                                id: parseInt(el.rid),
                                                                            },
                                                                        });
                                                                    }}
                                                                >
                                                                    {el.title}
                                                                </span>
                                                                <span
                                                                    className="more_button"
                                                                    onClick={() => {
                                                                        router.push({
                                                                            pathname: "/architecture",
                                                                            query: {
                                                                                id: parseInt(el.rid),
                                                                            },
                                                                        });
                                                                    }}
                                                                >
                                                                    More ▶︎
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="year"
                                                            onClick={() => {
                                                                router.push({
                                                                    pathname: "/architecture",
                                                                    query: {
                                                                        id: parseInt(el.rid),
                                                                    },
                                                                });
                                                            }}
                                                        >
                                                            <div>{el.period}</div>
                                                        </div>
                                                        <div
                                                            className="program"
                                                            onClick={() => {
                                                                router.push({
                                                                    pathname: "/architecture",
                                                                    query: {
                                                                        id: parseInt(el.rid),
                                                                    },
                                                                });
                                                            }}
                                                        >
                                                            <div>{el.category}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            ) : (
                                <div className="thumbnail_gallery">
                                    {arrayResponseData.map(el => {
                                        return (
                                            <div
                                                key={parseInt(el.rid) + el.title}
                                                onClick={() => {
                                                    router.push({
                                                        pathname: "/architecture",
                                                        query: {
                                                            id: parseInt(el.rid),
                                                        },
                                                    });
                                                }}
                                            >
                                                <img src={el.image}></img>
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
