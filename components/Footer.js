import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();

    return (
        <div className="footer_container">
            <div>
                <span>
                    <a href="mailto: leehong.kim@gmail.com">Contact</a>
                </span>
            </div>
            <div>
                <span>
                    <a href="https://www.instagram.com/leehongkim/" target="_blank">
                        Instagram
                    </a>
                </span>
            </div>
            <div>
                <span>Facebook</span>
            </div>
        </div>
    );
}

export default Footer;
