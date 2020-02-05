import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import { IntlProvider } from 'react-intl'

import './App.css';

const Home = lazy(() => import('./pages/Home'))
const Day = lazy(() => import('./pages/Day'))

function App() {
  return (
    <IntlProvider>
      <Router>
        <Suspense fallback={<Loading />} >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/day" component={Day} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Suspense>
      </Router>
    </IntlProvider>
  )
}

export default App;
