import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Technobabble </title>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />
			<h1>A Tech Blog For Humans</h1>
		</div>
	);
};

export default Home;
