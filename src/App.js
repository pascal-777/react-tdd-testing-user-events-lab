import { useState } from "react";

function App() {

  const [formSubmit, setFormSubmit] = useState(false);

  function stupidSubmit(e) {
    e.preventDefault();
    setFormSubmit(true);
    //then change it back to false
    //setFormSubmit(!formSubmit);
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <form title='submitalForm' id='submital-form' onSubmit={(e) => stupidSubmit(e)}>

        <input type='text' placeholder='name' aria-describedby="name" />
        <input type='text' placeholder='email' aria-describedby="email" />

        <input type='checkbox' placeholder='apple' />
        <input type='checkbox' placeholder='pineapple' />
        <input type='checkbox' placeholder='pen' />

        <input title='submital-button' type='submit' value='SUBMIT' />

      </form>

      <h2 title='form_message'>{formSubmit ? `this form has been submitted: ${formSubmit}` : `this form has been submitted: false`}</h2>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;