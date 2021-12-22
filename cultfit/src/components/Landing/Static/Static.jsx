import styles from "./Static.module.css"

export const StaticData = () => {

    return <div className={styles.ImageContainer}>
        <div className={styles.staticdata}>
            <img src="/LandingPage_icons/App.svg" alt="" />
            <img src="/LandingPage_icons/Business.svg" alt="" />
            <img src="/LandingPage_icons/Career.svg" alt="" />
        </div>
        <div className={styles.be_better_section}>
            <div class={styles.container}>
                <h2>
                    Be better <span>everyday</span>
                </h2>
            </div>
        </div>
    </div>
}