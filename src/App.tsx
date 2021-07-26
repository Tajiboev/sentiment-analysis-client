import { FC, useState } from "react";
import Container from "./Components/Container";
import Results, { Result } from "./Components/Results";
import TextForm from "./Components/TextForm";

const App: FC = () => {
	const [results, setResults] = useState<Result[]>([]);

	return (
		<div>
			<header>Header</header>
			<Container>
				<h2>Sentiment analysis tool</h2>
				<TextForm setResults={setResults} />
				{results.length !== 0 && <Results results={results} />}
				<hr />
				<p>
					This MD5 hash generator is useful for encoding passwords, credit cards numbers
					and other sensitive date into MySQL, Postgress or other databases. PHP
					programmers, ASP programmers and anyone developing on MySQL, SQL, Postgress or
					similar should find this online tool an especially handy resource.
				</p>
				<h4>What is an MD5 hash?</h4>
				<p>
					An MD5 hash is created by taking a string of an any length and encoding it into
					a 128-bit fingerprint. Encoding the same string using the MD5 algorithm will
					always result in the same 128-bit hash output. MD5 hashes are commonly used with
					smaller strings when storing passwords, credit card numbers or other sensitive
					data in databases such as the popular MySQL. This tool provides a quick and easy
					way to encode an MD5 hash from a simple string of up to 256 characters in
					length.
				</p>
			</Container>
			<footer>Copyright</footer>
		</div>
	);
};

export default App;
