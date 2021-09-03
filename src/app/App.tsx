import { lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
//REDUX
import { getUserLoginAction } from './redux/user/user.actions'

//COMPONENTS
import Navigation from './components/ui/Sidebar'
const TicketsPage = lazy(() => import('./pages/tickets.page'))
const LoginPage = lazy(() => import('./pages/Login.page'))

const App = ({ getUserLogin, isAuthenticated }: any) => {
  return (
    <>
      {isAuthenticated ? <Navigation /> : null}
      <Switch>
        <Suspense fallback={<div style={{ marginLeft: '50%', marginTop: '50vh' }}>yoyo</div>}>
          <div style={{ marginLeft: 60, marginTop: 65 }}>
            <Route path="/tickets" exact component={TicketsPage} />
            <Route path="/" exact component={LoginPage} />

          </div>
        </Suspense>
      </Switch>
    </>
  );

}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.user.isAuthenticated
})

const mapDispatchToProps = (dispatch: any) => ({
  getUserLogin: (username: string, password: string) => dispatch(getUserLoginAction(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);