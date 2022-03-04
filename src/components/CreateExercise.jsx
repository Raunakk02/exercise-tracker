import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise(props) {

    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(["test user"]);
        setUsername("test user");
    }, []);

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }
    function onChangeDescription(e) {
        setDescription(e.target.value);
    }
    function onChangeDuration(e) {
        setDuration(Number(e.target.value));
    }
    function onChangeDate(date) {
        setDate(date);
    }

    function onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date
        };

        console.log(exercise);

        // window.location = "/";
    }

    return (<div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit} className="form-horizontal">
            <div className="form-group">
                <label>Username: </label>
                <select
                    ref={useRef("userInput")}
                    required
                    className="form-control"
                    value={username}
                    onChange={onChangeUsername}>
                    {users.map((user, i) => (
                        <option
                            key={i}
                            value={user}>
                            {user}
                        </option>))
                    }
                </select>
            </div>
            <div className="form-group">
                <label>Description: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={description}
                    onChange={onChangeDescription} />
            </div>
            <div className="form-group">
                <label>Duration: </label>
                <input
                    type="number"
                    required
                    className="form-control"
                    value={duration}
                    onChange={onChangeDuration} />
            </div>
            <div className="form-group">
                <label>Date: </label>
                <ReactDatePicker
                    selected={date}
                    onChange={onChangeDate}
                />
            </div>
            <br />
            <div className="form-group">
                <button type="submit" className="btn btn-large btn-primary">Create Exercise Log</button>
            </div>
        </form>
    </div>);
}

export default CreateExercise;