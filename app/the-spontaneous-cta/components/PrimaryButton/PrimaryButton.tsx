import React from 'react';
import styles from './primaryButton.module.scss'

interface Props {
    label : string
    isSmall?: boolean
}
function PrimaryButton({label, isSmall}: Props) {
    return <button className={`${styles.button} ${isSmall && styles.small}`}>{label}</button>;
}

export default PrimaryButton;