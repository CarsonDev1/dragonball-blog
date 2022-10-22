import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import HomeBanner from "../module/home/HomeBanner";
import HomeFeature from "../module/home/HomeFeature";
import HomeNewest from "../module/home/HomeNewest";
import FooterPage from "./FooterPage";

const HomePageStyles = styled.div``;
const HomePage = () => {
	return (
		<HomePageStyles>
			<Layout>
				<HomeBanner />
				<HomeFeature />
				<HomeNewest />
				<FooterPage />
			</Layout>
		</HomePageStyles>
	);
};

export default HomePage;
