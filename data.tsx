import { nanoid } from 'nanoid';
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaBootstrap,
} from 'react-icons/fa';
import {
	TbBrandNextjs,
	TbBrandTypescript,
	TbCloudComputing,
	TbBrandMongodb,
} from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import {
	RiTailwindCssFill,
	RiJavascriptLine,
	RiBootstrapLine,
} from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import { ImHtmlFive2 } from 'react-icons/im';
import { TiCss3 } from 'react-icons/ti';

export type Skills = {
	id: string;
	title: string;
	icon: JSX.Element;
	text: string;
};

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills: Skills[] = [
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <RiJavascriptLine className="h-16 w-16 text-blue-500" />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality. I am proficient in JavaScript, capable of writing clean and efficient code for both front-end and back-end development.',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className="h-16 w-16 text-blue-500" />,
		text: 'Through numerous projects, I have developed a strong proficiency in React, building dynamic and interactive user interfaces, and efficiently managing state and props.  I have worked with React Query, React Router, and Context API to create scalable and maintainable applications.',
	},
	{
		id: nanoid(),
		title: 'TypeScript',
		icon: <TbBrandTypescript className="h-16 w-16 text-blue-500" />,
		text: 'This project, as well as several others, have been built using TypeScript. I have a good understanding of TypeScript, including types, interfaces, and generics, and have used it to create scalable and maintainable applications.',
	},
	{
		id: nanoid(),
		title: 'Node.js',
		icon: <FaNodeJs className="h-16 w-16 text-blue-500" />,
		text: 'Skilled in creating applications through Node.js; while understanding and being proficient with Express.js, RESTful APIs, and CRUD operations. I have integrated Node.js applications with various databases, including MongoDB and MySQL, using Mongoose for schema definition and data modeling.',
	},
	{
		id: nanoid(),
		title: 'Next.js',
		icon: <TbBrandNextjs className="h-16 w-16 text-blue-500" />,
		text: 'I have completed several projects using Next.js, including this portfolio. I have a good understanding of server-side rendering, static site generation, and incremental static regeneration. I have also worked with Next.js API routes to create serverless functions.',
	},
	{
		id: nanoid(),
		title: 'MongoDB',
		icon: <TbBrandMongodb className="h-16 w-16 text-blue-500" />,
		text: 'Trained to effectively work with MondoDB - especially Mongo Atlas, understands structured and no-structured data models. I have completed several projects that involve designing and querying databases, as well as integrating them with back-end and front-end applications.',
	},
	{
		id: nanoid(),
		title: 'MySQL',
		icon: <GrMysql className="h-16 w-16 text-blue-500" />,
		text: 'I am proficient in MySQL, having completed several projects that involve designing and querying databases, as well as integrating them with back-end and front-end applications. I have a good understanding of SQL and database normalization.',
	},
	{
		id: nanoid(),
		title: 'Cloud Computing',
		icon: <TbCloudComputing className="h-16 w-16 text-blue-500" />,
		text: 'Part of my certification through UT-Austin, I have been trained in cloud computing, including AWS. I have completed several projects that involve deploying applications to the cloud, setting up virtual machines, and configuring cloud services.',
	},
	{
		id: nanoid(),
		title: 'HTML',
		icon: <ImHtmlFive2 className="h-16 w-16 text-blue-500" />,
		text: 'I have a solid understanding of HTML, having completed several certification courses and numerous projects that demonstrate my ability to create well-structured, semantic web pages.',
	},
	{
		id: nanoid(),
		title: 'CSS',
		icon: <TiCss3 className="h-16 w-16 text-blue-500" />,
		text: 'I have a good proficiency in CSS having completed many projects, where I have applied various styling techniques, including Flexbox, Grid, and responsive design, to create visually appealing web pages. I am also experienced with Bootstrap and Tailwind CSS.',
	},
	{
		id: nanoid(),
		title: 'Bootstrap',
		icon: <RiBootstrapLine className="h-16 w-16 text-blue-500" />,
		text: 'Experience in creating responsive and visually appealing web pages using Bootstrap. I have completed several projects that demonstrate my ability to use Bootstrap components and utilities to create modern and professional-looking websites. My core FSSD project through UT-Austin was built using Bootstrap.',
	},
	{
		id: nanoid(),
		title: 'Tailwind CSS',
		icon: <RiTailwindCssFill className="h-16 w-16 text-blue-500" />,
		text: 'Have created several applications using Tailwind CSS - including this one.  Trained in many of the basic styles and components, and have a good understanding of the utility-first approach to styling.',
	},
];


