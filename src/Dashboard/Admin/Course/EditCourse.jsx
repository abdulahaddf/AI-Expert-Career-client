import { useState } from 'react';
import { useForm, } from 'react-hook-form';
import Swal from 'sweetalert2';

const EditCourse = () => {
    const { handleSubmit, register,  } = useForm();
    const [modules, setModules] = useState([{ title: '', contents: [] }]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [newFeature, setNewFeature] = useState('');
    const [courseType, setCourseType] = useState('free');
    const [category, setCategory] = useState(''); // Initialize with an empty category
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    





    const categoryOptions = [
      "Machine learning",
      "Data science",
      "Data analysis",
      "Computer vision",
      "Deep learning",
      "NLP",
      "Prompt Engineering",
      "IoT",
      "Artificial Intelligence",
      "Others",
    ];


    const onSubmit = async (data) => {
        setIsLoading(true);
        const {
          title,
          description,
          courseType,
          courseFee,
          discount,
          duration,
          instructor,
          insDesignation,
          modules,
          startDate,
        } = data;
      
        // Check if image is selected
        if (image) {
          try {
            const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`;
            
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
        
            // Prepare Course Data with the cover image URL
            const courseData = {
              title,
              cover: cover_image_url,
              description,
              courseType,
              courseFee,
              discount,
              duration,
              instructor,
              insDesignation,
              modules,
              startDate,
              comments: [],
            };
        
            // Send Course Data to API
            const apiResponse = await fetch("http://localhost:5000/courses", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(courseData),
            });
        
            if (!apiResponse.ok) {
              throw new Error("Course insertion failed");
            }
        
            const responseData = await apiResponse.json();
        
            if (responseData.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Course added successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
              setIsLoading(false);
            }
          } catch (error) {
            console.error("Error:", error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Course is not uploaded successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setIsLoading(false);
          }
        } else {
          // Handle case when no image is selected
          Swal.fire({
            icon: "error",
            title: "Please select a cover image",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsLoading(false);
        }
      };
      
      
  
    // Add a new module to the state
    const addModule = () => {
      setModules([...modules, { title: '', contents: [] }]);
    };
  
    // Remove a module from the state
    const removeModule = (moduleIndex) => {
        const updatedModules = [...modules];
        updatedModules.splice(moduleIndex, 1);
        setModules(updatedModules);
      };


      // Add a new content to a specific module
    const addContent = (moduleIndex) => {
      const updatedModules = [...modules];
      updatedModules[moduleIndex].contents.push({ title: '', type: 'text', videoURL: '', content: '' });
      setModules(updatedModules);
    };

//handle features
// Add a new feature to the selected features list
const addNewFeature = () => {
    setSelectedFeatures([...selectedFeatures, newFeature]);
    setNewFeature('');
  };

  const removeFeature = (featureToRemove) => {
    // Remove a feature from the selected features list
    const updatedFeatures = selectedFeatures.filter((feature) => feature !== featureToRemove);
    setSelectedFeatures(updatedFeatures);
  };

  const handleNewFeatureChange = (e) => {
    // Update the value of the new feature input field
    setNewFeature(e.target.value);
  };
  const handleCategoryChange = (e) => {
    // Update the selected category
    setCategory(e.target.value);
  };

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Course</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className='flex justify-between'>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">Course Title:</label>
          <input {...register('title', { required: true })} type="text" id="title" className="border border-gray-300 rounded-xl p-2 w-96" />
        </div>
        <div className="mb-4">
            <label
              htmlFor="imageURL"
              className="block mb-2 font-medium text-gray-700"
            >
              Cover Image
            </label>
            <input
  {...register('image', { required: true })}
  type="file"
  id="image"
  className="input file-input file-input-bordered input-md text-black file-input-error"
  onChange={(e) => setImage(e.target.files[0])}
/>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">Course Description:</label>
          <textarea {...register('description', { required: true })} id="description" className="border border-gray-300 rounded-xl p-2 w-full"></textarea>
        </div>
         {/* Category Dropdown */}
         <div className="mb-4">
          <label htmlFor="category" className="block font-semibold mb-1">Category:</label>
          <select
          required
            id="category"
            className="border border-gray-300 rounded-xl p-2 w-full"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a Category</option>
            {categoryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
         {/* Course Features */}
         <div className="mb-4">
          <label htmlFor="features" className="block font-semibold mb-1">
            Course Features:
          </label>
          {/* Selected Features */}
          <div className="mb-2">
            {selectedFeatures.map((feature, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 px-2 py-1 rounded-lg mr-2"
              >
                {feature}
                <button
                  type="button"
                  onClick={() => removeFeature(feature)}
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  X
                </button>
              </span>
            ))}
          </div>

          {/* Feature Input */}
          <div className="flex items-center">
            <input
              type="text"
              id="features"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-xl rounded-l focus:outline-none focus:border-orange"
              value={newFeature}
              onChange={handleNewFeatureChange}
              placeholder="Add a feature..."
            />
            <button
              type="button"
              onClick={addNewFeature}
              className="btn-add ml-3"
            >
              Add
            </button>
          </div>
        </div>
           {/* Course Type Dropdown */}
        <div className="mb-4">
          <label htmlFor="courseType" className="block font-semibold mb-1">Course Type:</label>
          <select
            {...register('courseType', { required: true })}
            id="courseType"
            className="border border-gray-300 rounded-xl p-2 w-full"
            onChange={(e) => setCourseType(e.target.value)}
          >
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {/* Course Fee Input (conditionally rendered) */}
        {courseType === 'paid' && (
          <div>
            <div className="mb-4">
            <label htmlFor="courseFee" className="block font-semibold mb-1">Course Fee:</label>
            <input required {...register('courseFee', { required: true })} type="number" id="courseFee" className="border border-gray-300 rounded-xl p-2 w-full " />
          </div>
            <div className="mb-4">
            <label htmlFor="discount" className="block font-semibold mb-1">Discount %</label>
            <input {...register('discount', { required: true })} type="number" id="discount" className="border border-gray-300 rounded-xl p-2 w-full" />
          </div>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="instructor" className="block font-semibold mb-1">Instructor:</label>
          <input {...register('instructor', { required: true })} type="text" id="instructor" className="border border-gray-300 rounded-xl p-2 w-full " />
        </div>
        <div className="mb-4">
          <label htmlFor="instructor" className="block font-semibold mb-1">Instructor Designation:</label>
          <input {...register('insDesignation', { required: true })} type="text" id="insDesignation" className="border border-gray-300 rounded-xl p-2 w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block font-semibold mb-1">Duration (min):</label>
          <input {...register('duration', { required: true })} type="number" id="duration" className="border border-gray-300 rounded-xl p-2 w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block font-semibold mb-1">Start Date:</label>
          <input {...register('startDate')} type="date" id="startDate" className="border border-gray-300 rounded-xl p-2" />
        </div>
<p className='block font-semibold mb-1 text-xl' >Design Course</p>
        <button type="button" className='btn-add my-2 font-semibold text-xl' onClick={addModule}>
          + Add Module
        </button>

        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="border border-gray-300 rounded-xl p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Module {moduleIndex + 1}</h2>


           <div className='flex justify-end'> <button type="button" onClick={() => removeModule(moduleIndex)} className="btn-add  my-2">
              X
            </button></div>

            <div className="mb-4">
              <label htmlFor={`modules[${moduleIndex}].title`} className="block font-semibold mb-1">Module Title:</label>
              <input {...register(`modules[${moduleIndex}].title`)} type="text" className="border border-gray-300 rounded-xl p-2 w-full" />
            </div>

            <button type="button" onClick={() => addContent(moduleIndex)} className="btn-add my-2">
              + Add Content
            </button>

            {module.contents?.map((content, contentIndex) => (
  <div key={contentIndex} className="border border-gray-300 rounded-xl p-4 mb-4">
    <h3 className="text-lg font-semibold mb-2">Content {contentIndex + 1}</h3>

    <div className="mb-4">
      <label htmlFor={`modules[${moduleIndex}].contents[${contentIndex}].ctitle`} className="block font-semibold mb-1">Content Title:</label>
      <input {...register(`modules[${moduleIndex}].contents[${contentIndex}].ctitle`)} type="text" className="border border-gray-300 rounded-xl p-2 w-full" />
    </div>

    <div className="mb-4">
      <label htmlFor={`modules[${moduleIndex}].contents[${contentIndex}].url`} className="block font-semibold mb-1">Content URL:</label>
      <input {...register(`modules[${moduleIndex}].contents[${contentIndex}].url`)} type="text" className="border border-gray-300 rounded-xl p-2 w-full" />
    </div>

    {/* Add more content fields here based on the content type */}
  </div>
))}
          </div>
        ))}


        <button type="submit" className="my-btn bg-primary btn-md rounded-lg">
            {isLoading ? <p className='flex items-center gap-2'>Loading <span className="loading loading-spinner text-error"></span></p> : "Submit"}
          
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
