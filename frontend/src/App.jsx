import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from "./components/Home"
import './App.css'
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';


function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/edit" element={<EditPost/>}/>
        <Route path="/delete" element={<DeletePost/>}/>
      </Routes>
    </>
  )
}

export default App
