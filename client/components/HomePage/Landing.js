import Services from "./Services";
import styles from "../css/service.module.css";
import Listing from "./Listing";
import Home from "./Home";

export default function Landing(){
    const services = [
        {
            title: "Consulting Services",
            body: "Think business is not going well? how about you let professionals give you better insights.",
            button: {
                name: "check services",
                path: "../service/"
            },
            image: "/travel.png"
        },
        {
            title: "Find a house",
            body: "Let our professionals help you find a dream home, with fair prices as well as safe established locations.",
            button: {
                name: "search house",
                path: "../estate/"
            },
            image: "/house.png"
        },
        {
            title: "Join our community",
            body: "Become part of an army community of individuals who daily pursuing better opportunities in social, criminology and business.",
            button: {
                name: "join community",
                path: "../users/auth"
            },
            image: "/social.png"
        }
    ]
    return (
        <div>
            <div>
                <Home />
            </div>
            <div className={styles.HomeServicesContainer}>
                <Services card={...services[0]} />
                <Services card={...services[1]} />
                <Services card={...services[2]} />
            </div>
            <div>
                <Listing image='/team.png' />
            </div>
        </div>
    )
}