import './App.css'
import { HelDesk } from './HelDesk'
import { Test } from './Test'
import { User } from './User'
import { User2 } from './User2'
import { MyForm } from './Test_User'
import { QueryDashBoard } from './UserDashboard'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path='/' element={<QueryDashBoard/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/User2' element={<User2/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
      {/* <User/> */}
      {/* <QueryDashBoard/> */}
      {/* <HelDesk/> */}
      

      {/* <Test/> */}
      {/* <MyForm/> */}

    </div>
  )
}

function NotFound(){
  return (
    <div ClassName='not-found'>
      <img
         src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif'
         alt='Error 404: Not Found'
      />
    </div>
  )
}

export default App

