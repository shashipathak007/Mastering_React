// Import React and necessary hooks
import React, { useEffect, useState } from 'react';

const Users = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  
  // State to track if the data is still loading
  const [loading, setLoading] = useState(true);
  
  // State to track if there was an error fetching data
  const [error, setError] = useState(null);

  // useEffect runs side effects after the component mounts
  useEffect(() => {
    // fetch() asks the API for user data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // Check if the response status is OK (200–299)
        if (!res.ok) {
          // If not, throw an error to jump to catch
          throw new Error("Something is wrong");
        }
        // Convert the response body into JavaScript object/array
        return res.json();
      })
      .then((data) => {   
        // Received the actual user data
        setUsers(data);    // Save the data into 'users' state
        setLoading(false); // Stop showing loading spinner
      })
      .catch((err) => {   
        // If any error occurs (network/API/error thrown)
        setError(err.message); // Save the error message in state
        setLoading(false);    // Stop showing loading spinner
      });
  }, []); // Empty array = run only once after component mounts

  // If still loading, show a loading message
  if (loading) return <h2>Loading...</h2>;
  
  // If there was an error, display it
  if (error) return <h2>Error: {error}</h2>;

  // Render the list of users
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        // Loop through users and display each name
        // key={user.id} is required by React for list items
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

// Export the component so it can be used in other files
export default Users;
