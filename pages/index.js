import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import projectData from "../constants/projectData";
import { useRouter } from "next/router";

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [thumbIdx, setThumbIdx] = useState(0);
    const [viewMode, setViewMode] = useState("list");

    const router = useRouter();

    useEffect(() => {}, [thumbIdx, viewMode]);

    return (
        <ThemeProvider theme={theme}>
            {loading && (
                <>
                    <PageLayout>
                        <div className="thumb_container" style={thumbIdx === 0 ? { display: "none" } : null}>
                            {thumbIdx !== 0 && <img src={projectData[thumbIdx - 1].thumburl}></img>}
                        </div>
                        <div className="mobile_thumb_container" style={{ top: `${thumbIdx * 26 + 155}px` }}>
                            {thumbIdx !== 0 && <img src={projectData[thumbIdx - 1].thumburl}></img>}
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
                                        style={{ color: "#888" }}
                                    >
                                        Conceptual
                                    </div>
                                    <div
                                        onClick={() => {
                                            router.push({
                                                pathname: "/news",
                                            });
                                        }}
                                        style={{ color: "#888" }}
                                    >
                                        News
                                    </div>
                                    <div
                                        onClick={() => {
                                            router.push({
                                                pathname: "/about",
                                            });
                                        }}
                                        style={{ color: "#888" }}
                                    >
                                        About
                                    </div>
                                </div>
                            </div>
                            <div className="view_filter">
                                <div onClick={() => setViewMode("thumbnail")}>Thumbnail</div>
                                <div onClick={() => setViewMode("list")}>List</div>
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
