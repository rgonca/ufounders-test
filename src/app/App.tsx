import { lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from "react-router-dom"

import './App.css';
//COMPONENTS
import Navigation from './components/ui/Sidebar'
const TicketsPage = lazy(() => import('./pages/tickets.page'))
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Suspense fallback={<div style={{ marginLeft: '50%', marginTop: '50vh' }}>yoyo</div>}>
          <div style={{ marginLeft: 60, marginTop: 65 }}>
            <Route path="/" exact component={TicketsPage} />
            {/* <Route path='/agencies' component={AgenciesPage} />
            <Route path='/agency/:id/services' component={AgencyServicesPage} />
            <Route path='/service/:id' component={ServicePage} /> */}
            {/* <Route path='/multipleService' component={MultiServicePage} /> */}
          </div>
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
