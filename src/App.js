import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [customers1, setCustomers1] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchCustomers1();
  }, []);

  const fetchCustomers1 = async () => {
    const response = await fetch('/api/customers1');
    const data = await response.json();
    setCustomers1(data);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by Name or Location"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
      </select>
      <center><table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
         
        </thead>
        <tbody>
          {customers1.map((customer) => (
            <tr key={customer.sno}>
              <td>{customer.sno}</td>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{new Date(customer.created_at).toLocaleDateString()}</td>
              <td>{new Date(customer.created_at).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;



