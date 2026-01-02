
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			<div className="grid lg:grid-cols-2 gap-20">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
					<p className="text-xl text-zinc-400 mb-12">
						Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you shortly.
					</p>

					<div className="space-y-8">
						<div className="flex items-start gap-4">
							<Mail className="h-6 w-6 text-blue-400 mt-1" />
							<div>
								<h3 className="font-semibold mb-1">Email</h3>
								<p className="text-zinc-400">hello@createvibe.com</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<Phone className="h-6 w-6 text-emerald-400 mt-1" />
							<div>
								<h3 className="font-semibold mb-1">Phone</h3>
								<p className="text-zinc-400">+1 (555) 000-0000</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<MapPin className="h-6 w-6 text-purple-400 mt-1" />
							<div>
								<h3 className="font-semibold mb-1">Office</h3>
								<p className="text-zinc-400">123 Design Street<br />Creative City, ST 12345</p>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.form
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
					className="space-y-6 bg-zinc-900/50 p-8 rounded-2xl border border-white/5"
					onSubmit={(e) => e.preventDefault()}
				>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label className="text-sm font-medium text-zinc-300">First Name</label>
							<input type="text" className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
						</div>
						<div className="space-y-2">
							<label className="text-sm font-medium text-zinc-300">Last Name</label>
							<input type="text" className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-zinc-300">Email</label>
						<input type="email" className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-zinc-300">Message</label>
						<textarea className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your project..." />
					</div>
					<button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
						Send Message <Send size={18} />
					</button>
				</motion.form>
			</div>
		</div>
	);
};

export default Contact;
