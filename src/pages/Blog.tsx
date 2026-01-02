
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
	{ title: "The Future of React Server Components", date: "Jan 2, 2026", readTime: "5 min read" },
	{ title: "Designing for Dark Mode: Best Practices", date: "Dec 28, 2025", readTime: "4 min read" },
	{ title: "Why User Experience Matters More Than Ever", date: "Dec 15, 2025", readTime: "6 min read" },
];

const Blog = () => {
	return (
		<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-20 text-center"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">Thoughts</h1>
				<p className="text-xl text-zinc-400">
					Insights and tutorials from our team.
				</p>
			</motion.div>

			<div className="space-y-12">
				{posts.map((post, idx) => (
					<motion.article
						key={idx}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="group border-b border-white/5 pb-12"
					>
						<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
							<h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors cursor-pointer">
								{post.title}
							</h2>
							<div className="flex items-center gap-4 text-sm text-zinc-500">
								<span>{post.date}</span>
								<span>•</span>
								<span>{post.readTime}</span>
							</div>
						</div>
						<p className="text-zinc-400 leading-relaxed mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
						</p>
						<Link to="#" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
							Read more →
						</Link>
					</motion.article>
				))}
			</div>
		</div>
	);
};

export default Blog;
