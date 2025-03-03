import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            name: "INDHIRASANTHINI",
            email: "indhirasanthini@gmail.com",
            phoneno:1234567890,
            password: "sandy@003",
            amount: 1000
        }
    ]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;