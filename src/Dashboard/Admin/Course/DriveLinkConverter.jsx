import  { useState } from 'react';

const DriveLinkConverter = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [convertedUrl, setConvertedUrl] = useState('');

  const convertUrl = () => {
    try {
      // Extract the file ID from the input URL
      const match = inputUrl.match(/\/d\/([^/]+)/);
      if (match && match[1]) {
        const fileId = match[1];
        // Generate the new URL format
        const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
        setConvertedUrl(newUrl);
        setInputUrl("")
      } else {
        // Handle invalid URL format
        setConvertedUrl('Invalid Google Drive URL');
        setInputUrl("")
      }
    } catch (error) {
      console.error('Error converting URL:', error);
      setConvertedUrl('Error converting URL');
    }
  };

  return (
    <div className=" ">
<button className="btn btn-outline btn-sm" onClick={()=>document.getElementById('my_modal_3').showModal()}>Drive Converter</button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <h2 className="text-md font-semibold mb-4">Google Drive URL Converter</h2>
      
      <input
        type="text"
         className="input input-bordered input-md w-full max-w-xs"
        placeholder="Enter Google Drive URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <button className='btn-add btn-sm px-1 ml-2 ' onClick={convertUrl}>Convert</button>
      {convertedUrl && <div className='my-2'>
        <strong>Converted URL:</strong>
        <p>
          {convertedUrl}
        </p>
      </div>}
      
  </div>
</dialog>











     
    </div>
  );
};

export default DriveLinkConverter;
