import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

export const AppContext = createContext();

export default function App() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resultBooks, setResultBooks] = useState(null);

  // const baseAPIurl = "https://gutendex.com";

  return (
    <AppContext.Provider
      value={{
        categories,
        loading,
        error,
        resultBooks,
        setResultBooks,
        setError,
        setLoading,
      }}
    >
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </AppContext.Provider>
  );
}
