import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import conceptData from "../constants/conceptData";
import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";
import parse from "html-react-parser";

import * as _AppModelD from "../api/_AppModelD";

const Conceptual = () => {
    const [loading, setLoading] = useState(true);
    const [thumbIdx, setThumbIdx] = useState(0);
    const [conceptualId, setConceptualId] = useState(0);
    const router = useRouter();
    const { query } = router;
    const [mTextOpen, setMTextOpen] = useState(false);
    const [arrayResponseData, setArrayResponseData] = useState([]);

    useEffect(() => {}, [thumbIdx]);

    useEffect(() => {
        setConceptualId(query.id);
        console.log(conceptualId);
    }, [router.query, conceptualId]);

    useEffect(() => {
        // __apiGetItemData();
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
                                    <div className="mobile_only architecture_title_row">
                                        {conceptualId && conceptualId != 0 && conceptData[conceptualId - 1].title}
                                    </div>
                                    <div className="architecture_first_box">
                                        <div className="architecture_header">
                                            <div className="header_sub_menu">
                                                <div className="project">
                                                    <div>Project</div>
                                                </div>
                                            </div>
                                            <div className="architecture_content_index">
                                                {conceptData &&
                                                    conceptData.map(el => {
                                                        return (
                                                            <div
                                                                key={el.index + el.title}
                                                                className="index_row"
                                                                onClick={() => {
                                                                    router.push({
                                                                        pathname: "/conceptual",
                                                                        query: {
                                                                            id: el.index,
                                                                        },
                                                                    });
                                                                }}
                                                            >
                                                                <div className="project">
                                                                    <div>{el.title}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                        {conceptualId && conceptualId != 0 && (
                                            <div
                                                className="detail_information_row conceptual_detail_information_row"
                                                style={{ top: `${conceptualId * 22.5 + 21.5}px` }}
                                            >
                                                <div className="conceptual_detail_row">
                                                    <div>Location</div>
                                                    <div>{conceptData[conceptualId - 1].location}</div>
                                                </div>
                                                <div className="conceptual_detail_row">
                                                    <div>Period</div> <div>{conceptData[conceptualId - 1].period}</div>
                                                </div>
                                                <div className="conceptual_detail_row">
                                                    <div>Status</div> <div>{conceptData[conceptualId - 1].status}</div>
                                                </div>
                                                <div className="conceptual_detail_row">
                                                    <div>Program</div>
                                                    <div>{conceptData[conceptualId - 1].program}</div>
                                                </div>
                                                <div className="conceptual_detail_row">
                                                    <div>Meterial</div>
                                                    <div>{conceptData[conceptualId - 1].material}</div>
                                                </div>
                                                <div className="conceptual_detail_row">
                                                    <div>Dimension</div>
                                                    <div>{conceptData[conceptualId - 1].dimension}</div>
                                                </div>
                                                <div className="conceptual_detail_row">
                                                    <div>Budget</div> <div>{conceptData[conceptualId - 1].budget}</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="architecture_detail_image_container">
                                            {conceptualId && conceptualId != 0 && (
                                                <Slideshow
                                                    imgArr={conceptData[conceptualId - 1].images}
                                                    isAuto
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
                                                <p>{conceptData[conceptualId - 1].info_kr}</p>
                                                <p>{conceptData[conceptualId - 1].info_en}</p>
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
                                    {conceptData[thumbIdx - 1].images.slice(0, 3).map(el => {
                                        return (
                                            <div key={el.title}>
                                                <img src={el.url}></img>
                                            </div>
                                        );
                                    })}
                                </>
                            )}
                        </div>
                        <div className="mobile_thumb_container" style={{ top: `${thumbIdx * 26 + 155}px` }}>
                            {thumbIdx !== 0 && <img src={conceptData[thumbIdx - 1].thumburl}></img>}
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
                            <div className="header_sub_container conceptual_header_sub_container">
                                <div className="header_sub_menu">
                                    <div className="conceptual_project">
                                        <div>Project</div>
                                    </div>
                                </div>
                                <div className="content_index">
                                    {conceptData &&
                                        conceptData.map(el => {
                                            return (
                                                <div
                                                    key={el.title}
                                                    className="index_row"
                                                    onMouseOver={() => {
                                                        setThumbIdx(el.index);
                                                    }}
                                                    onMouseLeave={() => {
                                                        setThumbIdx(0);
                                                    }}
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: "/conceptual",
                                                            query: {
                                                                id: el.index,
                                                            },
                                                        });
                                                    }}
                                                >
                                                    <div className="conceptual_project">
                                                        <div>
                                                            {el.title}
                                                            <span className="more_button">More ▶︎</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
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
