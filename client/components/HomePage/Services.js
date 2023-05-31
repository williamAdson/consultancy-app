import styles from "../css/service.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Services(props){ 
    return (
        <div>
            <div className={styles.serviceCard}>
                <div className="cardImage">
                    <Image src={props.card.image} alt="wgc image" width={350} height={200} />
                </div>
                <h1>{props.card.title}</h1>
                <p className={styles.limitText}>
                    {props.card.body}
                </p>
                <div className={styles.serviceButtonContainer}>
                    <button className={styles.serviceButton}>
                        <Link href={props.card.button.path}>
                            {props.card.button.name}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}