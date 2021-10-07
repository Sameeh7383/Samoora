
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from './components/Form/form';
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Form} />
    </BrowserRouter>
  );
}

export default App;
