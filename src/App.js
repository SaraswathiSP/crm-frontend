import {Route,Switch } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard.page';

import Entry from './page/entry/Entry.page';
import AddTicket from './page/new-ticket/AddTicket.page';
import TicketLists from './page/ticket-list/TicketLists.page';
import Ticket from './page/ticket/Ticket.page';


function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path='/' ><Entry /></Route>
              <DefaultLayout>
                <Route exact path='/dashboard' ><Dashboard /></Route>
                <Route exact path='/add-ticket' ><AddTicket /></Route>
                <Route exact path='/tickets' ><TicketLists /></Route>
                <Route exact path='/ticket/:tid' ><Ticket /></Route>
              </DefaultLayout>
              
        </Switch>
    </div>
  );
}

export default App;
