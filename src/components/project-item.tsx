import content from "../styles/content.module.scss";

interface ProjectItemProps {
    title: string
    info: string
}

export default function ProjectItem({title, info}:ProjectItemProps) {
    return <a className={content.project_item} href="https://http.cat/510" target="_blank">
        <div className={content.project_title}>
            {title}
        </div>
        <div className={content.project_info}>
            {info}
        </div>
    </a>
}