import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const TaskStatus = ({ inProgressTickets, resolvedTickets, onCompleteTask }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Task Status</h2>
        <p className="text-gray-600 mt-1">Manage your active tickets</p>
      </div>

      <div className="p-6 space-y-6">
        {/* In Progress Section */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3 flex items-center space-x-2">
            <Clock size={18} className="text-purple-600" />
            <span>In Progress ({inProgressTickets.length})</span>
          </h3>
          
          <div className="space-y-3">
            {inProgressTickets.map((ticket) => (
              <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg bg-purple-50">
                <h4 className="font-medium text-gray-800 text-sm mb-2">
                  {ticket.title}
                </h4>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {ticket.description}
                </p>
                <button
                  onClick={() => onCompleteTask(ticket.id)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  Complete
                </button>
              </div>
            ))}
            
            {inProgressTickets.length === 0 && (
              <div className="text-center py-8">
                <Clock size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500 text-sm">No tickets in progress</p>
                <p className="text-gray-400 text-xs">Click on a ticket to start working on it</p>
              </div>
            )}
          </div>
        </div>

        {/* Resolved Section */}
        <div>
          <h3 className="font-medium text-gray-800 mb-3 flex items-center space-x-2">
            <CheckCircle size={18} className="text-green-600" />
            <span>Resolved Task</span>
          </h3>
          
          <div className="space-y-3">
            {resolvedTickets.length > 0 ? (
              resolvedTickets.slice(-3).map((ticket) => (
                <div key={ticket.id} className="p-3 border border-green-200 rounded-lg bg-green-50">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">
                    {ticket.title}
                  </h4>
                  <p className="text-green-600 text-xs">✓ Completed</p>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <CheckCircle size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500 text-sm">No resolved tasks yet</p>
              </div>
            )}
            
            {resolvedTickets.length > 3 && (
              <p className="text-xs text-gray-500 text-center">
                ...and {resolvedTickets.length - 3} more completed tickets
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;