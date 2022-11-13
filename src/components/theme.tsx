import theme from "../styles/theme.module.scss";
import {useState} from "react";

export default function Theme() {

    const [darkMode, setDarkMode] = useState<boolean>(false);
    
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light')

    return <div className={theme.main} onClick={() => setDarkMode(!darkMode)}>
        <div className={theme.selector}>
            <div className="box">{darkMode ? '◼' : '◻'}</div>
            <div className="text">Light</div>
        </div>
        <div className={theme.selector}>
            <div className={theme.box}>{darkMode ? '◻' : '◼'}</div>
            <div className="text">Dark</div>
        </div>
    </div>
}