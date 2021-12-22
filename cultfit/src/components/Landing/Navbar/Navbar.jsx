import { ModalInFunctionalComponent } from "../../cult-UpperHalf/Navbar/Modal/Modal"
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { LocationModal } from "../../cult-UpperHalf/Navbar/LocationModal/LocationModal"

export const Navbar = () => {
    return <div className={styles.mainNavbar}>
        <div className={styles.Navbar}>
            <div id={styles.main_logo_home_page_div}>
                <Link to="/">
                    <img src="/navbar_icons/Cultfitlogo.svg" alt="" />
                </Link>
            </div>
            <div>
                <div>
                    <Link to="/cult">
                        <img src="/navbar_icons/runicon.svg" alt="" />
                        <p>CULT</p>
                    </Link>
                </div>
                <div className={styles.displaynone}>
                    <img src="/navbar_icons/Video.svg" alt="" />
                    <p>LIVE</p>
                </div>
                <div className={styles.displaynone}>
                    <img src="/navbar_icons/eaticon.svg" alt="" />
                    <p>EAT</p>
                </div>
                <div className={styles.displaynone}>
                    <img src="/navbar_icons/Mind.svg" alt="" />
                    <p>MIND</p>
                </div>
                <div className={styles.displaynone}>
                    <img src="/navbar_icons/care.svg" alt="" />
                    <p>CARE</p>
                </div>
                <div className={styles.displaynone}>
                    <img src="/navbar_icons/Bag.svg" alt="" />
                    <p>STORE</p>
                </div>

            </div>
            <div>
                <div>
                    <img src="/navbar_icons/Ellipse.svg" alt="" />
                    <LocationModal />
                </div>
                <div>
                    <img src="/navbar_icons/usericon.svg" alt="" />
                    <ModalInFunctionalComponent />
                </div>
                <div>
                    <img src="/navbar_icons/shoppingcarticon.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
}