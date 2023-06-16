import React from 'react';
import styles from './blueButton.module.scss'

interface Props {
    title: string,
    isSmall?: boolean
}
function BlueButton({title, isSmall}: Props) {
    return (
        <button className={`${styles.blueButton} ${isSmall ? styles.small : ''} blueBtn`}>{title}</button>
    );
}

export default BlueButton;