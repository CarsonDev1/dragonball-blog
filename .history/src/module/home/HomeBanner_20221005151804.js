import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
	height: 520px;
	background-image: linear-gradient(
		to right bottom,
		${(props) => props.theme.primary},
		${(props) => props.theme.secondary}
	);
`;

const HomeBanner = () => {
	return (
		<HomeBannerStyles>
			<div className="container">
				<div className="banner">
					<div className="banner-content">
						<h1 className="banner-heading">Monkey Blog</h1>
						<p className="banner-desc">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Explicabo quos consectetur quasi modi totam
							odit alias, sunt laudantium nobis nulla aspernatur
							commodi tempore magni nam cumque aperiam dolores
							asperiores veritatis.
						</p>
					</div>
					<div className="banner-image">
						<img src="/img-banner.png" alt="banner" />
					</div>
				</div>
			</div>
		</HomeBannerStyles>
	);
};

export default HomeBanner;
