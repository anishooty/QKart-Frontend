import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import { createTheme } from "@mui/material/styles";
export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULEsdcvLOGIN - To add configure routes and their mapping */}
        
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      {/* <Route path="/checkout" component={Checkout} />
      <Route path="/thanks" component={Thanks} /> */}
    </Switch>
    </div>
  );
}

export default App;
