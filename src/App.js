import {Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './page/dashboard/Dashboard.page';

import Entry from './page/entry/Entry.page';
import AddTicket from './page/new-ticket/AddTicket.page';
import TicketLists from './page/ticket-list/TicketLists.page';
import Ticket from './page/ticket/Ticket.page';
import PrivateRoute from './components/private-route/PrivateRoute.comp';


function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path='/' ><Entry /></Route>
        
                <PrivateRoute exact path='/dashboard' ><Dashboard /></PrivateRoute >
                <PrivateRoute  exact path='/add-ticket' ><AddTicket /></PrivateRoute >
                <PrivateRoute  exact path='/tickets' ><TicketLists /></PrivateRoute >
                <PrivateRoute  exact path='/ticket/:tid' ><Ticket /></PrivateRoute >
             
              
        </Switch>
    </div>
  );
}

export default App;
