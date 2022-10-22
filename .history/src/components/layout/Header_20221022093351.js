import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth-context";
import { Button } from "../button";

const menuLink = [
	{
		url: "/",
		title: "HOME",
	},
	{
		url: "/About",
		title: "ABOUT",
	},
	{
		url: "/characters",
		title: "CHARACTERS",
	},
];
const HeaderStyles = styled.header`
	background-color: #fbf0d7;
	padding: 25px 0;
	.header-main {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
		display: block;
		max-width: 150px;
	}
	.menu {
		display: flex;
		align-items: center;
		text-align: center;
		gap: 20px;
		margin-left: 40px;
		list-style: none;
		font-weight: 700;
		font-size: 18px;
	}
	/* .search {
		margin-left: auto;
		padding: 15px 25px;
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 100%;
		max-width: 320px;
		display: flex;
		align-items: center;
		position: relative;
		margin-right: 20px;
	} */
	/* .search-input {
		border: none;
		flex: 1;
		padding-right: 35px;
		font-weight: 500;
		font-size: inherit;
		outline: none;
	} */
	/* .search-icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 15px;
	} */
`;

function getLastName(name) {
	if (!name) return "User";
	const length = name.split(" ").length;
	return name.split(" ")[length - 1];
}
getLastName();

const Header = () => {
	// const handleLogout = () => {
	// 	signOut(auth)
	// 		.then(() => {
	// 			Navigate("/");
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	const { userInfo } = useAuth();
	// if (userInfo.role !== userRole.ADMIN) return null;
	return (
		<HeaderStyles>
			<div className="container">
				<div className="header-main">
					<NavLink to="/">
						<img
							srcSet="/logodbz.png 2x"
							alt="monkey-blog"
							className="logo"
						/>
					</NavLink>
					<ul className="menu">
						{menuLink.map((item) => (
							<li className="menu-item" key={item.title}>
								<NavLink to={item.url} className="menu-link">
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
					{/* <div className="search">
						<input
							type="text"
							className="search-input"
							placeholder="Search post..."
						/>
						<span className="search-icon">
							<svg
								width="18"
								height="17"
								viewBox="0 0 18 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="7.66669"
									cy="7.05161"
									rx="6.66669"
									ry="6.05161"
									stroke="#999999"
									strokeWidth="1.5"
								/>
								<path
									d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
									stroke="#999999"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
									stroke="#999999"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</div> */}
					{!userInfo ? (
						<Button
							type="button"
							height="56px"
							className="header-button"
							to="/sign-in"
						>
							Login
						</Button>
					) : (
						<div className="header-auth">
							<Button
								type="button"
								height="56px"
								className="header-button"
								to="/dashboard"
							>
								Dashboard
							</Button>
							{/* <Label className=" mr-8">{userInfo.fullname}</Label>
							<Button
								type="button"
								height="40px"
								className="header-button"
								to="/sign-up"
								onClick={handleLogout}
							>
								Log Out
							</Button> */}
						</div>
					)}
				</div>
			</div>
		</HeaderStyles>
	);
};

export default Header;
