import React from 'react';
import styles from './card.module.scss'

interface Props {
    Icon: React.ReactNode,
    title: string,
    description: string
}

function Card({ Icon, title, description }: Props) {
    return (
      <div className={styles.card}>
        {Icon}
        <h3>{title}</h3>
        <p>
            {description}
        </p>
      </div>
    );
}

export default Card;