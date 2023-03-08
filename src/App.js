// import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TakeNoteOne from './components/TakeNoteOne/TakeNoteOne';
import TakeNoteTwo from './components/TakeNoteTwo/TakeNoteTwo';
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/SignIn/SignIn';
// import SignUp from './pages/SignUp/SignUp';




function App() {
  return (
    <>
    <Dashboard />
    {/* <Header/>
    <TakeNoteOne/>
    <TakeNoteTwo/> */}
    {/* <SignUp/> */}
    {/* <SignIn/> */}
    {/* <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <SignIn/> */}
    </>
  );
}

export default App;
