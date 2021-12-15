import { BrowserRouter as Router, Route } from "react-router-dom";
import {Landing} from "./pages/landing";
import Amplify from "aws-amplify";
import {ContextProvider} from "./common/appContext";
import config from "./aws-exports";

Amplify.configure(config);
function App() {
  return (
    <div >
      <Router>
        <ContextProvider>
         <Route path="/" component={Landing}></Route>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
