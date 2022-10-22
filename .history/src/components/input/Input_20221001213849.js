import React from "react";
import styled from "styled-components";

const InputStyles = styled.div`
	position: relative;
	width: 100%;
	input {
		width: 100%;
		padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
		background-color: ${(props) => props.theme.grayLight};
	}
`;

const Input = () => {
	return <div></div>;
};

export default Input;
