import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import logo from '/logo.png';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

emailjs.init('wrnAQhXJrqsqCTnnQ');
const emailService = 'service_yo0tde8';
const emailTemplate = 'template_hj5sk9l';

const InvoiceModal = ({
  isOpen,
  setIsOpen,
  invoiceInfo,
  items,
  onAddNextInvoice,
}) => {
  const form = useRef();
    const navigate =useNavigate() ;
  function closeModal() {
    setIsOpen(false);
  }

  const addNextInvoiceHandler = () => {
    setIsOpen(false);
    onAddNextInvoice();
  };

  const SaveAsPDFHandler = () => {
    const dom = document.getElementById('print');
    toPng(dom)
      .then((dataUrl) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = dataUrl;
        img.onload = () => {
          // Initialize the PDF.
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: [5.5, 8.5],
          });

          // Define reused data
          const imgProps = pdf.getImageProperties(img);
          const imageType = imgProps.fileType;
          const pdfWidth = pdf.internal.pageSize.getWidth();

          // Calculate the number of pages.
          const pxFullHeight = imgProps.height;
          const pxPageHeight = Math.floor((imgProps.width * 8.5) / 5.5);
          const nPages = Math.ceil(pxFullHeight / pxPageHeight);

          // Define pageHeight separately so it can be trimmed on the final page.
          let pageHeight = pdf.internal.pageSize.getHeight();

          // Create a one-page canvas to split up the full image.
          const pageCanvas = document.createElement('canvas');
          const pageCtx = pageCanvas.getContext('2d');
          pageCanvas.width = imgProps.width;
          pageCanvas.height = pxPageHeight;

          for (let page = 0; page < nPages; page++) {
            // Trim the final page to reduce file size.
            if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
              pageCanvas.height = pxFullHeight % pxPageHeight;
              pageHeight = (pageCanvas.height * pdfWidth) / pageCanvas.width;
            }
            // Display the page.
            const w = pageCanvas.width;
            const h = pageCanvas.height;
            pageCtx.fillStyle = 'white';
            pageCtx.fillRect(0, 0, w, h);
            pageCtx.drawImage(img, 0, page * pxPageHeight, w, h, 0, 0, w, h);

            // Add the page to the PDF.
            if (page) pdf.addPage();

            const imgData = pageCanvas.toDataURL(`image/${imageType}`, 1);
            pdf.addImage(imgData, imageType, 0, 0, pdfWidth, pageHeight);
          }
          // Output / Save
          pdf.save(`invoice-${invoiceInfo.invoiceNumber}.pdf`);
        };
      })
      .catch((error) => {
        console.error('Oops, something went wrong!', error);
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Prepare the email content
    const emailContent = {
      to_email: invoiceInfo.customerEmail,
      message: generateEmailMessage(invoiceInfo, items), // Generate the email message
    };
  
    // Send the email using Email.js
    emailjs
      .send(emailService, emailTemplate, emailContent)
      .then((response) => {
        // console.log('Email sent successfully:', response);
        toast.success('تم ارسال طلبك بنجاح'); // Display a success message
        navigate('/')
      })
      .catch((error) => {
        // console.error('Email sending failed:', error);
        toast.error('هناك مشكلة في ارسال طلبك برجاء المحاولة لاحقا'); // Display an error message
      });
  };
  

  // Function to generate the email message based on invoiceInfo and items
  const generateEmailMessage = (invoiceInfo, items) => {
    // Customize the email message as needed
    let message = `
    رقم الفاتورة: ${invoiceInfo.invoiceNumber}
    الاسم: ${invoiceInfo.customerName}
    رقم الهاتف: ${invoiceInfo.phoneNumber}
    البريد الالكتروني: ${invoiceInfo.customerEmail}
    المدينة: ${invoiceInfo.customerCity}
    
    المنتجات:
    `;

    items.forEach((item) => {
      message += `
        - ${item.name} (المقاس: ${item.qty}) - الكمية: ${item.price}
        `;
    });

    message += `
    برجاء التوجه بتلك الفاتورة للمصنع
    `;

    return message;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center" dir="rtl">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white text-right align-middle shadow-xl transition-all">
              <div className="p-4" id="print">
                <div className="flex justify-center items-center">
                  <img src={logo} alt="logo" className="w-[100px]" />
                </div>
                <div className="mt-6">
                  <div className="mb-4 grid grid-cols-2">
                    <span className="font-bold"> رقم الفاتورة:</span>
                    <span>{invoiceInfo.invoiceNumber}</span>
                    <span className="font-bold">الاسم:</span>
                    <span>{invoiceInfo.customerName}</span>
                    <span className="font-bold">رقم الهاتف:</span>
                    <span>{invoiceInfo.phoneNumber}</span>
                    <span className="font-bold"> البريد الالكتروني:</span>
                    <span>{invoiceInfo.customerEmail}</span>
                    <span className="font-bold"> المدينة:</span>
                    <span>{invoiceInfo.customerCity}</span>
                  </div>

                  <table className="w-full text-right">
                    <thead>
                      <tr className="border-y border-black/10 text-sm md:text-base">
                        <th>الصنف</th>
                        <th className="text-center">المقاس</th>
                        <th className="text-right">الكمية</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td className="w-full">{item.name}</td>
                          <td className="min-w-[100px] text-center">
                            {item.qty}
                          </td>
                          <td className="min-w-[80px] text-center">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-4 flex flex-col text-center">
                    <p>برجاء التوجه بتلك الفاتورة للمصنع</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-2 px-4 pb-6 gap-4">
                <button
                  className="flex w-full items-center justify-center space-x-1 rounded-md border border-blue-500 py-2 text-sm text-blue-500 shadow-sm hover:bg-blue-500 hover:text-white"
                  onClick={SaveAsPDFHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>تحميل</span>
                </button>
                <button
                  onClick={sendEmail}
                  className="flex w-full items-center justify-center space-x-1 rounded-md bg-blue-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                  <span>ارسال</span>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InvoiceModal;
