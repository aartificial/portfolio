import content from "../styles/content.module.scss";

export default function PageContact() {
    return <div className={content.page}>
        <div className={content.content}>
            <div className={content.contact}>
                <div className={content.contact_wrapper}>
                    <a className={content.contact_text}>
                        Say hi.<br/><br/>
                        sol.recieve@gmail.com
                    </a>
                    <p className={content.contact_info}>
                        I love to design and        <br/>
                        make things.                <br/>
                        I'm currently studying      <br/>
                        computer engineering        <br/>
                        at UdG and                  <br/>
                        working at DXC.             <br/>
                        <br/>
                        For any inquiries don't     <br/>
                        hesitate to contact.        <br/>
                        With love. SOL              <br/>
                    </p>
                </div>
            </div>
        </div>
    </div>
}