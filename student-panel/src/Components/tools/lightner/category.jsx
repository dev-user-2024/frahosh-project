import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'; // Import required components from React Router v6
import axios from 'axios';
import styles from './category.module.css';

const DivDetails = () => {
  const params = useParams();
  return (
    <div>
      {/* This is the dynamic div page */}
      <h2>Div Details</h2>
      {/* You can use the params.index to display specific div information */}
    </div>
  );
};

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [divContents, setDivContents] = useState([]);
  const [showNewDiv, setShowNewDiv] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleOpen = () => {
    setOpen(true);
    setModalOpened(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalOpened(false);
  };

  const handleSave = async () => {
    setShowNewDiv(true);
    setDivContents([...divContents, userInput]);
    handleClose();

    try {
      await axios.post('https://your-api-url.com', { divContents }); // Send divContents to the server
      console.log('Data sent successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


  const handleClearDiv = (index) => {
    const updatedDivContents = divContents.filter((_, i) => i !== index);
    setDivContents(updatedDivContents);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleDivClick = (index) => {
    navigate(`./group/${index}`); // Navigate to a specific div page
  };

  const modalStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <button className={styles.newbutton} variant="contained" onClick={handleOpen}>
        +
      </button>
      <Routes>
        <Route path="/group/:index" element={<DivDetails />} />
      </Routes>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="modal-title">Modal Title</h2>
          <TextField
            label="User Input"
            variant="outlined"
            value={userInput}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
      {showNewDiv && (
        <div>
          <p>Total Divs Created: {divContents.length}</p>
          {divContents.map((content, index) => (
            <div key={index}>
              <p>User input {index + 1}: {content}</p>
              <Button variant="contained" onClick={() => handleClearDiv(index)}>
                Clear This Div
              </Button>
              <Button variant="contained" onClick={() => handleDivClick(index)}>
                View This Div
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
