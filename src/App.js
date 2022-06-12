import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {useReducer} from "react"
import ContextApp, {InitialState, reducer} from "./store"
import ContactsBook from "./components/ContactsBook"
import {Todos} from "./components/Todos"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"

function App() {

	const [state, dispatch] = useReducer(reducer, InitialState)

  return (
    <BrowserRouter>
	    <Switch>
		    <Route path={'/homepage'} component={HomePage}/>
		    <Route path={'/contacts'} render={() =>
			    <ContextApp.Provider value={{state, dispatch}}>
			      <ContactsBook/>
		      </ContextApp.Provider>}
		    />
		    <Route path={'/todos'} component={Todos}/>
		    <Route
			    path={'/404'}
          component={ErrorPage}
		    />
		    <Route path={'/*'}>
			    <Redirect to={'/404'}/>
		    </Route>
	    </Switch>
    </BrowserRouter>
  );
}

export default App;
