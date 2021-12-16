import { Switch, Route, Link } from 'react-router-dom'
import { Cult } from '../components/cult/Cult'
import { LandingPage } from '../components/Landing/Landing'


export const Allroutes = () => {
    return <Switch>

        <Route exact path="/">
            <LandingPage/>
        </Route>

        <Route exact path="/cult">
            <Cult/>
        </Route>

        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>

    </Switch>
}