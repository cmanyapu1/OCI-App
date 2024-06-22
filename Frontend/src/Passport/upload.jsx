import React, { useState } from 'react';
import axios from 'axios';

function Uploadpic() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('photo', file);

    axios.post('/upload', formData).then((response) => {
      // Handle the server response
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Uploadpic;
