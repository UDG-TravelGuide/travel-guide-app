import React, { createContext, useState } from 'react';

const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const data = { token, setToken };
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
