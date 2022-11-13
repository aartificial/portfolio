import content from "../styles/content.module.scss";

interface InfoItemContentProps {
    itemName: string
}

export default function InfoItemContent({itemName}:InfoItemContentProps) {
    return <li>
        <a href="https://http.cat/404" target="_blank" className={content.nodec}>{itemName}</a>
    </li>
}