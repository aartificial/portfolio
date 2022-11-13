import header from "../styles/header.module.scss";
import HeaderNav from "./header-nav";
import {Dispatch, SetStateAction} from "react";

interface HeaderProps {
    routes: string[]
    route: number
    setRoute: Dispatch<SetStateAction<number>>
}

export default function Header({routes, route, setRoute}:HeaderProps) {
    return <header className={header.main}>
        <h1 className={header.title}>Jordi Soler</h1>
        <p className={header.label}>Software Engineer & Student</p>
        <HeaderNav routes={routes} route={route} setRoute={setRoute}/>
    </header>
}