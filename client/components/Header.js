import styles from "../components/css/header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Headers(){
    const explore = [
        {
            name: 'Find a home?',
            path: '../estate/find'
        },
        {
            name: 'Business help?',
            path: '../service/all'
        },
        {
            name: 'Make appointment?',
            path: '../reservation/make'
        }
    ]
    
    const onExploreChange = (e) =>{
        console.log(e.target.value);
    }
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logoName}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                <Image src="/logo.png" alt="logo" width={32} height={32} />
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <select onChange={onExploreChange} className={styles.selectContainer}>
                            <option>Explore</option>
                            {explore.map((option, i)=>{
                                return <option>
                                    <Link href={option.path}>
                                        {option.name}
                                    </Link>
                                </option>
                            })}
                        </select>
                    </li>
                    <li>Houses</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className={styles.navContacts}>
                <div className={styles.navContactChild}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}