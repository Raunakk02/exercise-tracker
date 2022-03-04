import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Exercise(props) {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={"/edit/" + props.exercise._id}>Edit</Link> | <button onClick={() => props.delEx(props.exercise._id)}>Delete</button>
            </td>
        </tr>
    );
}

function ExercisesList() {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/exercises")
            .then(res => {
                setExercises(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    function delExercise(id) {
        axios.delete("http://localhost:5000/exercises/" + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        setExercises((prev) => {
            return prev.filter((val) => val._id !== id);
        });
    }

    function getExercisesList() {
        return exercises.map(ex => {
            return <Exercise exercise={ex} delEx={delExercise} key={ex._id} />
        });
    }

    return (<div>
        <h3>Logged Exercises</h3>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {getExercisesList()}
            </tbody>
        </table>
    </div>);
}

export default ExercisesList;