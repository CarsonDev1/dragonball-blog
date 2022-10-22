import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";

const HomeBannerStyles = styled.div`
	min-height: 520px;
	padding: 40px 0;
	margin-bottom: 40px;
	/* background-image: linear-gradient(
		to right bottom,
		${(props) => props.theme.primary},
		${(props) => props.theme.secondary}
	); */
	background-color: #f75b20;
	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-content {
			max-width: 600px;
			color: white;
		}
		&-heading {
			font-size: 36px;
			margin-bottom: 20px;
		}
		&-desc {
			line-height: 1.75;
			margin-bottom: 20px;
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
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Explicabo quos consectetur quasi modi totam
							odit alias, sunt laudantium nobis nulla aspernatur
							commodi tempore magni nam cumque aperiam dolores
							asperiores veritatis.
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
