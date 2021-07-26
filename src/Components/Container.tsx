import { FC } from "react";
import styles from "../Styles/container.module.sass";

const Container: FC = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
