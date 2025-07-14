import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuote from './components/AddQuote';
import SearchQuote from './components/SearchQuote';
import DeleteQuote from './components/DeleteQuote';
import ViewAllquotes from './components/ViewAllquotes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddQuote/>}/>
        <Route path="/search" element={<SearchQuote/>}/>
        <Route path="/delete" element={<DeleteQuote/>}/>
        <Route path="/view" element={<ViewAllquotes/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
