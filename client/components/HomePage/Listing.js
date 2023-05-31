import styles from "../css/service.module.css";
import Image from "next/image";

export default function Listing(props){
    const serviceListings = [
        "BUSINESS CONSULTANCY","ZRA ISSUES","LABOR ISSUES","COUNCIL PERMITS","IMMIGRATION","COMPANY INCOPARARTION", "IMPORT AND EXPORT","BUYING AND SELLING OF PROPERTY"
    ]; 

    return (
        <div>
            <div className={styles.HomeServicesContainer}>
                <div>
                    <ul>
                        {serviceListings.map((listing, i)=>{
                            return <li className={styles.textList}>{listing}</li>; 
                        })}
                    </ul>
                </div>
                <div>
                    <Image src={props.image} alt="team image icon" width={350} height={200} />
                </div>
                <div>
                    <div>
                        <h3>our vision</h3>
                        <p>
                            To provide quality profession services that are client focused and to provide a reliable and timely services to all our clients.
                        </p>
                    </div>
                    <div>
                        <h3>our mission</h3>
                        <p>
                          To help customers thrive through our dedicated altruistic mentality of delivering beyond expectations. 
                        </p>
                    </div>
                    <div>
                        <h3>our values</h3>
                        <p>
                            Our core value are inessential in maintaining our mission statement and supporting the vision and mission for the firm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}