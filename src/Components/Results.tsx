import { FC } from "react";
import styles from "../Styles/results.module.sass";

export type Result = {
	sentence: string;
	score: number;
};

export interface Props {
	results: Array<Result>;
}

const Results: FC<Props> = ({ results }) => {
	return (
		<table className={styles.table}>
			<caption>Results:</caption>
			<thead>
				<tr>
					<th>Sentence</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody>
				{results.map((result) => {
					return (
						<tr>
							<td className={styles.sentence}>{result.sentence}</td>
							<td className={styles.score}>
								<div>{result.score}</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
