import './App.css'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CustomerTickets from './components/CustomerTickets';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import { initialTickets } from './data/ticketsData';

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Calculate counts
  const inProgressCount = inProgressTickets.length;
  const resolvedCount = resolvedTickets.length;

  const handleTicketClick = (ticket) => {
    // Check if ticket is already in progress
    const isAlreadyInProgress = inProgressTickets.some(t => t.id === ticket.id);
    if (isAlreadyInProgress) {
      toast.warn(`Ticket "${ticket.title}" is already in progress!`);
      return;
    }

    // Add to in-progress
    setInProgressTickets(prev => [...prev, ticket]);
    toast.success(`Ticket "${ticket.title}" added to task status!`);
  };

  const handleCompleteTask = (ticketId) => {
    // Find the ticket in in-progress
    const ticket = inProgressTickets.find(t => t.id === ticketId);
    if (!ticket) return;

    // Remove from in-progress
    setInProgressTickets(prev => prev.filter(t => t.id !== ticketId));
    
    // Add to resolved
    setResolvedTickets(prev => [...prev, { ...ticket, status: 'resolved' }]);
    
    // Remove from customer tickets
    setTickets(prev => prev.filter(t => t.id !== ticketId));

    toast.success(`Ticket "${ticket.title}" completed and resolved!`);
  };

  const handleNewTicket = () => {
    toast.info('New ticket creation would open here!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNewTicket={handleNewTicket} />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CustomerTickets tickets={tickets} onTicketClick={handleTicketClick} />
          </div>
          <div className="lg:col-span-1">
            <TaskStatus 
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onCompleteTask={handleCompleteTask}
            />
          </div>
        </div>
      </main>

      <Footer />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;