
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="max-w-3xl"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
				<p className="text-xl text-zinc-400 mb-6 leading-relaxed">
					CreateVibe is a digital agency focused on the future. We believe that software should be beautiful, intuitive, and performant.
				</p>
				<p className="text-xl text-zinc-400 mb-6 leading-relaxed">
					Founded in 2024, our team of engineers and designers work seamlessly to bring ambitious ideas to life. We specialize in React, Next.js, and modern web technologies.
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 gap-12 mt-20">
				<div className="h-64 md:h-96 bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center text-zinc-600">
					Team Photo Placeholder
				</div>
				<div className="space-y-6 flex flex-col justify-center">
					<h2 className="text-2xl font-bold">Our Philosophy</h2>
					<p className="text-zinc-400 leading-relaxed">
						We don't just write code; we solve problems. Every line of code is written with purpose, and every pixel is placed with intent. We value simplicity over complexity.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
