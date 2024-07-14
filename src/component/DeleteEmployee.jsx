import React from "react";
import { useGlobalContext } from "../context/context";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../constants/constants";

const DeleteEmployeeModal = () => {
  const { setError, showDeleteModal, setShowDeleteModal } = useGlobalContext();
  const { id } = useParams();

  const deleteHandler = async () => {
    const finalURL = `${API_ENDPOINT}/${id}`;
    try {
      const response = await fetch(finalURL, {
        method: "DELETE"
      });
      if (response.ok) {
        console.log(response);
        setError(null);
      } else setError(data.Error);
    } catch (error) {
      console.log(error);
    }
    setShowDeleteModal(false);
  };
  
  return (
    <>
      {showDeleteModal ?
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Delete Employee</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowDeleteModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Are you sure you want to delete this employee?
                </p>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 bg-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>
                <button
                  className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={()=> deleteHandler()}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </> : null}
    </>
  )
};

export default DeleteEmployeeModal;
