import Link from "next/link";

function Header() {
	return (
		<header>
			<div className="flex items-center space-x-5">
				<Link href="/">
					<img
						src="https://links.papreact.com/yvf"
						className="w-44 object-contain cursor-pointer"
						alt=""
					/>
				</Link>
			</div>
			<div>
				<div className="hidden md:inline-flex items-center space-x-5">
					<h3>About</h3>
					<h3>Contact</h3>
					<h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
						Follow
					</h3>
				</div>
			</div>
		</header>
	);
}

export default Header;
