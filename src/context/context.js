import { createContext, useState } from "react";

export const SearchContext = createContext(null);

function Context({ children }) {
    const [searchResults, setSearchResults] = useState("");

    return (
        <SearchContext.Provider value={{ searchResults, setSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
}

export default Context;