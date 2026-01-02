import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Conjugation Quiz', path: '/conjugation-quiz' },
	];

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2 group">
						<div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
							<Code2 className="h-6 w-6 text-white" />
						</div>
						<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
							AI Feature Incubator
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								to={link.path}
								className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path
									? 'text-white'
									: 'text-zinc-400'
									}`}
							>
								{link.name}
								{location.pathname === link.path && (
									<motion.div
										layoutId="underline"
										className="h-[1px] bg-white w-full mt-1"
									/>
								)}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 text-zinc-400 hover:text-white transition-colors"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-zinc-950 border-b border-white/5"
					>
						<div className="px-4 pt-2 pb-6 space-y-1">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									to={link.path}
									className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${location.pathname === link.path
										? 'text-white bg-white/5'
										: 'text-zinc-400 hover:text-white hover:bg-white/5'
										}`}
								>
									{link.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
