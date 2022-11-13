import content from "../styles/content.module.scss";
import ProjectItem from "./project-item";

interface ProjectProps {
    project_name: string
    items: string[][]
}

export default function Project({project_name, items}:ProjectProps) {
    return <>
        <h2 className={content.project_header}>{project_name}</h2>
        <div className={content.project_list}>
            {items.map((item) => (
                <ProjectItem title={item[0]} info={item[1]}/>
            ))}
        </div>
    </>
}