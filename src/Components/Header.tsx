import { FC } from "react";
import Container from "./Container";

const Header: FC = () => {
	return (
		<header>
			<Container>
				<p>
					<strong>Sentiment analyzer</strong> <sup>Beta</sup>
				</p>
			</Container>
		</header>
	);
};

export default Header;
