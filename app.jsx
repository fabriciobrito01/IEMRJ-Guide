import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './src/pages/home';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />

            </Routes>
        </Router>
    );
}

export default App;