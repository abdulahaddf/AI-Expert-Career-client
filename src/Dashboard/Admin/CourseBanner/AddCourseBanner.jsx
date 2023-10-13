import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddCourseBanner = () => {
    const { control, handleSubmit,reset } = useForm();
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [banners, setBanners] = useState([]);
  
    useEffect(() => {
      fetch(" http://localhost:5000/banners")
        .then((response) => response.json())
        .then((data) => setBanners(data));
        setIsLoading(false);
    }, [banners]);
    console.log(banners);
    const handleDelete = (blog) => {
      Swal.fire({
        title: "Are you sure?",
        text: "Your selected Blog will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0891B2",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/singlebanners/${blog._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your Blog has been deleted.",
                  "success"
                );
              }
            });
        }
      });
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data)
     const {title, subtitle} = data;

    
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
    
          // Prepare banner Data
          const bannerData = {
                title,
                subtitle,
                banner : cover_image_url
          };
    
          // Send Banner Data to API
          const apiResponse = await fetch("http://localhost:5000/banners", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(bannerData),
          });
    
          if (!apiResponse.ok) {
            throw new Error("Banner insertion failed");
          }
    
          const responseData = await apiResponse.json();
    
          if (responseData.insertedId) {
            reset();
            toast.success("Added the banner successfully");
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Something went wrong, try again")
          setIsLoading(false);
        }
      };


   
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">Add Latest Course Banner</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mx-auto">
     <div className="flex justify-around w-11/12">
     <div className="mb-4 ">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold">
          Title:
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className="border rounded w-full py-2 px-3" />
          )}
        />
      </div>

      <div className="mb-4 ">
        <label htmlFor="subtitle" className="block text-gray-700 text-sm font-bold">
          Subtitle:
        </label>
        <Controller
          name="subtitle"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className="border rounded w-full py-2 px-3" />
          )}
        />
      </div>

    
      <div className="mb-4 ">
            <label
              htmlFor="banner"
              className="block text-gray-700 text-sm font-bold"
            >
              Banner:
            </label>
            <input
              type="file"
              id="banner"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
     </div>

         <div className="w-32 mx-auto">
         <button type="submit" className="btn-black">
            {isLoading ? <p className='flex items-center gap-2 '>Uploading <span className="loading loading-spinner text-error"></span></p> : "Submit"}
          
        </button>
         </div>
    </form>
{/* Manage Banners */}

<div className="my-10">
        <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
          {/* head */}
          <thead className="bg-secondary text-white text-xl text-center">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th className="text-center">Picture</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody >
            {banners.map((banners, index) => (
              <tr key={banners._id}>
                <th>{index + 1}</th>
                <td className="max-w-xs">{banners.title}</td>
                <td >
                  <img
                    className="w-32 rounded-md mx-auto"
                    src={banners.banner}
                    alt=""
                  />
                </td>

                <td className="text-center">
                  
                  <button
                    onClick={() => handleDelete(banners)}
                    className="btn-add"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>








        </div>
    );
};

export default AddCourseBanner;