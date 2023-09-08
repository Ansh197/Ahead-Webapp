import React from 'react';
import './Downloadbtn.css'

const DownloadButton = () => {
  // Replace 'your-download-link' with the actual URL you want the button to point to.
  const downloadLink = 'your-download-link';

  return (
    <>
    <a href={downloadLink} download>
      <button className="download-button">Download App</button>
    </a>
    </>
  );
};

export default DownloadButton;