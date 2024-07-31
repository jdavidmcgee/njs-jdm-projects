import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Hero() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
			<div>
				<h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
					David McGee
				</h1>
				<p className="mt-8 font-semibold text-3xl text-slate-500 capitalize tracking-wide">
					Full Stack Developer
				</p>
				<p className="mt-8 text-lg text-slate-500 capitalize tracking-wide">
					Creating beautiful web applications built with the latest
					technologies and frameworks.
				</p>
				<div className="flex gap-x-4 mt-4">
					<a href="https://github.com/jdavidmcgee" target="_blank">
						<FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-700 duration-300" />
					</a>
					<a
						href="https://www.linkedin.com/in/david-mcgee-05580519/"
						target="_blank">
						<FaLinkedin
							className="h-8 w-8 text-slate-500
							hover:text-slate-700 duration-300"
						/>
					</a>
				</div>
				<Button asChild size="lg" className="mt-10">
					<Link href="/projects">My Projects</Link>
				</Button>
				<Button asChild size="lg" className="ml-10 mt-10">
					<Link href="/skills">My Tech Skills</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	);
}

export default Hero;
