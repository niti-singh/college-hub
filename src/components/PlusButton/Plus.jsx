import React, { useState, useEffect } from 'react';
import "./Plus.css"
import {RiDeleteBin6Fill} from 'react-icons/ri'

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState(' ');
  const [sem, setSem] = useState(' ');
  const [contact, setContact] = useState(' ');
  const [image, setImage] = useState(null);
  const [paid, setPaid] = useState(' ');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, branch, sem , contact, image, paid});
    setName('');
    setEmail('');
    setBranch(' ');
    setSem(' ');
    setContact(' ');
    setImage(null);
    setPaid(' ');
    
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    
  }

  

  return (
    <form onSubmit={handleSubmit}>
    
    <p>Enter Your Email</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Enter Subject Name</p>
      <input
        type="text"
        placeholder="Enter Sub name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Enter branch Name</p>
      <input
        type="text"
        placeholder="Enter Branch name..."
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <p>Enter Semester</p>
      <input
        type="text"
        placeholder="Enter Semester..."
        value={sem}
        onChange={(e) => setSem(e.target.value)}
      /> 
      <p>Do you want to sell it for paid or unpaid</p>
      <select name="cars" id="cars"  value ={paid} onChange={(e) => setPaid(e.target.value)}>
    <option value="choose">choose</option>
    <option value="Paid">Paid</option>
    <option value="Unpaid">Unpaid</option>
    
  </select>
     < p>Enter Your Contact Number</p>
      <input
        type="number"
        placeholder="Contact No..."
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
       <p>Upload Product Image</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      /> 
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

function Plus() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [deleteEmail, setDeleteEmail] = useState('');

  const addUser = (user) => {
    
      if (user.image) {
        const reader = new FileReader();
        reader.readAsDataURL(user.image);
        reader.onload = () => {
          const userDataWithImage = {
            ...user,
            image: reader.result, // Convert image to base64 data URL
          };
          setUsers([...users, userDataWithImage]);
          localStorage.setItem('users', JSON.stringify([...users, userDataWithImage]));
        };
      } else {
        setUsers([...users, user]);
        localStorage.setItem('users', JSON.stringify([...users, user]));
      }
  
}

  const deleteUser = (emailToDelete) => {
    const confirmedEmail = prompt("Enter your email to confirm deletion:");
    if (confirmedEmail === emailToDelete) {
      const updatedUsers = users.filter((user) => user.email !== emailToDelete);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    } else {
      alert("Email confirmation failed. Data not deleted.");
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  return (
    <>
    <p className='book_description'>"Welcome to our comprehensive study material platform where you will find a rich collection of resources<br/>
     to further your educational journey. Whether you are looking for paid or unpaid study material, this is your <br/>
    one-stop destination. Explore, learn and empower yourself with the knowledge you need, all in one place.”</p><hr className='book_hr'/>
   <div>
  {showForm && <UserForm addUser={addUser} />}
  <ul className="user-grid">
    {users.map((user, index) => (
      <li key={index} className="user-item">
        {user.image && (
          <img
            src={user.image}
            alt={`Product Image for ${user.name}`}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        )}
        <div className="user-details">
          <div>
            <span>Sub Name:</span>&nbsp;
            <span>{user.name}</span>
          </div>
          <div>
            <span>Branch :</span>&nbsp;
            <span>{user.branch}</span>
          </div>
          <div>
            <span>Sem:</span>&nbsp;
            <span>{user.sem}</span>
          </div>
          <div>
            <span>Price</span>&nbsp;
            <span>{user.paid}</span>
          </div>
          <div>
            <span>Contact me:</span>&nbsp;
            <span>{user.contact}</span>
          </div>
        </div>
        <button onClick={() => deleteUser(user.email)}><RiDeleteBin6Fill/></button>
      </li>
    ))}
  </ul>
  <div className='Plus_container'>
    <button onClick={() => setShowForm(true) } className='PlusButton'>+</button>
  </div>
</div>
</>

  );
}

export default Plus;
