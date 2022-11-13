import HeaderSelector from "./header-selector";
import header from "../styles/header.module.scss"
import {Dispatch, SetStateAction} from "react";

interface HeaderNavProps {
    routes: string[]
    route: number
    setRoute: Dispatch<SetStateAction<number>>
}

export default function HeaderNav({routes, route, setRoute}:HeaderNavProps) {

    return <nav className={header.nav}>
        <ol>
            {routes.map((_, index) => (
                <HeaderSelector key={index}
                                routeKey={index}
                                selected={route === index}
                                value={routes[index]}
                                setRoute={setRoute}/>
            ))}
        </ol>
    </nav>
}