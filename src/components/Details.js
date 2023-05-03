// import { useState } from "react";
// import Navbar from "./Navbar";

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState();

//   // This function will be triggered when the file field change
//   const imageChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };

//   // This function will be triggered when the "Remove This Image" button is clicked
//   const removeSelectedImage = () => {
//     setSelectedImage();
//   };

//   return (
//     <>
//     <Navbar/>
//     <h4>Upload Image Here</h4>
//       <div style={styles.container}>
//         <input
//           accept="image/*"
//           type="file"
//           onChange={imageChange}
//         />

//         {selectedImage && (
//           <div style={styles.preview}>
//             <img
//               src={URL.createObjectURL(selectedImage)}
//               style={styles.image}
//               alt="Thumb"
//             />
//             <button onClick={removeSelectedImage} style={styles.delete}>
//               Remove This Image
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

// // Just some styles
// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   preview: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//   },
//   image: { maxWidth: "100%", maxHeight: 320 },
//   delete: {
//     cursor: "pointer",
//     padding: 15,
//     background: "red",
//     color: "white",
//     border: "none",
//   },
// };



import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import Footer from '../components/Footer';
import '../styles/home.css';
import Navbar from './Navbar';

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <HeroSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;






















