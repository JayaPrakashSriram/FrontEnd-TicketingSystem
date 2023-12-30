import { useState } from 'react';

export function MyForm() {
  // State to store input values
  const [formData, setFormData] = useState({
    Type: '',
    Title: '',
    Discription: '',
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // You can perform further actions here, such as sending data to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="Type" value={formData.Type} onChange={handleInputChange}>
            <option style={{display: "none"}}></option>
            <option value="Techinical">Techinical</option>
            <option value="NonTechinical">NonTechinical</option>
          </select>
        </label>
        <br/>
        <label>
          Title:
          <input type="text" name="Title" value={formData.Title} onChange={handleInputChange} />
        </label>
        <br/>
        
  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}