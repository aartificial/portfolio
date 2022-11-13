import "./styles/root.css"
import page from "./styles/page.module.scss";
import Background from "./components/background";
import Border from "./components/border";
import Frame from "./components/frame";
import Theme from "./components/theme";
import Header from "./components/header";
import Content from "./components/content";
import {useState} from "react";

function App() {
    const routes: string[] = ["Home", "Projects", "Info", "Contact"];
    const [route, setRoute] = useState<number>(0)

    return <div className={page.main}>
        <Background/>
        <Border/>
        <Frame/>
        <Theme/>
        <Header routes={routes} route={route} setRoute={setRoute}/>
        <Content route={route}/>
    </div>
}

export default App;
