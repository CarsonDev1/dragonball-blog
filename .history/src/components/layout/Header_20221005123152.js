import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
	return (
		<HeaderStyles>
			<div className="container">
				<a href="/">
					<img srcSet="/logo.png 2x" alt="monkey-blog" />
				</a>
			</div>
		</HeaderStyles>
	);
};

export default Header;
