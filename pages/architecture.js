import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import projectData from "../constants/projectData";
import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";
import parse from "html-react-parser";

import * as _AppModelD from "../api/_AppModelD";

const Architecture = () => {
    const [loading, setLoading] = useState(true);
    const [projectId, setProjectId] = useState(0);
    const router = useRouter();
    const { query } = router;
    const [mTextOpen, setMTextOpen] = useState(false);
    const [arrayResponseData, setArrayResponseData] = useState([]);

    useEffect(() => {
        setProjectId(query.id);
    }, [projectId, router.query, mTextOpen]);


    useEffect(() => {
        // __apiGetItemData();
    }, [])

    function __apiGetItemData() {
        console.log("__apiGetItemData - 0")
        // project, news, concept, about
        const req = { query :  `?param1=project`}
        _AppModelD.getData(req)
        .then(res => {
            console.log("__apiGetItemData - 1")
            console.log(res)
            if (res.status < 300) {
                if (res && res.data && res.data.results) {
                    setArrayResponseData(Array.from([
                        ...res.data.results, 
                    ]))

                }
            }
        })
    }


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
                                    >
                                        Architecture
                                    </div>

                                    <div
                                        onClick={() => {
                                            router.push({
                                                pathname: "/conceptual",
                                            });
                                        }}
                                        style={{ color: "#888 !important" }}
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
                                        <div>About</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="architecture_header_sub_container">
                                <div className="architecture_first_box">
                                    <div className="architecture_header">
                                        <div className="header_sub_menu">
                                            <div className="project">
                                                <div>Project</div>
                                            </div>
                                        </div>
                                        <div className="architecture_content_index">
                                            {/* API */}
                                            {/* {arrayResponseData &&
                                                arrayResponseData.map(el => {
                                                    return (
                                                        <div
                                                            key={el.index + el.title}
                                                            className="index_row"
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
                                                                <div>{el.title}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })} */}
                                            {/* NO API */}
                                            {projectData &&
                                                projectData.map(el => {
                                                    return (
                                                        <div
                                                            key={el.index + el.title}
                                                            className="index_row"
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
                                                                <div>{el.title}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                    {projectId && projectId != 0 && (
                                        <div
                                            className="detail_information_row"
                                            style={{ top: `${projectId * 22.5 + 21.5}px` }}
                                        >
                                            <div>
                                                <div>Location</div>
                                                <div>Period</div>
                                                <div>Status</div>
                                                <div>Floor</div>
                                                <div>Floor Area</div>
                                            </div>
                                            <div>
                                                <div>{projectData[projectId - 1].location}</div>
                                                <div>{projectData[projectId - 1].period}</div>
                                                <div>{projectData[projectId - 1].status}</div>
                                                <div>{projectData[projectId - 1].floor}</div>
                                                <div>{projectData[projectId - 1].area}</div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="architecture_detail_image_container">
                                        {projectId && projectId != 0 && (
                                            <Slideshow imgArr={projectData[projectId - 1].images} isAuto isArrowOn />
                                        )}
                                    </div>
                                </div>
                                <div className="more_information_box">
                                    <div className="more_information_title">
                                        {!mTextOpen && <span>More Information</span>}
                                        <span
                                            onClick={() => setMTextOpen(!mTextOpen)}
                                            style={mTextOpen ? { transform: "rotate(180deg)", left: "30%" } : null}
                                        >
                                            ▲
                                        </span>
                                    </div>
                                    {projectId && projectId != 0 && mTextOpen && (
                                        <div className="more_information_text">
                                            <p>{projectData[projectId - 1].info_kr}</p>
                                            <p>{projectData[projectId - 1].info_en}</p>
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
};

export default Architecture;
