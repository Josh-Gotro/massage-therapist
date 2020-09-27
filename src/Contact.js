// import React from 'react';
// import './CSS/Contact.css';
// import { useForm } from "react-hook-form";

// const Contact = () => {
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = values => console.log(values);


//     return (
//         <div id="hello" className="HiContainer">
//             <div>
//                 <h1>Contact <br />Me</h1>
//             </div>
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <label>
//                         <input id="name" name="name" type="text" placeholder="name" ref={register}></input><br></br>

//                         <input id="email" name="email" type="text" placeholder="email" ref={register({ required: true })}></input>
//                         {errors.name && <h2>Please enter an email address. </h2>}<br></br>

//                         <textarea id="comment" name="comment" placeholder="enter message" ref={register({ required: true })} ></textarea>
//                         {errors.name && <p>Please enter a message. </p>}<br></br>

//                         <button id="hiButton" type="submit" value="Submit" >send</button>
//                     </label>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Contact;

import React from 'react';
import './CSS/Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = values => console.log(values);


    return (
        <div className="ContactForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="name"
                    name="name" 
                    ref={
                        register({ 
                            required: "Please enter your name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
                /><br />
                {errors.name && errors.name.message}<br />

                <input
                    placeholder="email"
                    name="email"
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br />

                <textarea 
                    placeholder="comment"
                    name="comment" 
                    ref={
                        register({
                            required: true
                        })
                    } 
                /><br />
                {errors.comment && "oops, you forgot your message!"}<br />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Contact;