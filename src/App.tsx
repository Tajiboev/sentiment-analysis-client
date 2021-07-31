import { FC, useState } from "react";
import Container from "./Components/Container";
import Explanation from "./Components/Explanation";
import Results, { Result } from "./Components/Results";
import TextForm from "./Components/TextForm";

const App: FC = () => {
	const [results, setResults] = useState<Result[]>([]);
	const [error, setError] = useState("");

	return (
		<main>
			<header>
				<Container>
					<h2>Sentiment analysis tool</h2>
				</Container>
			</header>
			<Container>
				<TextForm setResults={setResults} setError={setError} />
				{results.length !== 0 && <Results results={results} />}
				{error && <p className="error">{error}</p>}
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
