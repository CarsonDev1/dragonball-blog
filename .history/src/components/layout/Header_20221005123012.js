import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
	return (
		<HeaderStyles>
			<a href="/">
				<img src="/public/logo.png 2x" alt="monkey-blog" />
			</a>
		</HeaderStyles>
	);
};

export default Header;
