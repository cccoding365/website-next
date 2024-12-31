"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<nav className="container mx-auto px-4 py-4">
				<ul className="flex items-center gap-4">
					<li className="mr-auto">
						<Link href="/" className="text-2xl font-bold">
							DoubledConG
						</Link>
					</li>
					<li className="hidden md:block">
						<Link href="/about">关于</Link>
					</li>
					<li className="hidden md:block">
						<Link href="/blogs">博客</Link>
					</li>
					<li className="hidden md:block">
						<Link href="/life">生活</Link>
					</li>
					<li className="hidden md:block">
						<Link href="/contact">联系</Link>
					</li>
					<li className="md:hidden">
						<button className="text-2xl">☰</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
