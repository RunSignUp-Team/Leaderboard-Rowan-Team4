

/*import { Redirect } from "react-router";*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
  
}


export default App;
