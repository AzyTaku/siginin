import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/SignIn';
import Notes from './pages/Notes';
import AddNote from './pages/AddNote';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/AddNote" element={<AddNote />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
