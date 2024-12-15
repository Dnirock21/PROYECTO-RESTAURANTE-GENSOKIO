import React from 'react';

interface UserProps {
  username: string; // Corrige también el nombre de la propiedad aquí
  email: string;
}

const UserCard: React.FC<UserProps> = ({ username, email }) => {
  return (
    <div className="user-card">
      <h3>{username}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
