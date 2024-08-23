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
				<p className="mt-8 text-lg text-slate-500  tracking-wide">
					Creating modern web applications with the skill and experience to effectively communicate across all levels of an organization.
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
				<div className=" mt-4">
					<Button asChild size="default" className="mt-10">
						<Link
							href="https://eportfolio.mygreatlearning.com/david-mcgee"
							target="_blank">
							UT Austin FSSD Projects
						</Link>
					</Button>
				</div>
				<div className="flex gap-x-4 mt-4">
					<Button asChild size="default" className="mt-5">
						<Link href="/projects">Additional Projects</Link>
					</Button>
					<Button asChild size="default" className="mt-5">
						<Link href="/skills">Tech Skills</Link>
					</Button>
				</div>
			</div>
			<HeroCarousel />
		</section>
	);
}

export default Hero;
