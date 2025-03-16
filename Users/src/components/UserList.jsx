import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { usersArr } from '../utils/users';

const UserList = () => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersArr);

  useEffect(() => {
    const filtered = usersArr.filter(user =>
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Users</h1>
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50"
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="col">
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <div className="text-center text-muted">No users found</div>
        )}
      </div>
    </div>
  );
};

export default UserList;
