import { FC, useState, lazy, Suspense } from "react";
import Container from "./Components/Container";
import { Result } from "./Components/Results";
import TextForm from "./Components/TextForm";

const Results = lazy(() => import("./Components/Results"));
const Explanation = lazy(() => import("./Components/Explanation"));
const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));

const App: FC = () => {
	const [results, setResults] = useState<Result[]>([]);
	const [error, setError] = useState("");

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
			</Suspense>
			<Container>
				<TextForm setResults={setResults} setError={setError} />
				{results.length !== 0 && (
					<Suspense fallback={<div>Loading...</div>}>
						<Results results={results} />
					</Suspense>
				)}
				{error && <p className="error">{error}</p>}
				<Suspense fallback={<div>Loading...</div>}>
					<Explanation />
				</Suspense>
			</Container>
			<Suspense fallback={<div>Loading...</div>}>
				<Footer />
			</Suspense>
		</main>
	);
};

export default App;
