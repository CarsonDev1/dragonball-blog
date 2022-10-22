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
						<h1 className=" text-3xl text-orange-500 text-center text">
							About Dragon Ball Blog
						</h1>
						<p className="text-center mt-5">
							Hey, my name’s Bill, and I’ve been a Dragon Ball fan
							for about 20 years now! I started watching it on
							Cartoon Network in the late 90s, during, I think,
							the Freiza saga, and watching Goku turn Super Saiyan
							for the first time was one of the coolest things I’d
							ever seen on TV! Some 20 years later, and I’ve
							abandoned most things I enjoyed as a child (I’m
							looking at you Pokemon, and your made up >151
							Pokemon) but Dragon Ball Z has stayed with me!
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
