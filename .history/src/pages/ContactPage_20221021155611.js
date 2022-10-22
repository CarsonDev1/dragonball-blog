import React from "react";
import Layout from "../components/layout/Layout";

const ContactPage = () => {
	return (
		<Layout>
			<div className="container">
				<div className=" grid grid-cols-2 gap-2 mt-[40px]">
					<div className="image">
						<img
							src="/contact.jpg"
							alt=""
							className="w-[600px] h-[800px]"
						/>
					</div>
					<div className="content">
						<h1 className=" text-lg">About Dragon Ball Blog</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Ratione voluptatibus unde vel rerum numquam
							beatae ipsum harum minima voluptatum esse, nemo
							porro, sed pariatur nisi quo doloremque officia iure
							at.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
