import { FC, lazy, Suspense, useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import IAnalysisResult from "./interfaces/AnalysisResult";

const Results = lazy(() => import("./Components/Results"));
const Explanation = lazy(() => import("./Components/Explanation"));
const Footer = lazy(() => import("./Components/Footer"));
const Form = lazy(() => import("./Components/Form"));

const App: FC = () => {
	const [results, setresults] = useState<IAnalysisResult[]>([]);
	return (
		<>
			<Header />

			<Suspense fallback={<div>Loading...</div>}>
				<Container>
					<Form setResults={setresults} />
					{results.length !== 0 && <Results results={results} />}
					<Explanation />
				</Container>
			</Suspense>

			<Suspense fallback={<div>Loading...</div>}>
				<Footer />
			</Suspense>
		</>
	);
};

export default App;
