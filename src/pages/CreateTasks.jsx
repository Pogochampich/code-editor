import React from "react";

const CreateTasks = () => {
    const [title, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [result, setResult] = React.useState('');

   const createSubmit = (e) => {
        e.preventDefault();
        api.login(title, result, description);
      };
    
    return (
        <section className="createForm">
            <div className="createForm__container">
                <h1 className="createForm__h1"> Create Task</h1>
                    <div className="createForm__block">
                        <img src="../src/assets/images/createTask.png" alt="createTask" className="createForm__image"/>
                        <form onSubmit={createSubmit} className="createForm__form">
                            <input type="text" className="createForm__title" id="title" placeholder="Title" maxLength={150} required/>
                            <textarea type="text" className="createForm__description" placeholder="Description" id="description" rows={4} cols={40} maxLength={270} required/>
                            <textarea type="text" className="createForm__description" placeholder="Right answer" id="result" rows={4} cols={40} maxLength={270} required/>

                            <button className="createForm__Button">Upload task</button>
                        </form>
                    </div>
            </div>
        </section>
    )
  }
  
  export default CreateTasks