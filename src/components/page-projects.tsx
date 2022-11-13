import content from "../styles/content.module.scss";
import Project from "./project";

export default function PageProjects() {
    return <div className={content.page}>
        <div className={content.content}>
            <div className={content.projects}>
                <Project project_name="Projects (Experiments)" items={[
                    ["GOAP AI Interface", "2022 / Group"],
                    ["iMessage GraphQL", "2022 / Personal"],
                    ["C++ RT Path-tracer", "2022 / Personal"],
                    ["Unity Scene Graph Serializer", "2022 / Commission"],
                    ["Genetic Snake Solver" , "2021 / Personal"],
                    ["Minesweeper JFX", "2021 / Personal"],
                ]}/>
                <Project project_name="Projects (University)" items={[
                    ["SOL Portfolio", "2022 / Personal"],
                    ["ENV Simulator", "2022 / Group"],
                    ["OMP Matrix calculator", "2022 / Personal"]
                ]}/>
                <Project project_name="Projects (Other)" items={[
                    ["MoGraph MQ Intro", "2020 / Commission"]
                ]}/>
            </div>
        </div>
    </div>
}

/*
["REVENGE POP", "2022 / Commission"],
                    ["HOLO.g", "2021 / Commission"],
                    ["PAN-PROJECTS", "2021 / Commission"],
                    ["Yoshiki Okamura Portfolio", "2021 / Commission"],
                    ["buoy Portfolio", "2020 / Commission"],
                    ["Experiments", "2020 / Personal"],
                    ["100 DAYS OF POETRY", "2020 / Commission"]

*/
