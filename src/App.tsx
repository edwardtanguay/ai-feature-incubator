import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ConjugationQuiz from './pages/ConjugationQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="conjugation-quiz" element={<ConjugationQuiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
