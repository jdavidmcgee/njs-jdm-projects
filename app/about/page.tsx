import aboutMe from '@/public/images/aboutSvg1.svg';
import SectionTitle from '@/components/global/SectionTitle';
import Image from 'next/image';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function AboutPage() {
	return (
		<section>
			<section className="bg-secondary py-20" id="about">
				<div className="align-element grid md:grid-cols-2 items-center gap-16">
					<Image
						src={aboutMe}
						alt="hero"
						className="w-full h-[24rem] rounded-md object-cover"
					/>
					{/* <img src={aboutMe} alt="about image" className="w-full h-64" /> */}
					<article>
						<div className='text-slate-500'>
							<SectionTitle text="about me" />
						</div>
						<p className="text-lg text-slate-600 mt-8 pr-4 leading-loose">
							I am a full stack developer with a passion for creating web
							applications that are fast, responsive, and user-friendly.
							My FSSD certification is through the University of Texas at
							Austin. I am always looking to learn new technologies and
							improve my skills as a developer. I work well with others
							while being unafraid to take the lead. Experienced
							communicator and presenter of complex ideas and solutions.
							Resilient. Curious. Creative.
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
					</article>
				</div>
			</section>
		</section>
	);
}
export default AboutPage;
