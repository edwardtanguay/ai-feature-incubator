
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import conjugationsData from '../data/conjugations.json';

interface VerbData {
	infinitive: string;
	tenses: {
		[key: string]: string[];
	};
}

const ConjugationQuiz = () => {
	const [selectedVerb, setSelectedVerb] = useState<string>(conjugationsData[0].infinitive);
	// Store user answers: { "tense-index": "user input" }
	const [answers, setAnswers] = useState<{ [key: string]: string }>({});

	const currentVerbData = useMemo(() => {
		return conjugationsData.find((v: VerbData) => v.infinitive === selectedVerb) as VerbData;
	}, [selectedVerb]);

	// Helper to get matching persons/labels
	const getPersons = (_tenseName: string, count: number) => {
		// Basic person mapping
		const standard = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
		// For single output like gerund
		if (count === 1) return [''];
		// For imperative, it differs? The file had *, -i, etc. 
		// Let's just stick to standard index 1-6 logic for 6-item arrays.
		return standard;
	};

	const handleInputChange = (tense: string, index: number, value: string) => {
		setAnswers(prev => ({
			...prev,
			[`${tense}-${index}`]: value
		}));
	};

	const checkAnswer = (tense: string, index: number) => {
		const key = `${tense}-${index}`;
		const userAnswer = answers[key]?.trim().toLowerCase() || '';
		const correctAnswer = currentVerbData.tenses[tense][index]?.toLowerCase();

		if (!userAnswer) return 'border-zinc-700'; // Default
		return userAnswer === correctAnswer
			? 'border-green-500 text-green-500'
			: 'border-red-500 text-red-500';
	};

	return (
		<div className="min-h-screen bg-background pt-24 px-4 sm:px-6 lg:px-8 pb-12">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-8"
				>
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						<div>
							<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-2">
								Conjugation Quiz
							</h1>
							<p className="text-zinc-400">
								Practice your Italian verb conjugations with immediate feedback.
							</p>
						</div>

						{/* Verb Selector */}
						<div className="w-full md:w-64">
							<label className="block text-sm font-medium text-zinc-400 mb-2">
								Select Verb
							</label>
							<select
								value={selectedVerb}
								onChange={(e) => {
									setSelectedVerb(e.target.value);
									setAnswers({}); // Reset answers on verb change
								}}
								className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
							>
								{conjugationsData.map((v: VerbData) => (
									<option key={v.infinitive} value={v.infinitive}>
										{v.infinitive.charAt(0).toUpperCase() + v.infinitive.slice(1)} ({v.infinitive.slice(-3).toUpperCase()})
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Quiz Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<AnimatePresence mode='wait'>
							{(Object.entries(currentVerbData.tenses) as [string, string[]][]).map(([tense, forms]) => (
								<motion.div
									key={`${selectedVerb}-${tense}`}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.2 }}
									className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:bg-zinc-900/80 transition-colors"
								>
									<h3 className="text-xl font-semibold text-white mb-4 capitalize border-b border-white/5 pb-2">
										{tense.replace(/_/g, ' ')}
									</h3>
									<div className="space-y-3">
										{forms.map((form, idx) => {
											// Skip empty forms if any (like imperative 1st person usually empty)
											if (form === "") return null;

											const persons = getPersons(tense, forms.length);
											// Adjust index for display if sending truncated lists?
											// The lists are fixed length from JSON.

											return (
												<div key={idx} className="flex items-center gap-3">
													<span className="w-16 text-sm text-zinc-500 font-medium">
														{persons[idx] || '-'}
													</span>
													<input
														type="text"
														value={answers[`${tense}-${idx}`] || ''}
														onChange={(e) => handleInputChange(tense, idx, e.target.value)}
														className={`flex-1 bg-black/20 border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all ${checkAnswer(tense, idx)}`}
														placeholder="..."
													/>
												</div>
											);
										})}
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ConjugationQuiz;
