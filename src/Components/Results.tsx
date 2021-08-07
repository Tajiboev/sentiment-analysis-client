import { FC } from "react";
import styles from "../Styles/results.module.sass";

import IAnalysisResult from "../interfaces/AnalysisResult";
interface Props {
	results: IAnalysisResult[];
}

const Results: FC<Props> = ({ results }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th className={styles.sentence}>Sentence</th>
					<th className={styles.score}>Score</th>
					<th className={styles.score}>Comparative</th>
					<th className={styles.score}>Converted</th>
				</tr>
			</thead>
			<tbody>
				{results.map((result, i) => {
					return (
						<tr key={i}>
							<td className={styles.sentence}>{result.sentence}</td>
							<td className={styles.score}>{result.score}</td>
							<td className={styles.score}>{result.comparative}</td>
							<td className={styles.score}>
								<meter max={100} min={0} value={result.converted}></meter>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
