import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
	height: 520px;
	background-image: linear-gradient(
		to right bottom,
		${(props) => props.theme.primary};
	);
`;

const HomeBanner = () => {
	return (
		<HomeBannerStyles>
			<div className="container">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
				eos iste quos veritatis perspiciatis aliquid voluptas tempora!
				Tempora totam placeat repudiandae pariatur distinctio sed vel
				voluptate deleniti, error voluptas modi!
			</div>
		</HomeBannerStyles>
	);
};

export default HomeBanner;
