import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
var Dagger = require("eth-dagger");

// connect to Dagger ETH main network (network id: 1) over web socket
var dagger = new Dagger("wss://ropsten.dagger.matic.network"); 


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {
  componentDidMount(){
    dagger.on("latest:addr/0x9eF08D23BD291c2f2c27654bA02D05a1386cC185/tx/out", function (result) {
      console.log("outgoing tranx: ", result);
      let x = result.value
      console.log(x);
    });
  }

  state = {
    isMetaMask: false
  };

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
};

export default App;
