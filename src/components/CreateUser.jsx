import { useState } from "react"

function CreateUser() {

    const [username, setUsername] = useState("");

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

        const user = {
            username
        };

        console.log(user);
        setUsername("");
    }

    return (<div>
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Username: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={username}
                    placeholder="Enter username"
                    onChange={onChangeUsername} />
            </div>
            <br />
            <button type="submit" className="btn btn-primary btn-large">Create User</button>
        </form>
    </div>);
}

export default CreateUser;