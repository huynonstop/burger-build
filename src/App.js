import React,{Component} from 'react';
import Layout from "./hoc/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
// import Checkout from './containers/Checkout/Checkout'
// import Orders from './containers/Orders/Orders'
// import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import {Route,Switch,Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {authAction} from './store/actions/index'
import asyncComponent from './hoc/asyncComponent/asyncComponent'

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
})

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
})

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
})


class App extends Component {
  componentDidMount() {
    this.props.onAutoLogin()
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth} />
        <Route path='/' component={BurgerBuilder} exact />
        <Redirect to="/"/>
      </Switch>
    )
    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/auth' component={asyncAuth} />
          <Route path='/checkout' component={asyncCheckout} />
          <Route path='/orders' component={asyncOrders} />
          <Route path='/logout' component={Logout} />
          <Route path='/' component={BurgerBuilder} exact />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.token !== null
})
const mapDispatchToProps = (dispatch) => ({
  onAutoLogin: () => dispatch(authAction.authCheck())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
