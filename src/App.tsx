import { BrowserRouter as Router, Route } from "react-router-dom";
import {LoginPage} from "./pages/login";
import {ContextProvider} from "./common/appContext";
function App() {
  return (
    <div >
      <Router>
        <ContextProvider>
         <Route path="/" component={LoginPage}></Route>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
