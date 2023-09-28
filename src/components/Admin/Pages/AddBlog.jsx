import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Swal from "sweetalert2";


const AddBlog = () => {
    const [blogName, setBlogName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const editor = useRef(null);
      //   For categories and sub categories
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [newTag, setNewTag] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          blogName,
          category,
          subcategory,
          selectedTags,
          imageURL,
          description,
        };
        fetch("http://localhost:5000/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.acknowledged) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Blog added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              // Reset the input fields to empty values
              setBlogName("");
              setImageURL("");
              setDescription("");
              setCategory("")
              setSubcategory("")
              setSelectedTags([])
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Blog is not uploaded successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };

  
  
    // Define the options for category and subcategory
    const categoryOptions = [
      'Machine learning',
      'Data science',
      'Data analysis',
      'Computer vision',
      'Deep learning',
      'NLP',
      'Prompt Engineering',
      'IoT',
      'Artificial Intelligence',
      'Others',
    ];
  
    const subcategoryOptions = [
      'Python',
      'Pandas',
      'Numpy',
      'Keras',
      'Tablue',
      'Tensorflow',
      'Power BI',
      'Advanced Excel',
      'Mysql',
      'Pytorch',
      'Kaggle',
      'Matplotlib',
    ];
    const tagOptions = [
        'Research field',
        'Tips & tricks',
        'Common mistakes',
        'Career',
        'Job opportunities',
        'Salary',
        'Bangladesh',
        'Higher studies',
        'About us',
        // ... (other options)
      ];
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleSubcategoryChange = (e) => {
      setSubcategory(e.target.value);
    };
    const handleTagChange = (e) => {
        const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedTags(selectedValues);
      };
    
      const handleNewTagChange = (e) => {
        setNewTag(e.target.value);
      };
    
      const addNewTag = () => {
        if (newTag && !selectedTags.includes(newTag)) {
          setSelectedTags([...selectedTags, newTag]);
          setNewTag('');
        }
      };
      const removeTag = (tagToRemove) => {
        const updatedTags = selectedTags.filter((tag) => tag !== tagToRemove);
        setSelectedTags(updatedTags);
      };
  
  





    return (
        <div className='h-[100vh]'>
        <h1 className="text-3xl text-center">Create a Blog</h1>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto my-5">
          <div className='flex justify-between'>
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
              Image URL
            </label>
            <input
              type="text"
              id="imageURL"
              className="w-80 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          </div>
         
         <div className='flex justify-between  '>
         <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium text-gray-700">
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
          <label htmlFor="subcategory" className="block mb-2 font-medium text-gray-700">
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
      <label htmlFor="tags" className="block mb-2 font-medium text-gray-700">
        Tags:
      </label>
       {/* Selected Tags */}
       <div className="mb-2">
        {selectedTags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 px-2 py-1 rounded-lg mr-2">
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
      {/* Available Tag Options */}
      <select
        multiple
        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
        value={selectedTags}
        onChange={handleTagChange}
      >
        {tagOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>




         
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-700"
            >
              Description
            </label>
           
  
  
  <JoditEditor
        id="description"
              ref={editor}
              value={description}
              tabIndex={1} // tabIndex of textarea
              
              onChange={newDescription => setDescription(newDescription)}
          />
  
  
  
          </div>
          <button type="submit" className="px-[32px] my-btn py-[9px] bg-[#ED1B24] rounded-md shadow-lg">
            Submit
          </button>
        </form>
      </div>
    );
};

export default AddBlog;