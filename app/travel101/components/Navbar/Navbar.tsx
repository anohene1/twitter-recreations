import React from 'react';
import styles from './navbar.module.scss'

function Navbar() {
    return (
        <header className={styles.navbar}>
            <h3>Travel101</h3>
            <nav>
                <a rel='noreferrer' target='_blank' href="https://twitter.com/anohene1">Twitter</a>
                <a rel='noreferrer' target='_blank' className={styles.filledButton} href="https://github.com/anohene1/twitter-recreations/tree/main/app/travel101">Github</a>
            </nav>
        </header>
    );
}

export default Navbar;