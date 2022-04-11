import theme from "../styles/theme";
import { useEffect, useState, useRef } from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import parse from "html-react-parser";

import * as _AppModelD from "../api/_AppModelD";
import { ThemeProvider } from "styled-components";

const About = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [arrayResponseData, setArrayResponseData] = useState([]);
    const [isSafari, setIsSafari] = useState();

    useEffect(() => {
        __apiGetItemData();
    }, [loading]);

    function __apiGetItemData() {
        console.log("__apiGetItemData - 0");
        // project, news, concept, about
        const req = { query: `?param1=about` };
        _AppModelD.getData(req).then(res => {
            console.log("__apiGetItemData - 1");
            console.log(res);
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
                                >
                                    About
                                </div>
                            </div>
                        </div>
                        <div
                            className="header_sub_container"
                            style={isSafari ? { paddingTop: "67px" } : { paddingTop: "67px" }}
                        >
                            <div className="about_menu desktop_only">
                                <div className="introduction">
                                    <div>Introduction</div>
                                </div>
                                <div className="people">
                                    <div>People</div>
                                </div>
                                <div className="contact">
                                    <div>Contact</div>
                                </div>
                            </div>
                            <div className="about_content about_header_sub_container">
                                <div className="mobile_only about_category_row">Introduction</div>
                                <div className="introduction">
                                    <div>
                                        {arrayResponseData &&
                                            arrayResponseData.length > 0 &&
                                            arrayResponseData[0] &&
                                            parse(arrayResponseData[0].info_kr)}
                                    </div>
                                    <div>
                                        {arrayResponseData &&
                                            arrayResponseData.length > 0 &&
                                            arrayResponseData[0] &&
                                            parse(arrayResponseData[0].info_en)}
                                    </div>
                                </div>
                                <div className="mobile_only about_category_row">People</div>
                                <div className="people">
                                    {arrayResponseData &&
                                        arrayResponseData.length > 0 &&
                                        arrayResponseData[0] &&
                                        arrayResponseData[0].infoItems &&
                                        arrayResponseData[0].infoItems.map((infoItem, infoIndex) => {
                                            return (
                                                <div className="people_row">
                                                    <div>{infoItem.name}</div>
                                                    <div>{infoItem.title}</div>
                                                    <div>{infoItem.period.replace("-", "")}</div>
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="mobile_only about_category_row">Contact</div>
                                <div className="contact">
                                    <div className="contact_row">
                                        <div>Email</div>
                                        <div>
                                            {arrayResponseData &&
                                                arrayResponseData.length > 0 &&
                                                arrayResponseData[0] &&
                                                arrayResponseData[0].email}
                                        </div>
                                    </div>
                                    <div className="contact_row">
                                        <div>Address</div>
                                        <div>
                                            {arrayResponseData &&
                                                arrayResponseData.length > 0 &&
                                                arrayResponseData[0] &&
                                                arrayResponseData[0].address}
                                        </div>
                                    </div>
                                    <div className="contact_row">
                                        <div>Phone</div>
                                        <div>
                                            {arrayResponseData &&
                                                arrayResponseData.length > 0 &&
                                                arrayResponseData[0] &&
                                                arrayResponseData[0].phone}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PageLayout>
            )}
        </ThemeProvider>
    );
};

export default About;
