import React from 'react';

const roleColors = {
  admin: 'bg-danger',
  user: 'bg-success',
  moderator: 'bg-warning'
};

const UserCard = ({ user }) => (
    <>
        <div className="card text-center shadow-sm h-100">
    <img
      src={user.image}
      alt={user.firstName}
      className="rounded-circle m-auto"
      style={{ width: '60px', height: '60px' }}
    />
    <div className="card-body p-2">
      <span className={`badge ${roleColors[user.role]} mb-2`}>
        {user.role}
      </span>
      <h5 className="card-title mb-1">{user.username}</h5>
      <p className="card-text mb-1">{user.email}</p>
      <p className="card-text mb-1">{user.phone}</p>
      <p className="card-text mb-0">{user.birthdate}</p>
    </div>
  </div>
    </>
);

export default UserCard;
