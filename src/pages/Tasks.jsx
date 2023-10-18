import { useState } from 'react';


const Tasks = () => {

    const [taskname, setTaskName] = useState('Task');
    const [desc, setDesc] = useState('Description');
    const [btnhref, setBtnHref] = useState('');

    const handleTaskName = (e) => {
		setTaskName(e.target.value);
	};

    const handleDesc = (e) => {
		setDesc(e.target.value);
	};

    const handleBtnHref = (e) => {
		setBtnHref(e.target.value);
	};

    return(
        <div className="tasks-container">

            <div className="tasks-top">
                <h1>You can create a new task</h1>
                <a href="/create" className="tasks-top-button"><span className="tasks-top-button-text">Create task</span></a>
            </div>

            <div className="tasks-main">

                    
                
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th >Description</th>
                            <th >Connect in the room</th>
                        </tr>
                    </thead>

                    <tr>
                        <th>{taskname}</th>
                        <th>{desc}</th>
                        <th><a href={btnhref}><button className="tasks-main-button">Connect</button></a></th>
                    </tr>

                    {/* <tr>
                        <th>{taskname}</th>
                        <th>{desc}</th>
                        <th><a href=""><button className="tasks-main-button">Connect</button></a></th>
                    </tr> */}
                </table>

                

            </div>

        </div>
    )
}

export default Tasks