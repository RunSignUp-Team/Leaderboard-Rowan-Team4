

/*import { Redirect } from "react-router";*/

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import NoPage from "./Pages/NoPage";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  ); 
}

export default App;
