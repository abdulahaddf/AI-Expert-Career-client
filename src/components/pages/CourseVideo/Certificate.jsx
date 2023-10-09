/* eslint-disable react/prop-types */
import html2pdf from 'html2pdf.js';
import { useEffect, useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';

const Certificate = ({ id }) => {
  console.log(id);
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
 
const {_id, name, courseTitle, completionTime} = course;
  useEffect(() => {
    fetch(`http://localhost:5000/singleEnrolledcourse/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const generatePdf = () => {
    const pdfOptions = {
      margin: 0,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a5', orientation: 'landscape' },
    };
    const aspectRatio = 816 / 1056; // Height / Width
    const content = `
    <div style="width: 1056px; height: ${640 * aspectRatio}px; relative">
    <div class="absolute inset-0">
      <!-- Use the image as an <img> element -->
      <img src="../../../../src/assets/certificate/Certificate.jpg" style="width: 100%; height: 100%;" alt="Certificate Background" />

      <!-- Content to overlay on the image -->
      <p class="absolute top-[175px]  left-[220px] text-primary font-bold text-3xl">${name}</p>
      <p class="absolute top-[250px]  left-[220px] text-black font-bold text-xl">${courseTitle}</p>
      <p class="absolute top-[400px]  left-[220px] text-black font-bold text-sm">${completionTime}</p>
      <p class="absolute top-[450px]  left-[250px] text-black font-bold text-sm">${_id}</p>
    </div>
  </div>
    `;

    html2pdf()
      .from(content)
      .set(pdfOptions)
      .outputPdf('bloburi')
      .then((pdfDataUri) => {
        const link = document.createElement('a');
        link.href = pdfDataUri;
        link.download = 'certificate.pdf';

        link.click();
      });
  };

  const handleButtonClick = () => {
    
    setTimeout(() => {
      generatePdf();
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="">
      <button
        className="flex gap-2 text-lg items-center"
        onClick={handleButtonClick}
      >
        {loading ? <p>Loading</p> : <><MdDownloadForOffline />Certificate</>}
      </button>

      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Certificate;
