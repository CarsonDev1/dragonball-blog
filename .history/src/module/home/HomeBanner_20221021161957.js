import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";

const HomeBannerStyles = styled.div`
	min-height: 520px;
	padding: 10px 0;
	margin-bottom: 40px;

	/* background-image: linear-gradient(
		to right bottom,
		${(props) => props.theme.primary},
		${(props) => props.theme.secondary}
	); */
	background-color: #f9ca24;
	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-content {
			max-width: 600px;
			color: black;
		}
		&-heading {
			font-size: 36px;
			margin-bottom: 20px;
			font-family: "Fredoka One", cursive;
		}
		&-desc {
			line-height: 1.75;
			margin-bottom: 40px;
		}
	}
`;

const HomeBanner = () => {
	return (
		<HomeBannerStyles>
			<div className="container">
				<div className="banner">
					<div className="banner-content">
						<h1 className="banner-heading">Dragon Ball Blog</h1>
						<p className="banner-desc">
							I make sites as my day job, so thought I’d combine
							two of my passions and make a website about Dragon
							Ball! Partly to practice my coding skills and partly
							to release some of the useless Dragon Ball knowledge
							I’ve accumulated over the years.
						</p>
						<Button to="/sign-up" kind="secondary">
							Get Started
						</Button>
					</div>
					<div className="banner-image">
						<img
							src="/goku-banner2.png"
							alt="banner"
							className="max-w-[370px]"
						/>
					</div>
				</div>
			</div>
		</HomeBannerStyles>
	);
};

export default HomeBanner;
