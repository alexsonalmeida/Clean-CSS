import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Landing } from "./Landing"
import MainLayout from "./pages/components/Layout";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route element={<MainLayout />}>
          <Route path="/introduction" element={<DocsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
