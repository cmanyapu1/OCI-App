import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import InternalApi from '../../api';

function UploadForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [editedText, setEditedText] = useState(location.state?.extractedText || '');
  const imagePreview = location.state?.imagePreview;
  const {id} = useParams()

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await InternalApi.savePassport({
        extractedText: editedText,
        // Add other fields as needed
      });

      console.log('Submission successful:', response.data);
      navigate('/submission-success');
    } catch (err) {
      setError('Submission failed. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }

    // Navigate to the next step or back to the upload page
    navigate(`/passport/${id}`);
  };

  return (
    <div>
      <h2>Edit Extracted Text</h2>
      
      {imagePreview && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imagePreview} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      )}
      
      <textarea 
        value={editedText} 
        onChange={handleTextChange}
        rows={10}
        cols={50}
      />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UploadForm;

