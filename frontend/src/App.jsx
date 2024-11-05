import SignIn from "./pages/SignIn.jsx";
import Notes from "./pages/Notes.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => (
  <Router>
    <div className="bg-secondary w-full overflow-hidden">
      <Routes>
        <Route path="/" element={
          <>
            <SignIn />
          </>
        } />
        <Route path="/Notes" element={<Notes />} />
      </Routes>
    </div>
  </Router>
);

export default App
