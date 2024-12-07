import React, { useState, useEffect } from 'react';
import servicesApi from '../services_api';  // Correct import for your API service

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [newServiceName, setNewServiceName] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesApi.get('/services');
        setServices(response.data);
      } catch (error) {
        console.error("There was an error fetching the services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleAddService = async () => {
    if (newServiceName) {
      try {
        const response = await servicesApi.post('/services', { name: newServiceName });
        setServices([...services, response.data]);
        setNewServiceName('');
      } catch (error) {
        console.error("There was an error adding the service:", error);
      }
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await servicesApi.delete(`/services/${id}`);
      setServices(services.filter(service => service.id !== id));
    } catch (error) {
      console.error("There was an error deleting the service:", error);
    }
  };

  const handleEditService = async (id, newName) => {
    try {
      const response = await servicesApi.put(`/services/${id}`, { name: newName });
      setServices(services.map(service => service.id === id ? response.data : service));
    } catch (error) {
      console.error("There was an error updating the service:", error);
    }
  };

  return (
    <div>
      <h1>Service Management</h1>
      <input
        type="text"
        value={newServiceName}
        onChange={(e) => setNewServiceName(e.target.value)}
        placeholder="Enter new service name"
      />
      <button onClick={handleAddService}>Add Service</button>

      <h2>Services:</h2>
      <table>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>
                <button onClick={() => handleEditService(service.id, prompt("Enter new name:", service.name))}>Edit</button> |
                <button onClick={() => handleDeleteService(service.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceManagement;
