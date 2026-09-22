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
            background: "var(--surface-raised)",
            color: "var(--ink)",
            border: "1px solid var(--hairline)",
            boxShadow: "var(--shadow-card)",
          },
        }}
      />
    </>
  )
}

export default App
