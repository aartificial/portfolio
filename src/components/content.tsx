import content from "../styles/content.module.scss";
import PageHome from "./page-home";
import PageProjects from "./page-projects";
import PageInfo from "./page-info";
import PageContact from "./page-contact";
import PageEmpty from "./page-empty";

interface ContentProps {
    route: number
}

export default function Content({route}:ContentProps) {

    function setPage(pageIndex: number) {
        switch (pageIndex) {
            case 0:
                return <PageHome/>
            case 1:
                return <PageProjects/>
            case 2:
                return <PageInfo/>
            case 3:
                return <PageContact/>
            default:
                return <PageEmpty/>
        }
    }

    return <main className={content.main}>
        <div className={content.inner}>
            {setPage(route)}
        </div>
    </main>
}