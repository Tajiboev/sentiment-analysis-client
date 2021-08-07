interface AnalysisResult {
	score: number;
	comparative: number;
	calculation: Array<{
		[token: string]: number;
	}>;
	tokens: string[];
	words: string[];
	positive: string[];
	negative: string[];
}

export default interface IAnalysisResult extends AnalysisResult {
	converted: number;
	sentence: string;
}
