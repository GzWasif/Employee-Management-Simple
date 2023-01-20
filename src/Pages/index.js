import React, { useState } from "react";
import Swal from "sweetalert2";

import Add from "./Add";
import Edit from "./Edit";
import List from "./List";
import Header from "./Header";

import { employeesData } from "../Data/data";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  //   useEffect(() => {
  //     setEmployees(employeesData);
  //   }, []);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  return (
    <div className="container">
      {/* list*/}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* add */}
      {isAdding && (
        // <Add
        //   employees={employees}
        //   setEmployees={setEmployees}
        //   setIsAdding={setIsAdding}
        // />
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          selectedEmployee={selectedEmployee}
        />
      )}
    </div>
  );
}

export default Dashboard;
