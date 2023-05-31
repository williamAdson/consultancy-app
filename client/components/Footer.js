import styles from "./css/footer.module.css";
import Link from "next/link";

export default function Footer({title}){
    const facebookPage = `https://www.facebook.com/Wakwanes`;
    const instagramPage = `https://www.instagram.com/wakwanes_general_consultancy`;
    
    return (
        <footer className={styles.footerContainer}>
            <div className="footer-image"></div>
            <div className="footer-details">
                <div className={styles.footerLinks}>
                    <div className={styles.linkCard}>
                        <h1>quick links</h1>
                        <ul>
                            <li>find a house?</li>
                            <li>consult about business?</li>
                            <li>consult about criminology?</li>
                            <li>consult about goods & services?</li>
                        </ul>
                    </div>
                    <div className={styles.linkCard}>
                        <h1>support</h1>
                        <ul>
                            <li>our offices locations?</li>
                            <li>our helpline contacts?</li>
                            <li>our team details?</li>
                        </ul>
                    </div>
                    <div className={styles.linkCard}>
                        <h1>follow us</h1>
                        <div className={styles.footCopyrights}>
                            <div className="media-fb">
                                <Link href={facebookPage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </Link>
                            </div>
                            <div className="media-gram">
                                <Link href={instagramPage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footCopyrights}>
                    <div>
                        <p>copyrights©2020 - {new Date().getFullYear() } WGC </p>
                    </div>
                    <div>
                        <p>Terms of Service.</p>
                    </div>
                    <div>
                        <p>Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}