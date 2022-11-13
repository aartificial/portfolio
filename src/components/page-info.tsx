import content from "../styles/content.module.scss";
import InfoItem from "./info-item";

export default function PageInfo() {
    return <div className={content.page}>
            <div className={content.info}>
                <div className={content.info_item_0}>
                    <InfoItem key={0} items={["Youtube", "Instagram"]}/>
                </div>
                <div className={content.info_item_1}>
                    <InfoItem key={1} items={["Github", "CodePen"]}/>
                </div>
                <div className={content.info_item_2}>
                    <InfoItem key={2} items={["Linkedin", "Twitter"]}/>
                </div>
            </div>
    </div>
}