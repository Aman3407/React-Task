import { useNavigate } from "react-router-dom";

export const EmployeeCard = ({ id, name }) => {
    const navigate = useNavigate();
    return (
      <div
        className="p-4 border border-gray-300 rounded shadow"
        onClick={() => {
          navigate(`/employee/${id}`);
          console.log("navigating");
        }}
      >
        <h3 className="text-lg font-bold">ID: {id}</h3>
        <p className="text-gray-700 capitalize">Name: {name}</p>
      </div>
    );
  };