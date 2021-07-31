import { FC } from "react";
import Container from "./Container";

const Header: FC = () => {
	return (
		<header>
			<Container>
				<p>
					<strong>Sentiment analysis tool</strong>
				</p>
			</Container>
		</header>
	);
};

export default Header;
