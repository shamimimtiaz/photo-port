import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;






// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

// function ContactForm() {

//   const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  
//   const [errorMessage, setErrorMessage] = useState('');  
//   const { name, email, message } = formState;

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
//   }
// }
  
  
//   function handleChange(e) {
    
// if (e.target.name === 'email') {
//     const isValid = validateEmail(e.target.value);
//     console.log(isValid);
//   // isValid conditional statement
//   if(!isValid) {
//       setErrorMessage('Your email is invalid');
//   } else {
//       setErrorMessage(''); // if the email entry is valid
//     }
// } else { 
//     if(!e.target.value.lenght) {
//         setErrorMessage(`${e.target.name} is required`);
//     } else {
//         setErrorMessage('');
//         }
//      }
     
// }; 
// if (!errorMessage) {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   }

// //console.log('errorMessage', errorMessage)
// //   //console.log(formState);




// return (
//  <section>
//     <h1>Contact me</h1>
//     <form id="contact-form" onSubmit={handleSubmit}>
//     {/* name input
//         email input
//         message text area 
//         we need to replace the for attribute in the <label> element to htmlFor, 
//         */}

//     <div>  
//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
//     </div>
//     <div>
//         <label htmlFor="email">Email address:</label>
//         <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
//     </div>
//     <div>
//         <label htmlFor="message">Message:</label>
//         <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
//     </div>
//     {errorMessage && ( //same like if(errorMessage), && used as a short circuit
//     <div>
//         <p className="error-text">{errorMessage}</p>
//     </div>
//     )}
//     <button type="submit">Submit</button>
//    </form>
// </section>
//       );
//     }
//     export default ContactForm;

//     //The onBlur (instead onChange)attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input.