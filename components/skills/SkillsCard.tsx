// eslint-disable-next-line react/prop-types
type ComponentProps = {
    icon: JSX.Element;
    title: string;
    text: string;
};


const SkillsCard = ({ icon, title, text }: ComponentProps) => {
	return (
		<article>
			<span className="h-16 w-16 text-blue-500">{icon}</span>
			<h4 className="mt-6 font-bold">{title}</h4>
			<p className="mt-2 text-slate-500">{text}</p>
		</article>
	);
};

export default SkillsCard;
