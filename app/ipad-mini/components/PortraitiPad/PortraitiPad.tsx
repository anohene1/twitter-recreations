import React from 'react';
import styles from "./portraitipad.module.scss";

interface Props {
    imageUrl: string
}
function PortraitiPad({imageUrl}: Props) {
    return (
        <div className={styles.ipad}>
            <img className={styles.frame} src="/assets/ipad-mini/hardware_marquee_portrait__b16oslxlllo2_large.png" alt=""/>
            <img className={styles.shadow} src="/assets/ipad-mini/shadow_marquee_portrait__8bh7aaemrj6m_large.png" alt=""/>
            <img className={styles.image} src={imageUrl} alt=""/>
        </div>
    );
}

export default PortraitiPad;