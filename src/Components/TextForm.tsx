import axios from "axios";
import React, { Dispatch, useRef, useState } from "react";
import { FC } from "react";
import styles from "../Styles/form.module.sass";
import { Result } from "./Results";

interface Props {
	setResults: Dispatch<React.SetStateAction<Result[]>>;
}

const TextForm: FC<Props> = ({ setResults }) => {
	const [loading, setloading] = useState(false);
	const ref = useRef<HTMLTextAreaElement>(null);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setloading(true);
		if (ref.current) {
			let text = ref.current.value;
			axios
				.post<{ data: Result[] }>("https://arcane-coast-64432.herokuapp.com/analyze", {
					text,
				})
				.then((result) => {
					console.log(result);
					setResults(result.data.data);
					setloading(false);
				})
				.catch((e) => {
					setloading(false);
					alert("Error fetching data from server");
					console.error(e);
				});
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<fieldset className={styles.fieldset}>
				<legend>Place you text inside this textarea:</legend>
				<textarea className={styles.textarea} rows={8} ref={ref}></textarea>
				<button className={styles.button} disabled={loading}>
					{loading ? "Waiting for results" : "Analyze →"}
				</button>
			</fieldset>
		</form>
	);
};

export default TextForm;
