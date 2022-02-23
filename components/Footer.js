import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();

    return (
        <div className="footer_container">
            <div>
                <span>Contact</span>
            </div>
            <div>
                <span>Instagram</span>
            </div>
            <div>
                <span>Facebook</span>
            </div>
        </div>
    );
}

export default Footer;
