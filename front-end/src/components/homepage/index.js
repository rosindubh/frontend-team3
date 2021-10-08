import React from 'react';
 
function Homepage(history) {
 
  // handle click event of logout button
  const handleLogout = () => {    
  }
 
  return (
    <div>
     <h1>Homepage</h1><br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Homepage;