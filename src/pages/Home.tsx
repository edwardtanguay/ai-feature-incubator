
import Preview from '../components/Preview';

const Home = () => {
	return (
		<div className="min-h-[80vh] flex flex-col px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto mt-10">
			<p className="text-xl text-zinc-400 mb-4">
				This site has two purposes:
			</p>
			<ul className="list-disc ml-6 mb-8 text-xl text-zinc-400 space-y-2">
				<li>a testing ground to develop features with AI for other projects</li>
				<li>when a feature is far enough developed, I port it to the project, and leave it here as an example of what can be done with AI</li>
			</ul>
			<Preview title="Verb Conjugation Quiz" link="/conjugation-quiz" description="I had a text file (see data/conjugations.txt) which I asked Antigravity/Gemini3Pro to convert to JSON and then make a page which tested the user giving him immediate feedback for each conjugation. It was finished in about 15 minutes, no adjustments necessary." image="demo-quiz-001.gif" />
		</div>
	);
};

export default Home;
