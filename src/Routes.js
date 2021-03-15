import React from 'react' ;
import {BrowserRouter,Switch,Router,Route} from 'react-router-dom'
import Base from './Base'


const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path = "/" exact component = {Base}/>
        </Switch>
        </BrowserRouter>
    )
}




export default Routes;
