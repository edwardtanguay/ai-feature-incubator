
import { motion } from 'framer-motion';
import { Layers, Smartphone, Database, PenTool, BarChart, Code } from 'lucide-react';

const services = [
	{ icon: Code, title: "Web Development", desc: "Custom web applications built with modern frameworks." },
	{ icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile applications for iOS and Android." },
	{ icon: PenTool, title: "UI/UX Design", desc: "User-centric design that drives engagement." },
	{ icon: Database, title: "Backend Systems", desc: "Scalable server architectures and APIs." },
	{ icon: Layers, title: "CMS Development", desc: "Headless CMS integration for content management." },
	{ icon: BarChart, title: "SEO & Analytics", desc: "Data-driven strategies to grow your audience." },
];

const Services = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-center mb-20"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
				<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
					Comprehensive digital solutions tailored to your business needs.
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-all hover:-translate-y-1"
					>
						<service.icon className="h-10 w-10 text-blue-400 mb-6" />
						<h3 className="text-2xl font-bold mb-4">{service.title}</h3>
						<p className="text-zinc-400 leading-relaxed">{service.desc}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Services;
