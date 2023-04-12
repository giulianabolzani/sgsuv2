import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';

//pages
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Principal from './components/pages/Auth/Principal';
import Students from './components/pages/Students/AllStudents';
import CreateStudents from './components/pages/Auth/CreateStudent';
import EditStudents from './components/pages/Students/EditStudents';
import Materials from './components/pages/Materials/AllMaterials';


import Home from './components/pages/Auth/Home';
import Construction from './components/pages/Auth/Construction';


//context
import {UserProvider} from './context/UserContext';


function App() {
  return (
      <Router>
        <UserProvider>
          <Navbar />
          <Message />
            <Container>
              <Routes>
              <Route path='/' element={<Principal />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/users/login' element={<Login />}></Route>
            <Route path='/users/create' element={<Register />}></Route>
                <Route path='/construction' element={<Construction />}></Route>
                <Route path='/students/all' element={<Students />}></Route>
                <Route path='/students/create' element={<CreateStudents />}></Route>
                <Route path='/students/edit/:id' element={<EditStudents />}></Route>
                
                <Route path='/materials/all' element={<Materials />}></Route>
                <Route path='/materials/edit/:id' element={<EditStudents />}></Route>
              </Routes>
            </Container>
            <Footer />
        </UserProvider>
      </Router>
  );
}

export default App;
