import React from "react";
import styled from "styled-components";

const InputStyles = styled.div`
	position: relative;
	width: 100%;
	input {
		width: 100%;
		padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
		background-color: ${(props) => props.theme.grayLight};
		border-radius: 8px;
		font-weight: 500;
		transition: all 0.2s linear;
		border: 1px solid transparent;
	}
	input:focus {
		background-color: white;
		border: ${(props) => props.theme.primary};
	}
	input::-webkit-input-placeholder {
		color: #84878b;
	}
	input::-moz-input-placeholder {
		color: #84878b;
	}
`;

const Input = () => {
	return <div></div>;
};

export default Input;
