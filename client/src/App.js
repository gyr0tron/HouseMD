import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import web3 from './web3';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';


const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "receiver",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "paybills",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_receiver",
				"type": "address"
			}
		],
		"name": "sellHouse",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

let contract; 

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

  state = {
    isMetaMask: false
  };

  async componentDidMount() {
    if (typeof window.web3 !== 'undefined') {
        console.log('web3 is enabled');
        if (web3.currentProvider.isMetaMask === true) {
            await this.setState({isMetaMask: true});
            console.log('MetaMask is active');
        } else {
            console.log('MetaMask is not available')
        }
    } else {
        console.log('web3 is not found')
    }
    if (this.state.isMetaMask) {
      contract = new web3.eth.Contract(abi, '0x3d3701b458828af7202b4a0bbe77debac64574cd');
    }

  }

  // callApi = async () => {
  //   const response = await fetch('/');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

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
}

export default App;
