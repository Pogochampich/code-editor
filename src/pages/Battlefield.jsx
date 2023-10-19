import React, { useRef, useEffect } from "react";
import Prism from 'prismjs';
import CodeBlock from "../components/CodeBlock.jsx";

const Battlefield = () => {
   const textareaRef = useRef(null);

   const handleInputChange = () => {
   const code = textareaRef.current?.value;
   const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');
      textareaRef.current.innerText = highlightedCode;
   };

   useEffect(() => {
      Prism.highlightElement(textareaRef.current);
   }, []);

   const [code, setCode] = React.useState('');
   const createSubmit = (e) => {
        e.preventDefault();
        api.login(code);
      };

  return (
    <div>
      <section className="battle__container">
         <div className="battle__block">
            <h2 className="battle__title" id="taskName">Task</h2>
            <p className="battle__text" id="taskText">sdfsdf</p>
         </div>

         <div className="playerOne">
            <form className="playerOne__form" onSubmit={createSubmit}>
               <h3 className="playerOne__title">Player 1</h3>
               <button className="playerOne__btn">Check the task</button>
               <textarea type="text" ref={textareaRef} onInput={handleInputChange} className="playerOne__text" placeholder="Write your code..." id="code" rows={4} cols={40} maxLength={750} required/>
               <CodeBlock language="javascript" code={textareaRef.current?.value ?? ""} />
            </form>
            <div>
            </div>
         </div>

         <div className="playerTwo">
            <form className="playerOne__form" onSubmit={createSubmit}>
               <h3 className="playerOne__title">Player 2</h3>
               <button className="playerOne__btn">Check the task</button>
               <textarea type="text" ref={textareaRef} onInput={handleInputChange} className="playerOne__text2" placeholder="Write your code..." id="code" rows={4} cols={40} maxLength={750} required/>
               <CodeBlock language="javascript" code={textareaRef.current?.value ?? ""} />
            </form>
            <div>
            </div>
         </div>
      </section>
      
    </div>
  );
};

export default Battlefield;