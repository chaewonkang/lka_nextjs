import { ThemeProvider } from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../styles/theme";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import Slideshow from "../components/Slideshow";
import parse from "html-react-parser";
import jQuery from "jquery";

import * as _AppModelD from "../api/_AppModelD";

const Architecture = () => {
    const [loading, setLoading] = useState(false);
    const [projectId, setProjectId] = useState(0);
    const router = useRouter();
    const { query } = router;
    const [mTextOpen, setMTextOpen] = useState(false);
    const [arrayResponseData, setArrayResponseData] = useState([]);
    const [detailIdx, setDetailIdx] = useState(0);

    function __apiGetItemData() {
        const req = { query: `?param1=project` };
        _AppModelD.getData(req).then(res => {
            if (res.status < 300) {
                if (res && res.data && res.data.results) {
                    setArrayResponseData(
                        Array.from([...res.data.results]).sort((a, b) => parseFloat(a.aid) - parseFloat(b.aid)),
                    );
                    setProjectId(query.id);
                    setDetailIdx(query.id);
                }
            }
        });
    }

    useEffect(() => {
        window.$ = window.jQuery = jQuery;

        __apiGetItemData();
        if (arrayResponseData) setLoading(true);

        const architectureRows = document.getElementsByClassName("architecture_title_row");
        const detailInfoRows = document.getElementsByClassName("detail_information_row");

        var architectureArr = Array.prototype.slice.call(architectureRows);
        var detailInfoArr = Array.prototype.slice.call(detailInfoRows);

        if (architectureArr && detailInfoArr) {
            for (let i = 0; i < architectureArr.length; i++) {
                architectureArr[i].style.color = "#BABABA";
            }

            for (let i = 0; i < detailInfoArr.length; i++) {
                detailInfoArr[i].style.display = "none";
            }
        }

        if (
            architectureArr &&
            detailInfoArr &&
            projectId != 0 &&
            arrayResponseData &&
            architectureArr[projectId - 1] &&
            detailInfoArr[projectId - 1]
        ) {
            architectureArr[projectId - 1].style.color = "#000";
            detailInfoArr[projectId - 1].style.display = "flex";
        }
    }, [projectId, router.query, query.id, mTextOpen, loading]);

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
                            <div className="architecture_header_sub_container">
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
                                        className=" mobile_only"
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
                                        className="mobile_only"
                                    >
                                        List
                                    </div>
                                </div>
                                <div className="mobile_only_architecture_title_row">
                                    {projectId && projectId != 0 && arrayResponseData[projectId - 1].title}
                                    {/* {projectId && projectId != 0 && arrayResponseData[projectId - 1].aid} */}
                                </div>
                                <div className="architecture_first_box">
                                    <div className="architecture_header desktop_only">
                                        <div className="header_sub_menu">
                                            <div className="project">
                                                <div>Project</div>
                                            </div>
                                        </div>
                                        <div className="architecture_content_index">
                                            {arrayResponseData &&
                                                arrayResponseData.map(el => {
                                                    return (
                                                        <div style={{ display: "flex" }}>
                                                            <div
                                                                key={el.aid + el.title}
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
                                                                    <div className="architecture_title_row">
                                                                        {el.title}
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="detail_information_row"
                                                                    style={{ color: "#000" }}
                                                                >
                                                                    <div className="detail_information_each_row">
                                                                        <div className="field">Location</div>
                                                                        <div>{el.location}</div>
                                                                    </div>
                                                                    <div className="detail_information_each_row">
                                                                        <div className="field">Period</div>

                                                                        <div>{el.period}</div>
                                                                    </div>
                                                                    <div className="detail_information_each_row">
                                                                        <div className="field">Status</div>
                                                                        <div>{el.status}</div>
                                                                    </div>
                                                                    <div className="detail_information_each_row">
                                                                        <div className="field">Floor</div>
                                                                        <div>{el.floor}</div>
                                                                    </div>
                                                                    <div className="detail_information_each_row">
                                                                        <div className="field">Floor Area</div>{" "}
                                                                        <div>{el.area}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                    {projectId && projectId != 0 && (
                                        <div className="mobile_only_detail_information_row">
                                            <div>
                                                <div>Location</div>
                                                <div>Period</div>
                                                <div>Status</div>
                                                <div>Floor</div>
                                                <div>Floor Area</div>
                                            </div>
                                            <div>
                                                <div>{arrayResponseData[projectId - 1].location}</div>
                                                <div>{arrayResponseData[projectId - 1].period}</div>
                                                <div>{arrayResponseData[projectId - 1].status}</div>
                                                <div>{arrayResponseData[projectId - 1].floor}</div>
                                                <div>{arrayResponseData[projectId - 1].area}</div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="architecture_detail_image_container">
                                        {projectId && projectId != 0 && arrayResponseData[projectId - 1] && (
                                            <Slideshow
                                                imgArr={arrayResponseData[projectId - 1].images}
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
                                                    ? { transform: "rotate(180deg)", left: "30%", bottom: 0 }
                                                    : null
                                            }
                                        >
                                            ▲
                                        </span>
                                    </div>
                                    {projectId && projectId != 0 && mTextOpen && (
                                        <div className="more_information_text">
                                            <p>{parse(arrayResponseData[projectId - 1].info_kr)}</p>
                                            <p>{parse(arrayResponseData[projectId - 1].info_en)}</p>
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
