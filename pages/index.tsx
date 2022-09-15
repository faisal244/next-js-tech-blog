import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Technobabble blog</title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />
			<div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
				<div className="px-10 space-y-5">
					<h1 className="text-6xl max-w-xl font-serif">
						<span className="underline decoration-black decoration-4">
							Technobabble
						</span>{" "}
						is a Tech Blog For Humans
					</h1>
					<h2>
						it's your go to resource to post your thoughts on any topic and
						connect with millions of readers
					</h2>
				</div>
				<img
					className="hidden md:inline-flex h-32 lg:h-full"
					src="https://accountabilitylab.org/wp-content/uploads/2020/03/medium-logo.png"
					alt=""
				/>
				<div></div>
			</div>
			{/* Posts */}
		</div>
	);
};

export default Home;
