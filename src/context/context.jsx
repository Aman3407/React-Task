import React, { useState, useContext, useEffect } from "react";
import { API_ENDPOINT } from "../constants/constants";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getEmployees = async () => {
    console.log("Getting Employees");
    try {
      var finalURL;
      if (searchId == "") {
        finalURL = `${API_ENDPOINT}`;
      } else finalURL = `${API_ENDPOINT}/{searchId}`; // get employees by searchId
      const response = await fetch(finalURL);
      const data = await response.json();
      if (response.ok) {
        setError(null);
        setList(data);
        console.log(data);
      } else setError(list.Error);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if(token) setIsAuthenticated(true);
    getEmployees();
    setLoading(false);
  }, [searchId]);

  return (
    <AppContext.Provider
      value={{
        loading,
        list,
        searchId,
        error,
        setError,
        setSearchId,
        setLoading,
        showCreateModal,
        setShowCreateModal,
        showUpdateModal,
        setShowUpdateModal,
        showDeleteModal,
        setShowDeleteModal,
        getEmployees,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
