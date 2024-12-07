// Example usage inside a React component

import React, { useEffect } from 'react';
import servicesApi from '../services_api'; // Correct import

const UserDashboard = () => {
  useEffect(() => {
    // Calling the 'get' function from servicesApi
    servicesApi.get()
      .then(response => {
        console.log(response.data); // Handle the API response
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {/* Your component JSX */}
    </div>
  );
};

export default UserDashboard;
