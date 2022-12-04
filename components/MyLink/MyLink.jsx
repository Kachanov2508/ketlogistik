import Link from "next/link";
import cls from "./MyLink.module.scss";

const MyLink = ({ href, text, className = '' }) => {

    const active = className ? cls.active : ''

	return (
        <Link href={href} className={`${cls.link} ${active}`}>
            {text}
        </Link>
    ) 

};

export default MyLink;
