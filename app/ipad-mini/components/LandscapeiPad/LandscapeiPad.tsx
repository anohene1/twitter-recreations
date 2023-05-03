import React from 'react';
import styles from './landscapeipad.module.scss'

interface Props {
    imageUrl: string
}
function LandscapeiPad({imageUrl}: Props) {
    return (
        <div className={styles.ipad}>
            <img className={styles.frame} src="/assets/ipad-mini/hardware_marquee_landscape__75jinfo8pn66_large.png" alt=""/>
            <img className={styles.shadow} src="/assets/ipad-mini/shadow_marquee_landscape__dssxvlzlocom_large.png" alt=""/>
            <img className={styles.image} src={imageUrl} alt=""/>
        </div>
    );
}

export default LandscapeiPad;