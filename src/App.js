import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import ItemDescription from './Views/ItemDescription/ItemDescription'
import ItemsList from './Views/ItemsList/ItemsList'

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/items/:id">
            <ItemDescription />
          </Route>
          <Route exact path="/items">
            <ItemsList />
          </Route>
          <Route exact path="/">
            Inicio
          </Route>
        </MainLayout>
      </Switch>
    </Router>
  )
}

export default App
