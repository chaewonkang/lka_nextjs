import theme from "../styles/theme";
import { useEffect, useState, useRef } from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const About = () => {
    const menuTop = useRef();
    const router = useRouter();
    const [contentTop, setContentTOp] = useState(0);

    useEffect(() => {
        setContentTOp(menuTop.current.offsetTop);
    }, [contentTop]);

    return (
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
                            <div ref={menuTop}>About</div>
                        </Link>
                    </div>
                </div>
                <div className="header_sub_container" style={{ top: contentTop - 5 }}>
                    <div className="about_menu">
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
                    <div className="about_content">
                        <div className="introduction">
                            <div>
                                <p>
                                    김이홍 아키텍츠 | Leehong Kim Architects는 서울과 뉴욕에 기반을 둔 설계사무소이다.
                                    2014년 뉴욕에서 Leehong Kim Architects를 개소하였으며, 2016년에는 서울로 사무실을
                                    확장하여 프로젝트를 진행하고 있다. 건축, 도시재생, 인테리어, 공공예술, 제품디자인 등
                                    인간의 삶과 관련된 다양한 스케일의 이슈를 탐구하고 아이디어를 구체화하고 실제로
                                    구현하는 작업에 관심을 갖고 있다. 혼자만의 작업 뿐 아니라, 분야별 협업자들과의
                                    작업과 전시 디렉팅 등 관계 속에서 새로움을 발견하는 작업을 꾸준히 하고자 한다.
                                </p>
                                <p>
                                    김이홍은 건축가이자 교육자(홍익대학교 건축도시대학원 조교수)이다. 연세대학교
                                    건축공학과와 하버드대학교 건축대학원을 졸업하였고, Steven Holl Architects(미국
                                    뉴욕), 삼우종합건축사사무소(한국 서울), Gehry Partners(미국 LA) 에서 실무를 익혔다.
                                    광주디자인비엔날레 2009, 모란미술관의 MORAN FOLLY 2015, 아모레퍼시픽미술관의 APMAP
                                    2016 등의 전시 참여작가와 2019 설화문화전의 디렉터로 참여하였으며, 2018년
                                    젊은건축가상을 수상하였다. 미국건축사와 LEED AP이며, 현재 서울시 공공건축가로
                                    활동하고 있다.
                                </p>
                            </div>
                        </div>
                        <div className="people">
                            <div className="people_row">
                                <div>김이홍</div>
                                <div>소장</div>
                                <div></div>
                            </div>
                            <div className="people_row">
                                <div>김현주</div>
                                <div>과장</div>
                                <div>2018~</div>
                            </div>
                            <div className="people_row">
                                <div>강정구</div>
                                <div>디자이너</div>
                                <div>2019~</div>
                            </div>
                            <div className="people_row">
                                <div>장진욱</div>
                                <div>디자이너</div>
                                <div>2021~</div>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact_row">
                                <div>Email</div>
                                <div>leehong.kim@gmail.com</div>
                            </div>
                            <div className="contact_row">
                                <div>Address</div>
                                <div>서울시 용산구 한남대로27가길 15, 2층</div>
                            </div>
                            <div className="contact_row">
                                <div>Phone</div>
                                <div>02-6423-5200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default About;
