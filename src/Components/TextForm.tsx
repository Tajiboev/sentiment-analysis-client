import axios, { AxiosError } from "axios";
import React, { Dispatch, useRef, useState } from "react";
import { FC } from "react";
import styles from "../Styles/form.module.sass";
import { Result } from "./Results";

interface Props {
	setResults: Dispatch<React.SetStateAction<Result[]>>;
	setError: Dispatch<React.SetStateAction<string>>;
}

const TextForm: FC<Props> = ({ setResults, setError }) => {
	const [loading, setloading] = useState(false);
	const [inputError, setinputError] = useState(false);
	const ref = useRef<HTMLTextAreaElement>(null);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		if (!ref.current || ref.current.value === "") {
			setinputError(true);
			return;
		} else {
			setinputError(false);
		}
		setloading(true);
		setResults([]);
		if (ref.current) {
			let text = ref.current.value;
			axios
				.post<{ data: Result[] }>("https://arcane-coast-64432.herokuapp.com/analyze", {
					text,
				})
				.then((result) => {
					setloading(false);
					setResults(result.data.data);
				})
				.catch((e: AxiosError) => {
					setloading(false);
					if (e.response) {
						setError(e.response.statusText);
					} else {
						setError("Something went wrong. Please try again!");
					}
				});
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<fieldset className={styles.fieldset}>
				<label htmlFor="textarea">Enter you text inside this textarea</label>
				<textarea id="textarea" className={styles.textarea} rows={8} ref={ref}></textarea>
				{inputError && <p className="error">Please enter your text in the textarea!</p>}
				<button className={styles.button} disabled={loading}>
					{loading ? "Waiting for results" : "Analyze →"}
				</button>
			</fieldset>
		</form>
	);
};

export default TextForm;
