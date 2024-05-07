import React, { useEffect }  from 'react'
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from "react-hot-toast";
import { authActions } from './components/Store';
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import Home from './components/Home/Home'
import Header from './components/Home/Header'
import Display from './components/Pages/Display';
import AddSkill from './components/Pages/AddSkill'
import UserSkills from './components/Pages/UserSkills';
import UserProfile from './components/Pages/UserProfile'
import OTPverification from './components/Auth/OTPverification';
import Forgotpw from './components/Auth/Forgotpw';
import './App.css'

const App = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn)
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {!isLoggedIn ? (<>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpw' element={<Forgotpw/>}/>
            <Route path='/verifyotp' element={<OTPverification/>}/>
          </>) : (<>
            <Route path='/display' element={<Display />} />
            <Route path='/myskills' element={<UserSkills />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/addskill' element={<AddSkill />} />
          </>)}
        </Routes>
        <Toaster />
      </main>
    </React.Fragment>
  )
}

export default App
