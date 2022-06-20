import VotePage from "./pages/VotePage";
import {Route, Routes}  from 'react-router-dom';
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={<VotePage />} />
    </Routes>
    </>
  );
}

export default App;
