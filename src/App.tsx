import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from './components/MainLayout';
import ProjectPage from './components/ProjectPage';
import RouteScroll from './components/RouteScroll';

function App() {
  return (
    <>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#121a26",
            color: "#e7edf5",
            border: "1px solid rgba(148, 163, 184, 0.35)",
          },
        }}
      />
    </>
  )
}

export default App
