import border from "../styles/border.module.scss";

export default function Border() {
    return <div className={border.main}>
        <div className={border.top}/>
        <div className={border.bottom}/>
    </div>
}