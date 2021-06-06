import { ReactNode } from "react";
import styles from './Info.module.css'

export const Info = ({ children }: { children: ReactNode | string }) => {
  return <p className={styles.text}>{children}</p>
}