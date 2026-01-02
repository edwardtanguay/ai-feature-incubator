import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-3xl mx-auto text-center"
			>
				<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
					About This Project
				</h1>

				<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
					<p className="text-xl text-zinc-300 leading-relaxed mb-8">
						This site is a part of Edward's projects. It serves as an incubator for experimental AI features and interactive web applications.
					</p>

					<motion.a
						href="https://edwards-projects.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors group"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<span>Visit Edward's Projects</span>
						<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
					</motion.a>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
				>
					{[
						{ label: 'Built with', value: 'Vite + React' },
						{ label: 'Styled with', value: 'Tailwind CSS' },
						{ label: 'Hosted on', value: 'Vercel' }
					].map((item, index) => (
						<div key={index} className="p-4 rounded-lg bg-white/5 border border-white/5">
							<div className="text-zinc-500 text-sm mb-1">{item.label}</div>
							<div className="text-zinc-200 font-medium">{item.value}</div>
						</div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
