import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route path="/">
                            
                        </Route>
                        <Route path="/comics">
                          
                        </Route>
                    </Switch>                    
                </main>
            </div>
        </Router>
    )
}    

export default App;