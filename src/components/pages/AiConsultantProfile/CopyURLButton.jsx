import React, { useState } from 'react';
import { BsFillShareFill } from 'react-icons/bs';

function CopyURLButton({text}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const currentURL = window.location.href;

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = currentURL;
    document.body.appendChild(tempInput);

    // Select the input content
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input
    document.body.removeChild(tempInput);

    // Update the state to indicate success
    setCopied(true);

    // Reset the "Copied" state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      {/* <p>Current URL: {window.location.href}</p> */}
      <button className='flex items-center gap-2 px-3 py-0.5 text-white bg-black rounded-full' onClick={copyToClipboard}>
       <BsFillShareFill/> {copied ? 'Link Copied!' : text}
      </button>
    </div>
  );
}

export default CopyURLButton;
