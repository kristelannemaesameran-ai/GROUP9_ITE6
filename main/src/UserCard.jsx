import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{user.name}</h3>
        <span className={`badge ${user.status.toLowerCase()}`}>
          {user.status}
        </span>
      </div>
      <div className="card-body">
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>ID:</strong> #00{user.id}</p>
      </div>
    </div>
  );
};

export default UserCard;





