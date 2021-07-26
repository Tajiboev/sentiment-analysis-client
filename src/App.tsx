import { FC, useState } from "react";
import Container from "./Components/Container";
import Explanation from "./Components/Explanation";
import Results, { Result } from "./Components/Results";
import TextForm from "./Components/TextForm";

const App: FC = () => {
	const [results, setResults] = useState<Result[]>([]);

	return (
		<main>
			<header>
				<Container>
					<h2>Sentiment analysis tool</h2>
				</Container>
			</header>
			<Container>
				<TextForm setResults={setResults} />
				{results.length !== 0 && <Results results={results} />}
				<hr />
				<Explanation />
			</Container>
			<footer>
				<Container>
					<p>This tool was build with educational purpose only!</p>
				</Container>
			</footer>
		</main>
	);
};

export default App;
