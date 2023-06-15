import Navbar from './components/navbar/Navbar';
import QuizCreator from './components/quiz_creator/QuizCreator';
import QuizList from './components/quiz_list/QuizList';
import QuizResult from './components/quiz_result/QuizResult';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleQuiz from './components/single_quiz/SingleQuiz';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
        <Route path="/" element={<QuizCreator/>}/>
        <Route path="/create_quiz" element={<QuizCreator/>}/>
        <Route path="/show_available_quizes" element={<QuizList/>}/>
        <Route path="/quiz_results_all" element={<QuizResult/>}/>
        <Route path="/show_quiz_result" element={<SingleQuiz/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
