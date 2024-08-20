import React, { useState, useEffect } from 'react';
import './Notice.css';

function Notice() {
  const [noticeText, setNoticeText] = useState('');
  const [showTextarea, setShowTextarea] = useState(false);
  const [email, setEmail] = useState('');
  const authorizedEmail = 'nitusingh34943@gmail.com'; // Replace with your authorized email address

  useEffect(() => {
    const storedNotice = localStorage.getItem('noticeText');
    if (storedNotice) {
      setNoticeText(storedNotice);
    }
  }, []);

  const handleNoticeChange = (event) => {
    setNoticeText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === authorizedEmail) {
      localStorage.setItem('noticeText', noticeText);
      setShowTextarea(false);
    } else {
      alert("You are not authorized to write notice.");
    }
  };

  const toggleTextarea = () => {
    setShowTextarea(!showTextarea);
    setEmail(''); // Reset email when opening the textarea
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className='Notice-heading'>
        <h2>Notice Board<br/> <hr /> <br/> <br/></h2>
        {showTextarea && (
          <div className="centered-textarea">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Your Email"
              />
              <textarea className='mytextarea'
                name="notice"
                value={noticeText}
                onChange={handleNoticeChange}
                placeholder="Write your notice here..."
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={toggleTextarea}>Close</button>
            </form>
          </div>
        )}
       
        {!showTextarea && (
          
         <center><button className='Addnotice' onClick={toggleTextarea}>Add Notice</button></center>
          
        )}
       
      </div>
      <div className='Notice-Content'>
        {!showTextarea && noticeText && (
          <h2>{noticeText}</h2>
        )}
      </div>
    </>
  );
}

export default Notice;
