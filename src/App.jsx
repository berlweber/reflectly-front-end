import { useContext, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import { UserContext } from './contexts/UserContext';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import DiaryEntryForm from './components/DiaryEntryForm/DiaryEntryForm';
import DiaryEntryList from './components/DiaryEntryList/DiaryEntryList';
import Community from './components/Landing/Landing';
import DiaryEntryShow from './components/DiaryEntryShow/DiaryEntryShow';
import Diary from './components/Diary/Diary';

const App = () => {
  const { user } = useContext(UserContext);
  
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Community/>}/>
          <Route path='/sign-up' element={<SignUpForm />}/>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='/diary/:diaryEntryId' element={<DiaryEntryShow />} />
        </Routes>
    </>
  );
};

export default App
