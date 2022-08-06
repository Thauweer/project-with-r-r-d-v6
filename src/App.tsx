import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import MyNavbar from './components/Header';
import UserProfile from './components/UserProfile';
import UsersList from './components/UsersList';
import About from './pages/About';
import General from './pages/General';
import Users from './pages/Users';


function Layout(){
  return (<>
    <MyNavbar/>
    <main>
      <Outlet/>
    </main>
  </>)
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<General />} />
          <Route path='users' element={<Users/>} >
            <Route index element={<UsersList />} />
            <Route path=":id" element={<UserProfile/>} />
            <Route path="*" element={<h1>Not found</h1>}/>
          </Route> 
          <Route path="about" element={<About/>}/>       
          <Route path="*" element={<h1>Not found</h1>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
