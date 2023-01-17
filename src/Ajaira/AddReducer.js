import { useReducer } from "react";

function AddReducer({ employees, setEmployees, setIsAdding }) {
  const formReducer = (formState, action) => {
    switch (action.type) {
      case "handle change":
        return {
          ...formState,
          [action.field]: action.payload,
        };

      case "submit":
        {
          const nextEmployees = employees;
          // console.log(nextEmployees);
          nextEmployees.push(formState);
          console.log("ami choltesi");
          setEmployees(nextEmployees);
          setIsAdding(false);
        }
        break;
      default:
    }
  };

  const [formState, dispatch] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });

  // console.log("Hello ami add");

  const handleChange = (e) => {
    dispatch({
      type: "handle change",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "submit",
    });
  };

  // console.log(formState);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formState?.firstName}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formState?.lastName}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="abc@example.com"
          value={formState?.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="salary">Salary:</label>
        <input
          name="salary"
          type="text"
          placeholder="Salary"
          value={formState?.salary}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="date">Joining Date:</label>
        <input
          name="date"
          type="text"
          placeholder="Joining Date"
          value={formState?.date}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="text-center">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReducer;
