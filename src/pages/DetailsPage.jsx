import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import CreateOrUpdateEmployee from "../component/CreateOrUpdateEmployee";
import { API_ENDPOINT } from "../constants/constants";
import { useParams } from "react-router-dom";
import DeleteEmployeeModal from "../component/DeleteEmployee";

const Details = () => {
  const { setShowUpdateModal, setError, setShowDeleteModal } = useGlobalContext();
  const {id} = useParams();
  const [data, setData] = useState({
    id: 1,
    name: "John Smith",
    dateOfJoining: null,
    isActive: false,
  });

  const getEmployeeById = async () => {
    console.log("Getting Employees");
    try {
      const finalURL = `${API_ENDPOINT}/${id}`; // get employees by searchId
      const response = await fetch(finalURL);
      const data = await response.json();
      if (response.ok) {
        setError(null);
        setData(data);
        console.log(data);
      } else setError(list.Error);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getEmployeeById();
  },[]);

  return (
    <div className="w-screen  ">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-lg w-full bg-white shadow-lg overflow-hidden rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Employee Details
            </h3>
          </div>
          <div className="px-6 py-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              <dt className="text-sm font-medium text-gray-500">ID</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{data.id}</dd>
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 capitalize">{data.name}</dd>
              <dt className="text-sm font-medium text-gray-500">
                Date of Joining
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                {data.dateOfJoining || "N/A"}
              </dd>
              <dt className="text-sm font-medium text-gray-500">IsActive</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                {data.isActive ? "Yes" : "No"}
              </dd>
            </dl>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setShowUpdateModal(true)}
              >
                Update
              </button>
              <CreateOrUpdateEmployee />
              <button
                className="px-4 py-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </button>
              <DeleteEmployeeModal/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
