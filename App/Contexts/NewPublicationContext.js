import React, { createContext, useState } from 'react';

const NewPublicationContext = createContext();
const NewPublicationProvider = ({ children }) => {
    const [publication, setPublication] = useState({
        title: '',
        description: '',
        countryAlphaCode: '',
        route: {},
        contents: [],
    });

    const data = { publication, setPublication };
    return (
        <NewPublicationContext.Provider value={data}>
            {children}
        </NewPublicationContext.Provider>
    );
};

export { NewPublicationProvider };
export default NewPublicationContext;
