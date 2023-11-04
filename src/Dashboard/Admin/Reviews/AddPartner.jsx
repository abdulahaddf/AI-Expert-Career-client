import { useState } from "react";
import { useForm, } from "react-hook-form";
import Swal from "sweetalert2";

const AddPartner = () => {
    const [image, setImage] = useState(null);
  const {  handleSubmit } = useForm();

  const onSubmit = async () => {
    // console.log(data);
 
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Image_Upload_token
    }`;

    try {
      const coverForm = new FormData();
      coverForm.append("image", image);

      // Upload Cover Image
      const coverResponse = await fetch(imageUploadUrl, {
        method: "POST",
        body: coverForm,
      });

      if (!coverResponse.ok) {
        throw new Error("Cover image upload failed");
      }

      const coverImageResponse = await coverResponse.json();
      const cover_image_url = coverImageResponse.data.display_url;

      // Prepare Data
      const partner = {
        imageURL: cover_image_url,
      };

      // Send Feedback Data to API
      const apiResponse = await fetch(
        "https://ai-server-sooty.vercel.app/partner",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(partner),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Feedback insertion failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Partner logo added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      
        setImage(null);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Feedback is not uploaded successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

    return (
        <div>
        <h1 className="text-2xl font-bold text-center mb-4">
            Add Partner
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            <div className="mb-4">
              <label
                htmlFor="imageURL"
                className="block mb-2 font-medium text-gray-700"
              >
                partner Logo
              </label>
              <input
                type="file"
                id="image"
                className="w-80 input 
                file-input file-input-bordered  text-black "
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            
            <button type="submit" className="btn-view">
              Submit
            </button>
          </form>
        </div>
    );
};

export default AddPartner;