


import html2pdf from 'html2pdf.js';
import { FaFileDownload } from "react-icons/fa";
import { MdDownloadForOffline } from 'react-icons/md';

const Certificate = () => {
  

  const generatePdf = () => {
   

    const pdfOptions = {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    };

    const content = `
    <div class="relative w-[1056px] h-[816px]">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../../src/assets/certificate/Certificate.jpg');">
      <!-- Content to overlay on the background image -->
      <p class="absolute top-10 left-10 text-black font-bold text-lg">Abdul Ahad</p>

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
    }, 2000); // 2000 milliseconds = 3 seconds
  };

  return (
    <div className="">
      <button
        className= 'flex gap-2 text-lg items-center'
     
        onClick={handleButtonClick}
      >
     <MdDownloadForOffline/>Certificate
      </button>

      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Certificate;
