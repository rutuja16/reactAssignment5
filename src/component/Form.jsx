import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { StudArr } from "./context";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Form = (props) => {
  
  const [data, setData] = React.useContext(StudArr);
  const {btn}=props;
  const [details, setDetails] = React.useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    data.forEach((row) => {
      if (row.id === id) {
        setDetails({
          name: row.name,
          age: row.age,
          course: row.course,
          batch: row.batch,
        });
      }
    });
  }, [data, id]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      let newData = {
        ...details,
        id: Math.floor(Math.random() * 100000).toString(),
      };
      setData([...data, newData]);
    } else {
      setData((std) =>
        std.map((student) =>
          student.id === id
            ? {
                id: id,
                name: details.name,
                age: details.age,
                course: details.course,
                batch: details.batch,
              }
            : student
        )
      );
    }
    navigate("/student");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Name"
            type="text"
            id="name"
            name="name"
            className="input"
            value={details.name}
            onChange={handleChange}
          /><span className="space"> </span>
          <TextField
            required
            variant="outlined"
            label="Age"
            type="number"
            id="age"
            name="age"
            className="input"
            value={details.age}
            onChange={handleChange}
          />
        </div><br/><br/>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Course"
            type="text"
            id="course"
            name="course"
            className="input"
            value={details.course}
            onChange={handleChange}
          /><span className="space"> </span>
          <TextField
            required
            variant="outlined"
            label="Batch"
            type="text"
            id="batch"
            name="batch"
            className="input"
            value={details.batch}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          {
            <Link to="/student">
              <button className="cancel-btn">Cancel</button>
            </Link>
          }

          <button type="submit" className="submit-btn">
            {btn}
          </button>
        </div>
      </form>
    </Box>
  );
};

export default Form;