import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, TextField } from '@mui/material';

const App = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your_api_endpoint');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async () => {
    try {
        const response = await axios.post('your_api_endpoint', { name: newItem }); // فرض کنید API نیاز به ارسال name دارد
        setData([...data, response.data]);
        setOpenModal(false);
      setOpenModal(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <h1>Data Display</h1>
      <div>
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <Button onClick={() => setOpenModal(true)}>Add Item</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <h2>Add New Item</h2>
          <TextField
            label="New Item"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;