

const Footer = () => {
	return (
		<footer className="border-t border-white/5 bg-zinc-950 py-8 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="text-zinc-400 text-sm">
						© {new Date().getFullYear()} CreateVibe. All rights reserved.
					</div>
					<div className="flex space-x-6 text-sm text-zinc-400">
						<a href="#" className="hover:text-white transition-colors">Privacy</a>
						<a href="#" className="hover:text-white transition-colors">Terms</a>
						<a href="#" className="hover:text-white transition-colors">Twitter</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
