import React, { ReactNode } from "react";
import styles from './container.module.scss'

interface Props {
  children: ReactNode;
}
function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
