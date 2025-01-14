import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";

import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";
import jQuery from "jquery";
import parse from "html-react-parser";

import * as _AppModelD from "../api/_AppModelD";

const Conceptual = () => {
    const [loading, setLoading] = useState(false);
    const [thumbIdx, setThumbIdx] = useState(0);
    const [conceptualId, setConceptualId] = useState(0);
    const router = useRouter();
    const { query } = router;
    const [mTextOpen, setMTextOpen] = useState(false);
    const [arrayResponseData, setArrayResponseData] = useState([]);

    useEffect(() => {}, [thumbIdx]);

    useEffect(() => {
        window.$ = window.jQuery = jQuery;

        __apiGetItemData();
        if (arrayResponseData) {
            setLoading(true);
        }

        const conceptualRows = document.getElementsByClassName("conceptual_title_row");

        var conceptualArr = Array.prototype.slice.call(conceptualRows);

        if (conceptualArr) {
            for (let i = 0; i < conceptualArr.length; i++) {
                conceptualArr[i].style.color = "#BABABA";
            }
        }

        if (conceptualArr && conceptualId) conceptualArr[conceptualId - 1].style.color = "#000";

        /* endof code using jquery */
    }, [conceptualId, router.query, query.id, mTextOpen, loading]);

    function __apiGetItemData() {
        // project, news, concept, about
        const req = { query: `?param1=concept` };
        _AppModelD.getData(req).then(res => {
            if (res.status < 300) {
                if (res && res.data && res.data.results) {
                    setArrayResponseData(
                        Array.from([...res.data.results].sort((a, b) => parseInt(a.rid) - parseInt(b.rid))),
                    );
                    setConceptualId(query.id);
                }
            }
        });
    }

    if (conceptualId && conceptualId !== 0) {
        return (
            <ThemeProvider theme={theme}>
                {loading && (
                    <>
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

                                <div className="architecture_header_sub_container" style={{ marginTop: "22.5px" }}>
                                    <div className="view_filter no_border">
                                        <div className=" mobile_only"></div>
                                        <div
                                            onClick={() => {
                                                router.push({
                                                    pathname: "/conceptual",
                                                });
                                            }}
                                            className="mobile_only"
                                        >
                                            List
                                        </div>
                                    </div>
                                    <div className="mobile_only_architecture_title_row">
                                        {conceptualId &&
                                            conceptualId != 0 &&
                                            arrayResponseData[conceptualId - 1] &&
                                            arrayResponseData[conceptualId - 1].title}
                                    </div>
                                    <div className="architecture_first_box">
                                        <div className="architecture_header">
                                            <div className="header_sub_menu">
                                                <div className="project">
                                                    <div>Project</div>
                                                </div>
                                            </div>
                                            <div className="architecture_content_index">
                                                {arrayResponseData &&
                                                    arrayResponseData.map(el => {
                                                        return (
                                                            <div
                                                                key={parseInt(el.rid) + el.title}
                                                                className="index_row"
                                                                onClick={() => {
                                                                    router.push({
                                                                        pathname: "/conceptual",
                                                                        query: {
                                                                            id: parseInt(el.rid),
                                                                        },
                                                                    });
                                                                }}
                                                            >
                                                                <div className="project">
                                                                    <div className="conceptual_title_row">
                                                                        {el.title}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>

                                        <div
                                            className="detail_information_row conceptual_detail_information_row"
                                            style={{ top: `${conceptualId * 22.5 + 21.5}px` }}
                                        >
                                            <div className="conceptual_detail_row firstbox">
                                                <div>Location</div>
                                                <div>{arrayResponseData[conceptualId - 1].location}</div>
                                            </div>
                                            <div className="conceptual_detail_row">
                                                <div>Period</div>
                                                <div>{arrayResponseData[conceptualId - 1].period}</div>
                                            </div>
                                            <div className="conceptual_detail_row">
                                                <div>Status</div>{" "}
                                                <div>{arrayResponseData[conceptualId - 1].status}</div>
                                            </div>
                                            <div className="conceptual_detail_row">
                                                <div>Program</div>
                                                <div>{arrayResponseData[conceptualId - 1].program}</div>
                                            </div>
                                            <div className="conceptual_detail_row">
                                                <div>Meterial</div>
                                                <div>{arrayResponseData[conceptualId - 1].material}</div>
                                            </div>
                                            <div className="conceptual_detail_row">
                                                <div>Dimension</div>
                                                <div>{arrayResponseData[conceptualId - 1].dimension}</div>
                                            </div>
                                            <div className="conceptual_detail_row">
                                                <div>Budget</div>{" "}
                                                <div>{arrayResponseData[conceptualId - 1].budget}</div>
                                            </div>
                                        </div>

                                        <div className="architecture_detail_image_container conceptual_detail_image_container">
                                            {conceptualId && conceptualId != 0 && (
                                                <Slideshow
                                                    imgArr={arrayResponseData[conceptualId - 1].images}
                                                    isArrowOn
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="more_information_box">
                                        <div className="more_information_title">
                                            {!mTextOpen && <span className="desktop_only">More Information</span>}
                                            <span className="mobile_only">More Information</span>
                                            <span
                                                onClick={() => setMTextOpen(!mTextOpen)}
                                                style={
                                                    mTextOpen
                                                        ? { transform: "rotate(180deg)", left: "30%", bottom: "0" }
                                                        : null
                                                }
                                            >
                                                ▲
                                            </span>
                                        </div>
                                        {conceptualId && conceptualId != 0 && mTextOpen && (
                                            <div className="more_information_text">
                                                {parse(arrayResponseData[conceptualId - 1].info_kr)}
                                                {parse(arrayResponseData[conceptualId - 1].info_en)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </PageLayout>
                    </>
                )}
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            {loading && (
                <>
                    <PageLayout>
                        <div
                            className="conceptual_thumb_container desktop_only"
                            style={thumbIdx === 0 ? { display: "none" } : null}
                        >
                            {thumbIdx !== 0 && (
                                <>
                                    {arrayResponseData[thumbIdx - 1].images.slice(0, 3).map(el => {
                                        return (
                                            <div key={el.title}>
                                                <img src={el.image}></img>
                                            </div>
                                        );
                                    })}
                                </>
                            )}
                        </div>

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
                            <div className="header_sub_container conceptual_header_sub_container">
                                <div className="view_filter no_border">
                                    <div className=" mobile_only"></div>
                                    <div
                                        onClick={() => {
                                            router.push({
                                                pathname: "/conceptual",
                                            });
                                        }}
                                        className="mobile_only"
                                    >
                                        List
                                    </div>
                                </div>
                                <div className="header_sub_menu">
                                    <div className="conceptual_project">
                                        <div>Project</div>
                                    </div>
                                </div>
                                <div className="content_index">
                                    {arrayResponseData &&
                                        arrayResponseData.map(el => {
                                            return (
                                                <div key={el.title} className="index_row">
                                                    <div className="conceptual_project">
                                                        <div>
                                                            <span
                                                                className="mobile_only"
                                                                style={{ width: "100%", display: "block" }}
                                                                onMouseOver={() => {
                                                                    setThumbIdx(parseInt(el.rid));
                                                                }}
                                                                onMouseLeave={() => {
                                                                    setThumbIdx(0);
                                                                }}
                                                                onTouchStart={() => {
                                                                    setThumbIdx(parseInt(el.rid));
                                                                }}
                                                                onTouchCancel={() => {
                                                                    setThumbIdx(0);
                                                                }}
                                                            >
                                                                {el.title}
                                                            </span>
                                                            <span
                                                                className="desktop_only"
                                                                style={{ width: "100%", display: "block" }}
                                                                onMouseOver={() => {
                                                                    setThumbIdx(parseInt(el.rid));
                                                                }}
                                                                onMouseLeave={() => {
                                                                    setThumbIdx(0);
                                                                }}
                                                                onTouchStart={() => {
                                                                    setThumbIdx(parseInt(el.rid));
                                                                }}
                                                                onTouchCancel={() => {
                                                                    setThumbIdx(0);
                                                                }}
                                                                onClick={() => {
                                                                    router.push({
                                                                        pathname: "/conceptual",
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
                                                                        pathname: "/conceptual",
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
                                                </div>
                                            );
                                        })}
                                </div>
                                <div
                                    className="conceptual_mobile_thumb_container mobile_only"
                                    style={{ marginTop: "20px" }}
                                >
                                    {thumbIdx !== 0 && <img src={arrayResponseData[thumbIdx - 1].image}></img>}
                                </div>
                            </div>
                        </div>
                    </PageLayout>
                </>
            )}
        </ThemeProvider>
    );
};

export default Conceptual;
