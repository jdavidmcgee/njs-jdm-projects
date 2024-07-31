import {skills, type Skills} from '@/data';
import SectionTitle from '@/components/global/SectionTitle';
import SkillsCard from '@/components/skills/SkillsCard';

function Skills() {
	return (
		<section className="py-10 align-element" id="skills">
			<SectionTitle text="tech stack" />
			<div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{skills.map(skill => {
					return <SkillsCard key={skill.id} {...skill} />;
				})}
			</div>
		</section>
	);
}

export default Skills;
