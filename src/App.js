import { RecoilRoot } from "recoil";
import "./App.css";

import AppRouter from "./components/route/AppRouter";

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <AppRouter />
      </div>
    </RecoilRoot>
  );
};

export default App;
