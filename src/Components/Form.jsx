import React from "react";
const Form = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    errors: {},
  });

  const validate = (state) => {
    const errors = {};
    if (!state.name) {
      errors.name = "Name is required";
    } else if (state.name.length <= 5 ) {
      errors.name = "Name must be at least 6 characters";
    }
    if (!state.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.email)) {
      errors.email = "Invalid email address";
    }

    setState({ ...state, errors });

    return Object.keys(errors).length > 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(state);

    if (!errors) {
      console.log(state);
      alert(`Gracias ${state.name}, te contactaremos cuanto antes vía email.`);
      setState({ name: "", email: "", errors: {} });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Write your name:</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          id="name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Write your email:</label>
        <input
          type="email"
          name="email"
          placeholder="p9qXH@example.com"
          id="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      {Object.keys(state.errors).length > 0 && (
        <div className="errors">
          <p>Por favor verifique su información nuevamente: </p>
          {Object.entries(state.errors).map(([key, value]) => (
            <p key={key}>😥 {value}</p>
          ))}
        </div>
      )}
      <button type="submit" className="submit-button">
        🎯 Send
      </button>
    </form>
  );
};

export default Form;
