import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from './components/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
