import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: ""
  })

  const inputs = [
    {id: 1, name: "name", type: "text", placeholder: "Name",errorMessage: "Name should be 5-20 characters & should not include any special characters", label: "Name", required: true, pattern: "^[A-Za-z ]{5,20}+$"},
    {id: 2, name: "email", type: "email", placeholder: "Email",errorMessage: "It should be a valid email address", label: "Email", required: true},
    {id: 3, name: "mobile", type: "tel", placeholder: "Mobile",errorMessage: "Please Enter a valid mobile Number", label: "Mobile", required: true},
    {id: 4, name: "country", type: "text", placeholder: "Country",errorMessage: "Please Enter your Country name", label: "Country", required: true},
    {id: 5, name: "city", type: "text", placeholder: "City",errorMessage: "Please Enter your City name", label: "City", required: true},
    {id: 6, name: "state", type: "text", placeholder: "State",errorMessage: "Please Enter your State name", label: "State", required: true},
    {id: 7, name: "message", type: "text", placeholder: "Message",errorMessage: "Please write your message", label: "Message", required: true},
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  console.log(values)
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        {inputs.map(input => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
