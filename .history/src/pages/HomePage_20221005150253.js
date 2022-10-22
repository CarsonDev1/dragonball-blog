import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { auth } from "../firebase-app/firebase-config";

const HomePageStyles = styled.div``;

const HomePage = () => {
	return (
		<HomePageStyles>
			<Header />
			<HomePage />
		</HomePageStyles>
	);
};

export default HomePage;
