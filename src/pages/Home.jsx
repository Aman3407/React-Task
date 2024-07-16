import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import CreateOrUpdateEmployee from "../component/CreateOrUpdateEmployee";
import { EmployeeCard } from "../component/EmployeeCard";
import Navbar from "../component/Navbar";

const Home = () => {
  const [searchId, setSearchId] = useState(0);
  const { list, setShowCreateModal, getEmployees} = useGlobalContext();
  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const filteredUsers = list.filter((user) => {
    console.log(user);
    return user.id == searchId || searchId == 0;
  });

  useEffect(()=>{
    getEmployees();
  },[])

  return (
    <>
    <Navbar/>
    <div className="p-8 m-8">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setShowCreateModal(true)}
        >
          Create +
        </button>
        <CreateOrUpdateEmployee />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filteredUsers.map((user) => (
          <EmployeeCard key={user.id} id={user.id} name={user.name} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;