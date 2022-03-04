import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

function EditExercise(props) {
    let { id } = useParams();

    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/exercises/" + id)
            .then(res => {
                if (res.status === 200) {
                    setUsername(res.data.username);
                    setDescription(res.data.description);
                    setDuration(Number(res.data.duration));
                    setDate(new Date(res.data.date));
                }
            })
            .catch(err => console.log(err));

        axios.get("http://localhost:5000/users")
            .then(res => {
                if (res.status === 200 && res.data.length > 0) {
                    setUsers(res.data.map(user => user.username));
                }
            });
    }, [id]);

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

        axios.post("http://localhost:5000/exercises/update/" + id, exercise)
            .then(res => console.log(res.data));

        // window.location = "/";
    }

    return (<div>
        <h3>Edit Exercise Log</h3>
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
                <button type="submit" className="btn btn-large btn-primary">Edit Exercise Log</button>
            </div>
        </form>
    </div>);
}

export default EditExercise;