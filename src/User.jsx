import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function User() {
  const navigate = useNavigate();
  const userName = 'Sriram';

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
    <div className='wholeStru'>
      <div className='UserInterface'>
        <h1>User: {userName}</h1><br />

        <button className='MyQueryButton' onClick={() => navigate('/')}>My Queries</button>
          <br/>
        <button className='MyQueryButton' onClick={() => navigate('/User2')}>To User2</button>
        

        <h2 style={{ paddingLeft: "30px" }}>Create Query</h2>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label> Type: </label>
            <select name="Type" value={formData.Type} onChange={handleInputChange}>
              <option style={{display: "none"}}></option>
              <option value="Techinical">Techinical</option>
              <option value="NonTechinical">NonTechinical</option>
            </select>
            
            <label> Title: </label>
            <input type="text" name="Title" value={formData.Title} onChange={handleInputChange} />

            <label> Discription: </label>
            <input type="text" style={{ height: "80px" }} name="Discription" value={formData.Discription} onChange={handleInputChange} />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

