import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'John Wall',
            image: 'https://lh3.googleusercontent.com/proxy/EOu2Wy9tdrfpLIAPlaVYl6I1IKOh6F11cTJ_hjNLa2ZOlXyAi1cWwndWL8-pMe5CMCEyXPIwFEgJGnUQFiKNHR4bDb9Rhb1qWMcAJaIrb-PSQSZHdySoIBehoGczG5lneJpomw',
            places: 3
        }
    ];


    return <UsersList items={USERS} />
}

export default Users;