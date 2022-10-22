import React from "react";
import styled, { css } from "styled-components";
import { LoadingSpinner } from "../loading";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ButtonStyles = styled.button`
	cursor: pointer;
	padding: 0 25px;
	line-height: 1;
	border-radius: 8px;
	font-weight: 600;
	font-size: 18px;
	height: ${(props) => props.height || "66px"};
	display: block;
	${(props) =>
		props.kind === "secondary" &&
		css`
			color: white;
			background-color: ${(props) => props.theme.primary};
		`};
	${(props) =>
		props.kind === "primary" &&
		css`
			color: white;
			background-image: linear-gradient(
				to right bottom,
				${(props) => props.theme.primary},
				${(props) => props.theme.secondary}
			);
		`}
	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
`;

/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type Type of button 'button'  | 'submit'
 *
 */

const Button = ({
	type = "button",
	onClick = () => {},
	children,
	kind = "primary",
	...props
}) => {
	const { isLoading, to } = props;
	const child = !!isLoading ? <LoadingSpinner /> : children;
	if (to !== "" && typeof to === "string") {
		return (
			<NavLink to={to}>
				<ButtonStyles type={type} kind={kind} {...props}>
					{child}
				</ButtonStyles>
			</NavLink>
		);
	}
	return (
		<ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
			{child}
		</ButtonStyles>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf(["button", "submit"]),
	isLoading: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
	kind: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
