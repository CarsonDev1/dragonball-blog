import React from "react";
import Layout from "../components/layout/Layout";

const ContactPage = () => {
	return (
		<Layout>
			<div className="container">
				<div className=" grid grid-cols-2 gap-10 mt-[40px]">
					<div className="image">
						<img
							src="/contact.jpg"
							alt=""
							className="w-[600px] h-[800px]"
						/>
					</div>
					<div className="text-xl text-justify">
						<h1 className=" text-3xl text-orange-500 text-center text">
							About Dragon Ball Blog
						</h1>
						<p className="mt-5">
							Hey, my name’s Carson, and I’ve been a Dragon Ball
							fan for about 20 years now! I started watching it on
							Cartoon Network in the late 90s, during, I think,
							the Freiza saga, and watching Goku turn Super Saiyan
							for the first time was one of the coolest things I’d
							ever seen on TV! Some 20 years later, and I’ve
							abandoned most things I enjoyed as a child (I’m
							looking at you Pokemon, and your made up >151
							Pokemon) but Dragon Ball Z has stayed with me!
						</p>
						<p className="mt-5">
							I make sites as my day job, so thought I’d combine
							two of my passions and make a website about Dragon
							Ball! Partly to practice my coding skills and partly
							to release some of the useless Dragon Ball knowledge
							I’ve accumulated over the years. I’m by no means the
							most knowledgeable DB fan around the internet,
							Youtube seems to have the most Saiyan Savants these
							days, but I try my best. So I hope you enjoy looking
							around my site and let me know if you have any
							questions or can spot any mistakes on my blog.
						</p>
						<span>Cheers,</span>
						<br />
						<span>Carson</span>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
