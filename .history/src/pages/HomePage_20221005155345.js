import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import HomeBanner from "../module/home/HomeBanner";
import HomeFeature from "../module/home/HomeFeature";

const HomePageStyles = styled.div``;

const HomePage = () => {
	return (
		<HomePageStyles>
			<Layout>
				<HomeBanner />
				<HomeFeature />
			</Layout>
		</HomePageStyles>
	);
};

export default HomePage;
