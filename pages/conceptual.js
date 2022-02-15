import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";
import conceptData from "../constants/conceptData";

const Conceptual = () => {
    const [loading, setLoading] = useState(true);
    const [projectId, setProjectId] = useState(0);
    const router = useRouter();
    const { query } = router;
    const [mTextOpen, setMTextOpen] = useState(false);

    useEffect(() => {
        setProjectId(query.id);
    }, [projectId, router.query, mTextOpen]);

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
                                                query: {
                                                    id: 1,
                                                },
                                            });
                                        }}
                                    >
                                        Conceptual
                                    </div>

                                    <div>News</div>
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
                                                <div>{conceptData[projectId - 1].location}</div>
                                                <div>{conceptData[projectId - 1].period}</div>
                                                <div>{conceptData[projectId - 1].status}</div>
                                                <div>{conceptData[projectId - 1].floor}</div>
                                                <div>{conceptData[projectId - 1].area}</div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="architecture_detail_image_container">
                                        {projectId && projectId != 0 && (
                                            <Slideshow imgArr={conceptData[projectId - 1].images} isAuto isArrowOn />
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
                                            <p>{conceptData[projectId - 1].infoKr}</p>
                                            <p>{conceptData[projectId - 1].infoEn}</p>
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

export default Conceptual;
