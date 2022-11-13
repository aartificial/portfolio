import content from "../styles/content.module.scss";
import InfoItemContent from "./info-item-content";

interface InfoItemProps {
    items: string[]
}

export default function InfoItem({items}:InfoItemProps) {
    return<div className={content.info_content}>
        <ul>
            {items.map((value, index) => (
                <InfoItemContent key={index} itemName={value}/>
            ))}
        </ul>
    </div>
}