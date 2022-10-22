import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import HomeBanner from "../module/home/HomeBanner";
import HomeFeature from "../module/home/HomeFeature";
import HomeNewest from "../module/home/HomeNewest";
import Products from "../fakeapi/products";

const HomePageStyles = styled.div``;
console.log(Products);
const HomePage = () => {
	return (
		<HomePageStyles>
			<Layout>
				<HomeBanner />
				<HomeFeature />
				<HomeNewest />
			</Layout>
		</HomePageStyles>
	);
};

export default HomePage;
