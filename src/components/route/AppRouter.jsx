import { BrowserRouter, Route, Routes } from "react-router-dom";

import Chat from "../../pages/Chat";
import Welcome from "../../pages/Welcome";
import Result from "../../pages/Result";
import Others from "../../pages/Others";
import Share from "../../pages/Share";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/result" element={<Result />} />
        <Route path="/others" element={<Others />} />
        <Route path="/share" element={<Share />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
