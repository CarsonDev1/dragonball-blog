import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
const DashboardHeaderStyles = styled.div`
	background-color: white;
	padding: 20px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: flex-end;
	gap: 20px;
	.header-avatar {
		width: 52px;
		height: 52px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 100rem;
		}
	}
`;

const DashboardHeader = () => {
	return (
		<DashboardHeaderStyles>
			<div className="sidebar-logo">
				<img className="[w-40px]" srcSet="/logo.png 2x" alt="" />
				<span>Monkey Blogging</span>
			</div>
			<Button
				to="/manage/add-post"
				className="header-button"
				height="52px"
			>
				Write new post
			</Button>
			<div className="header-avatar">
				<img src="/dbz.png" alt="" />
			</div>
		</DashboardHeaderStyles>
	);
};

export default DashboardHeader;
