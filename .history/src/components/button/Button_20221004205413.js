import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
	cursor: pointer;
	padding: 25px;
	line-height: 1;
	color: white;
	border-radius: 8px;
	font-weight: 600;
	font-size: 18px;
	width: 343px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(
		to right bottom,
		${(props) => props.theme.primary},
		${(props) => props.theme.secondary}
	);
`;

const Button = ({
	type = "button",
	onClick = () => {},
	children,
	...props
}) => {
	return (
		<ButtonStyles type={type} onClick={onClick} {...props}>
			{children}
		</ButtonStyles>
	);
};

export default Button;
