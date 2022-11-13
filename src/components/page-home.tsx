import content from "../styles/content.module.scss";

export default function PageHome() {
    return <div className={content.page}>
        <div className={content.content}>
            <p className={content.about}>
                <span>Born in 1999</span>
                <span>in Olot, Spain.</span>
                <span>I believe in</span>
                <span>the intricacies</span>
                <span>and complexities</span>
                <span>of building</span>
                <span>something simple.</span>
                <span>Learning and</span>
                <span>improving in</span>
                <span>web design and</span>
                <span>real time simulations</span>
                <span>through experiments,</span>
                <span>people and thoughts.</span>
            </p>
        </div>
    </div>
}