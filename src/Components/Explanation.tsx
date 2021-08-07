import { FC } from "react";
import styles from "../Styles/explanation.module.sass";

const Explanation: FC = () => {
	return (
		<section className={styles.explanation}>
			<p>
				This sentiment analysis tool was built based on{" "}
				<a
					href="https://www.npmjs.com/package/sentiment"
					target="_blank"
					rel="noopener noreferrer"
				>
					Sentiment
				</a>
				. Sentiment is a Node.js module that uses the{" "}
				<a
					href="http://www2.imm.dtu.dk/pubdb/pubs/6010-full.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					AFINN-165
				</a>{" "}
				wordlist and{" "}
				<a
					href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144296"
					target="_blank"
					rel="noopener noreferrer"
				>
					Emoji Sentiment Ranking
				</a>{" "}
				to perform sentiment analysis on arbitrary blocks of input text.
			</p>

			<p>
				<strong>What is sentiment analysis?</strong>
			</p>
			<p>
				<a
					href="https://en.wikipedia.org/wiki/Sentiment_analysis"
					target="_blank"
					rel="noopener noreferrer"
				>
					Sentiment analysis
				</a>{" "}
				(also known as opinion mining or emotion AI) is the use of natural language
				processing, text analysis, computational linguistics, and biometrics to
				systematically identify, extract, quantify, and study affective states and
				subjective information. Sentiment analysis is widely applied to voice of the
				customer materials such as reviews and survey responses, online and social media,
				and healthcare materials for applications that range from marketing to customer
				service to clinical medicine.
			</p>
			<p>
				<strong>How it works?</strong>
			</p>
			<p>
				Sentiment analysis is performed by cross-checking the string tokens (words, emojis)
				with the AFINN list and getting their respective scores. AFINN is a list of words
				rated for valence with an integer between minus five (negative) and plus five
				(positive). This approach leaves you with a mid-point of 0 and the upper and lower
				bounds are constrained to positive and negative 5 respectively. For example, let's
				imagine an incredibly "positive" string with 200 tokens and where each token has an
				AFINN score of 5. Our resulting comparative score would look like this:{" "}
			</p>
			<code>
				(max positive score * number of tokens) / number of tokens (5 * 200) / 200 = 5
			</code>
		</section>
	);
};

export default Explanation;
