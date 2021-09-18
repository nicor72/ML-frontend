import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ItemDescription from './views/ItemDescription'
import ItemsList from './views/ItemsList'
import { MainProvider } from './contexts/MainContext'

function App() {
  return (
    <Router>
      <Switch>
        <MainProvider>
          <MainLayout>
            <Route path="/items/:id">
              <ItemDescription />
            </Route>
            <Route exact path="/items">
              <ItemsList />
            </Route>
            <Route exact path="/">
            </Route>
          </MainLayout>
        </MainProvider>
      </Switch>
    </Router>
  )
}

export default App
