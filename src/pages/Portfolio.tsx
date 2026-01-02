
import { motion } from 'framer-motion';

const projects = [
	{ id: 1, title: "Neon Finance", category: "Fintech", color: "bg-emerald-500" },
	{ id: 2, title: "Space Xplorer", category: "Education", color: "bg-blue-500" },
	{ id: 3, title: "Urban Fashion", category: "E-commerce", color: "bg-purple-500" },
	{ id: 4, title: "Health Track", category: "Healthcare", color: "bg-rose-500" },
];

const Portfolio = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-20"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Work</h1>
				<p className="text-xl text-zinc-400">
					A showcase of our best projects and collaborations.
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 gap-8">
				{projects.map((project, idx) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
					>
						<div className={`absolute inset-0 ${project.color}/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
							{/* Placeholder for project image */}
							<span className="text-4xl font-bold opacity-20">{project.title}</span>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
							<span className="text-accent-foreground text-sm font-medium mb-2">{project.category}</span>
							<h3 className="text-2xl font-bold">{project.title}</h3>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
