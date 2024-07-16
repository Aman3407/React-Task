import React, { useState, useContext, useEffect } from "react";
import { API_ENDPOINT } from "../constants/constants";
import { useNavigate } from "react-router-dom";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);    // for authentication
  const getEmployees = async () => {
    try {
      var finalURL;
      if (searchId == "") {
        finalURL = `${API_ENDPOINT}`;
      } else finalURL = `${API_ENDPOINT}/{searchId}`;   // get employees by searchId
      const response = await fetch(finalURL);
      const data = await response.json();
        setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    const finalURL = `${API_ENDPOINT}/${id}`;
    try {
      const response = await fetch(finalURL, {
        method: "DELETE"
      });
      // navigate('/');
    } catch (error) {
      console.log(error);
    }
    setShowDeleteModal(false);
  };

  const createOrUpdateNewEmployee = async (id,formData) => {
    let method, finalURL;
    if (showCreateModal) {          // for create employee
      method = "POST";
      finalURL = `${API_ENDPOINT}`;
    } else {                        // for update employee
      method = "PUT";
      finalURL = `${API_ENDPOINT}/${id}`;
    }
    try {
      const response = await fetch(finalURL, {
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(showCreateModal)
        await getEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const getEmployeeById = async (id, setData) => {
    try {
      const finalURL = `${API_ENDPOINT}/${id}`; // get employees by searchId
      const response = await fetch(finalURL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if(token) {
      console.log('WORKING',token);
      setIsAuthenticated(true);
    }
    getEmployees();
    setLoading(false);
  }, [searchId]);

  return (
    <AppContext.Provider
      value={{
        loading,
        list,
        searchId,
        setSearchId,
        setLoading,
        showCreateModal,
        setShowCreateModal,
        setIsAuthenticated,
        showUpdateModal,
        setShowUpdateModal,
        showDeleteModal,
        isAuthenticated,
        setShowDeleteModal,
        getEmployees,
        deleteEmployee,
        createOrUpdateNewEmployee,
        getEmployeeById,
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
