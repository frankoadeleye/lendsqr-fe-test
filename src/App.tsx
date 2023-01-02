import "./App.scss";
import { store } from "src/redux/store";
import MyRoutes from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyRoutes />
      </div>
    </Provider>
  );
}

export default App;
