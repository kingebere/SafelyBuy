import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    
    return (
        <>
            

            <div className="container">
                <div className='container-fluid  align-items-center justify-content-center text-center'>
           <span className={styles.headertext}> Safelybuy | </span><span className={styles.smallheadertext}> SELLER CENTER</span> </div>
</div>
        </>
        
    
    )
}


export default Header;