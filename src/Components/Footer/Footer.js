import React from 'react'
import facebook from '../../assets/svgs/facebook.svg';
import instagram from '../../assets/svgs/instagram.svg';
import twitter from '../../assets/svgs/twitter.svg';
import Appstore from '../../assets/images/AppStore.png';
import Playstore from '../../assets/images/PlayStore.png';
import styles from "./Footer.module.css";


const Footer =()=>{
    return (
        <div className={styles.footerBackGround}>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 d-flex align-items-center col-lg-4 col-md-7 col-12">

<div className="">
    <img className={styles.playStoreFooter} src={Playstore} alt="playstore logo"/>
                        </div>
                        <div className={styles.imgWrapper}>
    <img className={styles.appStoreFooter} src={Appstore} alt="applestore logo"/>
</div>

                </div>
                    <div className="col-xl-5 col-lg-4 col-md-7 col-12">
                       <div>
                        <div className={styles.buttonWrapper}><button className={`${styles.btnGreenTwo} btn`}>
               Refer a Friend
                        </button></div>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing eliticitur porttitor.qeettfgv vhgfyhj ngvyhin jhuhjygjhg guhjb     </h6>
                        </div>
                    </div> 
                    <div className="col-xl-2 col-lg-4 col-md-7 col-12">
                        <div>
                        <span className={styles.facebookBox}><img className={styles.maxW} src={facebook} alt="facebook icon" /></span>
                        <span className={styles.instagramBox}><img className={styles.maxW} src={ instagram} alt="instagram icon"/></span>
                        <span className={styles.twitterBox}><img className={styles.maxW} src={ twitter} alt="twitter icon"/></span>
                        </div>
                    </div>
</div>
            </div>
        </div>
    )
}

export default Footer;