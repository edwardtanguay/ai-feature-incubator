
import { Link } from 'react-router-dom';

interface PreviewProps {
	title: string;
	description: string;
	link: string;
	image?: string;
}

const Preview = ({ title, description, link, image }: PreviewProps) => {
	return (
		<Link to={link}>
			<div className="w-full bg-zinc-900/50 border border-white/50 rounded-xl p-6 mt-8 hover:bg-zinc-900/80 transition-colors cursor-pointer group">
				<h3 className="text-xl font-semibold text-emerald-400 mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
				<p className="text-zinc-400">{description}</p>
				{image && (
					<img
						src={`/features/${image}`}
						alt={title}
						className="w-full rounded-lg mt-4 border border-white/30"
					/>
				)}
			</div>
		</Link>
	);
};

export default Preview;
