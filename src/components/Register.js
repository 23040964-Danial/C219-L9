import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="container">
        <h1>Thank You!</h1>
        <p>Your interest in the course has been registered.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Register Your Interest</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
