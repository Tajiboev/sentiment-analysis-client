import axios from "axios";
import React, { FC, useState, useRef, Dispatch, SetStateAction } from "react";
import IAnalysisResult from "../interfaces/AnalysisResult";
import styles from "../Styles/form.module.sass";

interface Props {
	setResults: Dispatch<SetStateAction<IAnalysisResult[]>>;
}

const TextForm: FC<Props> = ({ setResults }) => {
	const [loading, setloading] = useState(false);
	const ref = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			setloading(true);
			let text = ref.current?.value;
			if (!text) return;

			let result = await axios.post<IAnalysisResult[]>(
				"https://arcane-coast-64432.herokuapp.com/analyze",
				{ text, split: true }
			);
			console.log(result);
			setResults(result.data);
			setloading(false);
		} catch (e) {
			setloading(false);
			alert("Something went wrong");
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label htmlFor="textarea">Please enter your text here</label>
			<textarea id="textarea" rows={10} required ref={ref}></textarea>
			<button disabled={loading}>{loading ? "Waiting for results" : "Analyze →"}</button>
		</form>
	);
};

export default TextForm;
