import { FC } from "react";
import styles from "../Styles/results.module.sass";

export interface Result {
	sentence: string;
	score: number;
	comparative: number;
}

interface Props {
	results: Array<Result>;
}

const Results: FC<Props> = ({ results }) => {
	return (
		<table className={styles.table}>
			<caption>Results:</caption>
			<colgroup>
				<col span={1} style={{ width: "80%" }} />
				<col span={1} style={{ width: "10%" }} />
				<col span={1} style={{ width: "10%" }} />
			</colgroup>
			<thead>
				<tr>
					<th>Sentence</th>
					<th>Score</th>
					<th>Comparative</th>
				</tr>
			</thead>
			<tbody>
				{results.map((result, i) => {
					return (
						<tr key={i}>
							<td className={styles.sentence}>{result.sentence}</td>
							<td className={styles.score}>{result.score}</td>
							<td className={styles.score}>{result.comparative}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
