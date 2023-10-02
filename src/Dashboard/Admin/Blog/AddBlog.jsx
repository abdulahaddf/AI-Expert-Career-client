import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [blogName, setBlogName] = useState("");
  const [description, setDescription] = useState("");
  const editor = useRef(null);
  const [descriptionBN, setDescriptionBN] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [image, setImage] = useState(null); // Store the selected image file

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

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

      // Prepare Blog Data
      const blogData = {
        blogName,
        category,
        subcategory,
        selectedTags,
        imageURL: cover_image_url,
        description,
        descriptionBN,
        comments: [],
        likes: [],
        dislikes: [],
      };

      // Send Blog Data to API
      const apiResponse = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!apiResponse.ok) {
        throw new Error("Blog insertion failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Blog added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        // Reset the input fields to empty values
        setBlogName("");
        setDescription("");
        setDescriptionBN("");
        setCategory("");
        setSubcategory("");
        setSelectedTags([]);
        setImage(null);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Blog is not uploaded successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Define the options for category and subcategory

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

  const subcategoryOptions = [
    "Python",
    "Pandas",
    "Numpy",
    "Keras",
    "Tablue",
    "Tensorflow",
    "Power BI",
    "Advanced Excel",
    "Mysql",
    "Pytorch",
    "Kaggle",
    "Matplotlib",
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleNewTagChange = (e) => {
    setNewTag(e.target.value);
  };

  const addNewTag = () => {
    if (newTag && !selectedTags.includes(newTag)) {
      setSelectedTags([...selectedTags, newTag]);
      setNewTag("");
    }
  };
  const removeTag = (tagToRemove) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToRemove);
    setSelectedTags(updatedTags);
  };

  return (
    <div className="h-full">
      <h1 className="text-3xl text-center">Create a Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto my-5">
        <div className="flex justify-between">
          <div className="mb-4">
            <label
              htmlFor="blogName"
              className="block mb-2 font-medium text-gray-700"
            >
              Blog Name
            </label>
            <input
              type="text"
              id="blogName"
              required
              className="w-80 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
              value={blogName}
              onChange={(e) => setBlogName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageURL"
              className="block mb-2 font-medium text-gray-700"
            >
              Cover Image
            </label>
            <input
              type="file"
              id="image"
              className="w-80 input 
              file-input file-input-bordered  text-black file-input-error"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        <div className="flex justify-between  ">
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block mb-2 font-medium text-gray-700"
            >
              Category:
            </label>
            <select
              id="category"
              required
              className="w-80 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
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
          <div className="mb-4">
            <label
              htmlFor="subcategory"
              className="block mb-2 font-medium text-gray-700"
            >
              Subcategory:
            </label>
            <select
              id="subcategory"
              required
              className="w-80 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
              value={subcategory}
              onChange={handleSubcategoryChange}
            >
              <option value="">Select a Subcategory</option>
              {subcategoryOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block mb-2 font-medium text-gray-700"
          >
            Tags:
          </label>
          {/* Selected Tags */}
          <div className="mb-2">
            {selectedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 px-2 py-1 rounded-lg mr-2"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  X
                </button>
              </span>
            ))}
          </div>

          {/* Tag Input */}
          <div className="flex items-center">
            <input
              type="text"
              id="tags"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-orange"
              value={newTag}
              onChange={handleNewTagChange}
              placeholder="Add a tag..."
            />
            <button
              type="button"
              onClick={addNewTag}
              className="btn btn-sm btn-ghost btn-outline hover:bg-primary ml-5"
            >
              Add
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-gray-700"
          >
            Description in English
          </label>

          <JoditEditor
            id="description"
            ref={editor}
            value={description}
            tabIndex={1} // tabIndex of textarea
            onChange={(newDescription) => setDescription(newDescription)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="descriptionBN"
            className="block mb-2 font-medium text-gray-700 overflow-y-auto"
          >
            Description in Bangla
          </label>

          <JoditEditor
            id="descriptionBN"
            ref={editor}
            value={descriptionBN}
            tabIndex={1} // tabIndex of textarea
            onChange={(newDescription) => setDescriptionBN(newDescription)}
          />
        </div>
        <button
          type="submit"
          className="px-[32px] my-btn py-[9px] bg-[#ED1B24] rounded-md shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
