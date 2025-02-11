import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Landing } from "./Landing"
import MainLayout from "./pages/components/Layout";
import DocsPage from "./pages/DocsPage";
import { CodeSmells } from "./pages/CommunErrors/CodeSmells";
import { GoodPracticesPage } from "./pages/GoodPractices/GoodPracticesPage";
import { BoxShadowComponents } from "./pages/ComponentsPages/BoxShadow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
          <Route element={<MainLayout/>}>
          <Route path="/introduction" element={<DocsPage/>}/>
          <Route path="/code-smells" element={<CodeSmells/>}/>
          <Route path="/good-practices" element={<GoodPracticesPage/>}/>
          <Route path="/box-shadows-components" element={<BoxShadowComponents/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
