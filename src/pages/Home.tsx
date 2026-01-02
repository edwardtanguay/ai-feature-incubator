
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="space-y-20 pb-20">
			{/* Hero Section */}
			<section className="relative pt-20 lg:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
						Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Digital</span> Experiences
						<br />
						That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Matter</span>.
					</h1>
					<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 text-pretty">
						We craft minimalistic, high-performance web applications with a focus on aesthetics and user experience.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link to="/contact" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
							Start a Project <ArrowRight size={20} />
						</Link>
						<Link to="/portfolio" className="px-8 py-3 rounded-full border border-zinc-800 text-white font-semibold hover:bg-zinc-900 transition-colors">
							View Work
						</Link>
					</div>
				</motion.div>

				{/* Abstract Background Elements */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
			</section>

			{/* Features Section */}
			<section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{ icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance." },
						{ icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security built-in." },
						{ icon: Globe, title: "Global Scale", desc: "Ready to serve users worldwide." }
					].map((feature, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
						>
							<feature.icon className="h-10 w-10 text-emerald-400 mb-4" />
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="text-zinc-400">{feature.desc}</p>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
