import frame from "../styles/frame.module.scss";

export default function Frame() {
    return <div className={frame.main}>
        <div className={frame.top}/>
        <div className={frame.left}/>
        <div className={frame.right}/>
        <div className={frame.bottom}/>
    </div>
}