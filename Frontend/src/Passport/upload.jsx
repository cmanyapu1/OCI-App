import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';


function Uploadpic() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  if (selectedFile) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  } else {
    setPreview(null);
  }
};

const extractText = async () => {
  if (!file) {
    setError('Please select an image file.');
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const result = await Tesseract.recognize(file, 'eng');
    setExtractedText(result.data.text);
  } catch (err) {
    setError('Text extraction failed. Please try again.');
    console.error('Extraction error:', err);
  } finally {
    setLoading(false);
  }
};

const handleUpload = async () => {
  if (!file) {
    setError('Please select a file to upload.');
    return;
  }

  setLoading(true);
  setError(null);

  const formData = new FormData();
  formData.append('photo', file);
  formData.append('extractedText', extractedText);

  try {
    const response = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Upload successful:', response.data);
    navigate('/uploadform');
  } catch (err) {
    setError('Upload failed. Please try again.');
    console.error('Upload error:', err);
  } finally {
    setLoading(false);
  }
};


return (
  <div>
    <input type="file" onChange={handleFileChange} accept="image/*" />
    
    {preview && (
      <div>
        <h3>Preview:</h3>
        <img src={preview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
      </div>
    )}
    
    {error && <p style={{ color: 'red' }}>{error}</p>}
    
    <button onClick={extractText} disabled={loading || !file}>
      Extract Text
    </button>
    
    <button onClick={handleUpload} disabled={loading || !file}>
      {loading ? 'Uploading...' : 'Upload'}
    </button>
    
    {loading && <p>Processing, please wait...</p>}

    {extractedText && (
      <div>
        <h3>Extracted Text:</h3>
        <pre>{extractedText}</pre>
      </div>
    )}
  </div>
);


export default Uploadpic;