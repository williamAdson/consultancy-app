import Link from "next/link";
import Image from "next/image";
import styles from "../css/home.module.css";
import stylesTwo from "../css/service.module.css";

export default function Home(){
    const contactOurPage = "../contact";
    const makeAppointment = "../reservations/create";

    return (
        <div>
           <div className={styles.homeContainer}>
                <h1 className={styles.homeHeaders}>
                    wakwanes general consultancy  
                </h1>
                <p>
                    We are a consulting company that helps both natives and experts find comfort in the daily services of business, immigration and administrative laws.
                </p>
                <div className={styles.homeButtonContainer}>
                    <button className={stylesTwo.serviceButton}>
                        <Link href={contactOurPage}>
                            contact 
                        </Link>
                    </button>
                    <button className={stylesTwo.serviceButton}>
                        <Link href={makeAppointment}>
                            Reservation
                        </Link>
                    </button>
                </div>
           </div>
           <div>
                <div>
                    <Image src="/project.png" alt="about us image" width={350} height={200} />
                </div>
                <div>
                    <h1>About Us</h1>
                    <p>
                        WAKWANE'S general consultancy is a consultancy firm registered with PACRA. The primarily focus is to help with immigration, company incorporation, labor issues etc. The firm has a list of clients from corporate business organizations, individuals as well as public institutes. The firm is currently operating from Lusaka and it is well managed by qualified personals.
                    </p>
                </div>
            </div> 
        </div>
    )
}