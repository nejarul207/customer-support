import React from 'react';
import { AlertTriangle, Clock, CheckCircle, User, Calendar } from 'lucide-react';

const CustomerTickets = ({ tickets, onTicketClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH PRIORITY':
        return 'text-red-600 font-semibold';
      case 'MEDIUM PRIORITY':
        return 'text-yellow-600 font-semibold';
      case 'LOW PRIORITY':
        return 'text-green-600 font-semibold';
      default:
        return 'text-green-600 font-semibold';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'HIGH PRIORITY':
        return <AlertTriangle size={14} />;
      case 'MEDIUM PRIORITY':
        return <Clock size={14} />;
      case 'LOW PRIORITY':
        return <CheckCircle size={14} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-green-200 text-black-600 font-semibold';
      case 'In- Progress':
        return 'bg-yellow-200 text-black-600 font-semibold';
      case 'resolved':
        return 'bg-blue-200 text-black-600 font-semibold';
      default:
        return 'bg-green-200 text-black-600 font-semibold';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Customer Tickets</h2>
        <p className="text-gray-600 mt-1">Click on a ticket to add it to your task list</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => onTicketClick(ticket)}
              className="p-5 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-200 cursor-pointer bg-white hover:bg-gray-50"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 flex-1 pr-2">
                  {ticket.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                  <span className="capitalize">{ticket.status}</span>
                </span>

              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {ticket.description}
              </p>


              <div className="flex justify-between items-start">
                {/* Left side: Priority above, ID below */}
                <div className="flex flex-col justify-between space-y-2">
                  <span
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}
                  >
                    {getPriorityIcon(ticket.priority)}
                    <span className="capitalize">{ticket.priority}</span>
                  </span>

                  <span className="font-semibold text-gray-800">{ticket.id}</span>
                </div>

                {/* Right side: Customer above, Date below */}
                <div className="flex flex-col justify-between space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-1 font-semibold">
                    <User size={14} />
                    <span>{ticket.customer}</span>
                  </div>

                  <div className="flex items-center space-x-1 font-semibold">
                    <Calendar size={14} />
                    <span>{ticket.createdAt}</span>
                  </div>
                </div>
              </div>


              {/* <span className={`inline-flex items-center text-left space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
                {getPriorityIcon(ticket.priority)}
                <span className="capitalize text-left">{ticket.priority}</span>
              </span>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <User size={14} />
                  <span>{ticket.customer}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{ticket.createdAt}</span>
                  </div>


                </div>
              </div> */}
            </div>
          ))}
        </div>

        {tickets.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">All tickets resolved!</h3>
            <p className="text-gray-600">Great work! All customer tickets have been completed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerTickets;