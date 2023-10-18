const CreateTasks = () => {
   /*  const [title, setEmail] = React.useState('');
    const [result, setResult] = React.useState('');
    const [description, setDescription] = React.useState('');

   const createSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        api.login(email, password);
      };*/
    
    return (
        <section className="createForm">
            <div className="createForm__container">
                <h1 className="createForm__h1"> Create Task</h1>
                    <div className="createForm__block">
                        <img src="../src/assets/images/createTask.png" alt=""  className="createForm__image"/>
                        <form action="" className="createForm__form">
                            <input type="text" className="createForm__title" placeholder="Title"/>
                            <textarea type="text" className="createForm__description" placeholder="Description" rows={4} cols={40}/>
                            <textarea type="text" className="createForm__Form" placeholder="Right answer" rows={4} cols={40}/>

                            <button className="createForm__Button">Upload tasks</button>
                        </form>
                    </div>
            </div>

        </section>
    )
  }
  
  export default CreateTasks