/**
 * The `HeroSection` function is a React component that handles the upload and display of an image, and
 * provides buttons for downloading, ending the session, and progressing the image.
 * @returns The `HeroSection` component is being returned, which contains the UI for the main section
 * of the page, including an input section for uploading an image, a result section for displaying the
 * processed image, and buttons for downloading the image, ending the session, and progressing to the
 * next stage.
 */
import React, { useState, useEffect, useRef } from 'react';
import Dropzone from 'react-dropzone';
import '../styles/hero_section.css'
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';

//the backend url is stored in the .env file
const backEnd = process.env.REACT_APP_API_KEY


//the hero section is the main section of the page
function HeroSection() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [receivedImage, setReceivedImage] = useState(null);
  const [images, setImages] = useState([]);
  //loader is used to display a loading animation while the image is being uploaded
  const [loader, setLoader] = useState(false);
  console.log(uploadProgress);
  console.log(images);

  const base64Image = btoa(new Uint8Array(receivedImage));
  console.log(base64Image);
  //handleDrop is a function that handles the drop of the image
  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  //handleUpload is a function that handles the upload of the image
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', file);

    //the loader is set to true
    setLoader(true);
    //the fetch function is used to send the image to the backend
    fetch(`${backEnd}/unet`, {
      method: 'POST',
      body: formData,
      onUploadProgress: (progressEvent) => {
        setUploadProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
      },
    })
      //the response is converted to a blob
      .then((res) => res.blob())
      //the blob is converted to a url
      .then((blob) => {
        console.log(blob);
        /* `setReceivedImage(URL.createObjectURL(blob))` is setting the state variable `receivedImage` to a URL
        created from the blob object returned by the API. This URL can be used to display the image in the
        UI using an `<img>` tag. `URL.createObjectURL()` creates a DOMString containing a URL representing
        the object given in the parameter. In this case, the object is a blob containing the image data. */
        setReceivedImage(URL.createObjectURL(blob));
        console.log(receivedImage)
        //the loader is set to false
        setLoader(false);
      })
      //if there is an error, it is logged
      .catch((err) => console.log(err));
  };

  function fetchImageList() {
    fetch(`${backEnd}/images`)
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching image list:', error));
  }



  useEffect(() => {
    fetchImageList();
  }, []);


  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = receivedImage;
    link.download = 'image.png';
    link.click();
  };

  function handleDownloadAllClick() {
    // Make a request to the '/images' endpoint
    fetch('/images')
      .then(response => response.json())
      .then(data => {
        // Iterate over each image in the response body
        data.forEach((imageData, index) => {
          // Create an anchor element to trigger the download
          const link = document.createElement('a');
          link.href = `data:image/png;base64,${imageData.base64Data}`;
          link.download = `image_${index}.png`;

          // Append the anchor element to the document body
          document.body.appendChild(link);

          // Programmatically trigger the download
          link.click();

          // Clean up the anchor element
          document.body.removeChild(link);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }



  /**
   * The function converts an image from a given URL to a base64 encoded string.
   * @param imageUrl - The URL of the image that needs to be converted to base64 format.
   * @returns A Promise object is being returned. The promise will either resolve with a base64 encoded
   * image string or reject with an error message if the image fails to load or convert.
   */

  const convertImageToBase64 = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        const base64Image = canvas.toDataURL('image/png');
        resolve(base64Image);
      };
      image.onerror = function () {
        reject(new Error('Failed to convert image to base64'));
      };
      image.src = imageUrl;
    });
  };

  const handleEndSessionClick = () => {
    fetch(`${backEnd}/delete-table`, {
      method: 'DELETE'
    })
      .then(() => {
        // Do something
        // alert session ended
        toast.success('Session Ended', {
          position: "top-right",
        });
      })
      .catch(error => console.error('Error ending session:', error));
  };


  const handleNextProgressionClick = () => {
    (async () => {
      try {
        //the loader is set to true
        setLoader(true);
        const base64Image = await convertImageToBase64(receivedImage);
        const base64Data = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

        // Now you have the base64 image data
        console.log(base64Data);
        //console.log(base64Image);
        const base64Text = base64Image.split(',')[1];
        //console.log(base64Text);
        fetch(`${backEnd}/next-progression?received_image=${encodeURIComponent(base64Text)}`, {
          method: 'POST'
        })
          .then((res) => res.blob())
          .then((blob) => {
            const nextProgressionImage = URL.createObjectURL(blob);
            setReceivedImage(nextProgressionImage);
            setLoader(false)
          })
          .catch((err) => console.log(err))
          .finally(() => {
            fetchImageList();
          }
          );
      } catch (error) {
        console.log(error);
      }
    })();
  };


  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  console.log(width);


  //the hero section is returned
  return (
    //the hero section is divided into two parts
    //the first part is the input section
    //the second part is the result section
    <React.Fragment>
      {loader && <Loader />}
      <section className="hero">
        <div className='hero_section'>
          <div className='hero_text'>
            <h1>Brain MRI Progression</h1>
            <p>Get the progression in seconds</p>
          </div>
          <div className='hero_input'>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drop an image here or click to select an image</p>
                </div>
              )}
            </Dropzone>
            {file && (
              <div>
                <p>{file.name}</p>
                <button onClick={handleUpload}>Generate Progression :&#41</button>
              </div>
            )}
          </div>
        </div>
        {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      </section>
      {/* the result section is only displayed if there is an image */}
      {!loader && receivedImage &&
        <div className="second_hero">
          <section className="hero">
            <h1>Original</h1>
            {/* the image is displayed */}
            {file && <img src={URL.createObjectURL(file)} alt="Original" />}
          </section>
          <section className="hero">
            <h1>Result</h1>
            {receivedImage && <img src={receivedImage} alt="Predicted" />}
          </section>
        </div>}

      <div className="image_display">
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div drag="x" dragConstraints={{ right: 0 }} className="inner-carousel">
            {images.map((image, index) => (
              <motion.div className='item'>
                <img src={`data:image/png;base64,${image}`} alt={`Image ${index}`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>


      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#000000',
      }}>
        <button onClick={handleDownloadClick}>Download</button>
        <button onClick={handleDownloadAllClick}>Download All</button>
        <button onClick={handleEndSessionClick}>End Session</button>
        <button style={{ width: 100 }} onClick={handleNextProgressionClick}>Next Progression</button>

      </div>
    </React.Fragment>
  );
}

export default HeroSection;