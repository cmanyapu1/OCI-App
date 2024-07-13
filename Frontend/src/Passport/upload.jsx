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


const extractAndNavigate = async () => {
  if (!file) {
    setError('Please select an image file.');
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const result = await Tesseract.recognize(file, 'eng');
    const extractedText = result.data.text;
    navigate('/uploadform', { state: { extractedText, imagePreview: preview } });
  } catch (err) {
    setError('Text extraction failed. Please try again.');
    console.error('Extraction error:', err);
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
    
    <button onClick={extractAndNavigate} disabled={loading || !file}>
      {loading ? 'Extracting...' : 'Extract Text and Edit'}
    </button>
    
    {loading && <p>Extracting text, please wait...</p>}
  </div>
);
}

    
export default Uploadpic;