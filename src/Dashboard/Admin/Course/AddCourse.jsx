import { useState } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { FiDelete } from "react-icons/fi";
import { MdAdd, MdPlaylistRemove, MdRemoveCircle } from "react-icons/md";
import DriveLinkConverter from "./DriveLinkConverter";

const AddCourse = () => {
  // const [modules, setModules] = useState([{ title: '', contents: [] }]);

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [description, setDescription] = useState("");

  const [newFeature, setNewFeature] = useState("");
  const [newCollaborator, setNewCollaborator] = useState("");
  const [courseType, setCourseType] = useState("free");
  const [courseModel, setCourseModel] = useState("module");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const editor = useRef(null);
  const { handleSubmit, register, control, setValue } = useForm({
    defaultValues: {
      modules: [{ title: "", contents: [] }],
    },
  });
  // console.log(selectedFeatures);

  const categoryOptions = [
    "Machine learning",
    "Data science",
    "Data analysis",
    "Computer vision",
    "Deep learning",
    "Prompt Engineering",
    "Artificial Intelligence",
    "NLP",
    "IoT",
    "Others",
  ];
  const mainCategoryOptions = ["Free", "Fundamental", "Professional"];

  //   handling dynamic FAQ section
  const {
    fields: faqFields,
    append: faqAppend,
    remove: faqRemove,
  } = useFieldArray({
    control,
    name: "faqItems",
  });
  //   handling dynamic pre requisites section

  const {
    fields: preFields,
    append: preAppend,
    remove: preRemove,
  } = useFieldArray({
    control,
    name: "preRequisites",
  });
  //   handle dynamic eligibleUsers
  const {
    fields: eligibleFields,
    append: eligibleAppend,
    remove: eligibleRemove,
  } = useFieldArray({
    control,
    name: "eligibleUsers",
  });

  //   handle dynamic goal
  const {
    fields: goalFields,
    append: goalAppend,
    remove: goalRemove,
  } = useFieldArray({
    control,
    name: "goals",
  });

  // getting dynamic molecules for courses  from modules
  const watchModules = useWatch({ control, name: "modules" });

  const addModule = () => {
    setValue("modules", [...watchModules, { title: "", contents: [] }]);
  };

  const removeModule = (index) => {
    const updatedModules = [...watchModules];
    updatedModules.splice(index, 1);
    setValue("modules", updatedModules);
  };

  const addContentWithType = (moduleIndex, type) => {
    const updatedModules = [...watchModules];
    updatedModules[moduleIndex].contents.push({ type, title: "", url: "" });
    setValue("modules", updatedModules);
  };

  const removeContentWithType = (moduleIndex, contentIndex) => {
    const updatedModules = [...watchModules];
    updatedModules[moduleIndex].contents.splice(contentIndex, 1);
    setValue("modules", updatedModules);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    const {
      title,
      subtitle,
      coverVideo,
      courseType,
      courseModel,
      liveInstruction,
      courseFee,
      discount,
      duration,
      category,
      mainCategory,
      instructor,
      insDesignation,
      insDescription,
      insImage,
      modules,
      startDate,
      endDate,
      courseDate,
      faqItems,
      goals,
      preRequisites,
      eligibleUsers,
    } = data;
    console.log(data);
    // Check if image is selected
    if (image) {
      try {
        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Image_Upload_token
        }`;

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
          subtitle,
          coverVideo,
          cover: cover_image_url,
          description,
          mainCategory,
          category,
          features: selectedFeatures,
          Collaborators: selectedCollaborators,
          courseType,
          courseModel,
          liveInstruction,
          courseFee,
          discount,
          duration,
          instructor,
          insDesignation,
          insDescription,
          insImage,
          modules,
          startDate,
          endDate,
          courseDate,
          faqItems,
          goals,
          preRequisites,
          eligibleUsers,
          comments: [],
        };
        console.log(courseData);
        // Send Course Data to API
        const apiResponse = await fetch(
          "https://ai-server-sooty.vercel.app/courses",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(courseData),
          }
        );

        if (!apiResponse.ok) {
          throw new Error("Course insertion failed");
        }

        const responseData = await apiResponse.json();

        if (responseData.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Success!",
            text: "Course updated successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
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

  //handle features
  // Add a new feature to the selected features list
  const addNewFeature = () => {
    setSelectedFeatures([...selectedFeatures, newFeature]);
    setNewFeature("");
  };

  const removeFeature = (featureToRemove) => {
    // Remove a feature from the selected features list
    const updatedFeatures = selectedFeatures.filter(
      (feature) => feature !== featureToRemove
    );
    setSelectedFeatures(updatedFeatures);
  };

  const handleNewFeatureChange = (e) => {
    // Update the value of the new feature input field
    setNewFeature(e.target.value);
  };
  //handle Collaborators
  // Add a new Collaborator to the selected Collaborators list
  const addNewCollaborator = () => {
    setSelectedCollaborators([...selectedCollaborators, newCollaborator]);
    setNewCollaborator("");
  };

  const removeCollaborators = (CollaboratorToRemove) => {
    // Remove a Collaborator from the selected Collaborators list
    const updatedCollaborators = selectedCollaborators.filter(
      (Collaborator) => Collaborator !== CollaboratorToRemove
    );
    setSelectedCollaborators(updatedCollaborators);
  };

  const handleNewCollaboratorChange = (e) => {
    // Update the value of the new Collaborator input field
    setNewCollaborator(e.target.value);
  };

  return (
    <div className="max-w-5xl p-4 mx-auto ">
      <h1 className="py-2 text-2xl font-bold text-center text-white rounded-lg bg-primary">
        Publish a Course
      </h1>
      <DriveLinkConverter />

      <h1 className="mb-4 text-2xl font-bold">Course Information:</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              Course Title:
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className="p-2 border border-gray-300 rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageURL" className="block mb-1">
              Cover Image
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              id="image"
              className="text-black input file-input file-input-sm file-input-error"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="coverVideo" className="block mb-1">
              Cover Video URL(optional):
            </label>
            <input
              {...register("coverVideo")}
              type="url"
              id="coverVideo"
              className="p-2 border border-gray-300 rounded-xl "
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subtitle" className="block mb-1">
            Course Sub-Title:
          </label>
          <input
            {...register("subtitle", { required: true })}
            type="text"
            id="subtitle"
            className="w-full p-2 border border-gray-300 rounded-xl"
          />
        </div>
        {/* Course Description */}
        <div className="my-5">
          <p className="block mb-4 text-2xl font-semibold">
            Course Description:
          </p>
          <JoditEditor
            id="description"
            ref={editor}
            value={description}
            tabIndex={1} // tabIndex of textarea
            onChange={(newDescription) => setDescription(newDescription)}
          />
        </div>

        {/*Category Dropdown */}
        <div className="flex flex-wrap justify-between">
          {/* main category */}
          <div className="mb-4">
            <label htmlFor="mainCategory" className="block mb-1 font-semibold">
              Main Category:
            </label>
            <Controller
              name="mainCategory" // This should match the "name" attribute
              control={control}
              rules={{ required: true }} // Add validation rules here
              defaultValue="" // Set a default value if needed
              render={({ field }) => (
                <select
                  {...field}
                  id="mainCategory"
                  className="p-2 rounded-xl md:w-72 select select-bordered"
                >
                  <option value="">Select a Main Category</option>
                  {mainCategoryOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block mb-1 font-semibold">
              Category:
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  id="category"
                  className="p-2 rounded-xl md:w-72 select select-bordered"
                >
                  <option value="">Select a Category</option>
                  {categoryOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block mb-1 font-semibold">
              Duration (min):
            </label>
            <input
              {...register("duration", { required: true })}
              type="number"
              id="duration"
              className="p-2 border border-gray-300 rounded-xl md:w-64"
            />
          </div>
        </div>

        {/* Course Features */}

        <div className="mb-4">
          <label htmlFor="features" className="block mb-1 font-semibold">
            Course Features:
          </label>
          {/* Selected Features */}
          <div className="mb-2">
            {selectedFeatures.map((feature, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 mr-2 bg-gray-200 rounded-lg"
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
              className="flex-grow px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-orange"
              value={newFeature}
              onChange={handleNewFeatureChange}
              placeholder="Add a feature..."
            />
            <button
              type="button"
              onClick={addNewFeature}
              className="ml-3 btn-black"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex gap-20">
          {/* Course Model Dropdown */}
          <div className="my-5">
            <label className="block mb-1 font-semibold">Course Model:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center gap-2 text-lg ">
                <input
                  type="radio"
                  {...register("courseModel", { required: true })}
                  value="module"
                  className="radio"
                  checked={courseModel === "module"}
                  onChange={() => setCourseModel("module")}
                />
                Module
              </label>
              <label className="flex items-center gap-2 text-lg">
                <input
                  type="radio"
                  {...register("courseModel", { required: true })}
                  value="live"
                  className="radio "
                  checked={courseModel === "live"}
                  onChange={() => setCourseModel("live")}
                />
                Live
              </label>
            </div>
          </div>
          {/* Course Type Dropdown */}
          <div className="my-5">
            <label className="block mb-1 font-semibold">Course Type:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center gap-2 text-lg ">
                <input
                  type="radio"
                  {...register("courseType", { required: true })}
                  value="free"
                  className="radio"
                  checked={courseType === "free"}
                  onChange={() => setCourseType("free")}
                />
                Free
              </label>
              <label className="flex items-center gap-2 text-lg">
                <input
                  type="radio"
                  {...register("courseType", { required: true })}
                  value="paid"
                  className="radio "
                  checked={courseType === "paid"}
                  onChange={() => setCourseType("paid")}
                />
                Paid
              </label>
            </div>
          </div>
        </div>
        {/* if course is live add a doc link for instructions */}
        {courseModel === "live" && (
          <div className="mb-4">
            <label
              htmlFor="liveInstruction"
              className="block mb-2 font-medium text-gray-700"
            >
              Live Course Instructions URL:
            </label>
            <input
              {...register("liveInstruction", { required: true })}
              type="url"
              id="liveInstruction"
              className="w-full p-2 border border-gray-300 rounded-xl"
            />
          </div>
        )}

        {/* Course Fee Input (conditionally rendered) */}
        {courseType === "paid" && (
          <div className="grid grid-cols-2 my-10 gap-x-14">
            <div className="mb-4">
              <label htmlFor="courseFee" className="block mb-1 font-semibold">
                Course Fee:
              </label>
              <input
                required
                {...register("courseFee", { required: true })}
                type="number"
                id="courseFee"
                className="w-full p-2 border border-gray-300 rounded-xl "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="discount" className="block mb-1 font-semibold">
                Discount %
              </label>
              <input
                {...register("discount")}
                type="number"
                id="discount"
                className="w-full p-2 border border-gray-300 rounded-xl"
              />
            </div>

            <div className="flex justify-between">
              <div className="mb-4">
                <label htmlFor="startDate" className="block mb-1 font-semibold">
                  Admission Start Date:
                </label>
                <input
                  {...register("startDate")}
                  type="date"
                  id="startDate"
                  className="p-2 border border-gray-300 rounded-xl"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="endDate" className="block mb-1 font-semibold">
                  Admission End Date:
                </label>
                <input
                  {...register("endDate")}
                  type="date"
                  id="endDate"
                  className="p-2 border border-gray-300 rounded-xl"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="courseDate" className="block mb-1 font-semibold">
                Course will start:
              </label>
              <input
                {...register("courseDate")}
                type="date"
                id="courseDate"
                className="p-2 border border-gray-300 rounded-xl"
              />
            </div>
          </div>
        )}
        {/* Instructor Profile */}
        <p className="block mb-1 text-2xl font-semibold">Instructor Profile:</p>
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <label
              htmlFor="instructor"
              className="block mb-2 font-medium text-gray-700"
            >
              Instructor Name:
            </label>
            <input
              {...register("instructor", { required: true })}
              type="text"
              id="instructor"
              className="w-full p-2 border border-gray-300 rounded-xl "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructor"
              className="block mb-2 font-medium text-gray-700"
            >
              Instructor Designation:
            </label>
            <input
              {...register("insDesignation", { required: true })}
              type="text"
              id="insDesignation"
              className="w-full p-2 border border-gray-300 rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="insDescription"
              className="block mb-2 font-medium text-gray-700"
            >
              Instructor Description:
            </label>
            <input
              {...register("insDescription", { required: true })}
              type="text"
              id="insDescription"
              className="w-full p-2 border border-gray-300 rounded-xl "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="insImage"
              className="block mb-2 font-medium text-gray-700"
            >
              Instructor Photo URL:
            </label>
            <input
              {...register("insImage", { required: true })}
              type="url"
              id="insDesignation"
              className="w-full p-2 border border-gray-300 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {/* Faq adding */}

          <div className="my-10">
            <h2 className="mb-4 text-2xl font-bold">
              Frequently Asked Questions:
            </h2>

            {faqFields.map((faq, index) => (
              <div key={faq.id} className="flex items-center gap-10 mb-4">
                <input
                  type="text"
                  placeholder="Question"
                  {...register(`faqItems.${index}.question`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl "
                />
                <input
                  type="text"
                  placeholder="Answer"
                  {...register(`faqItems.${index}.answer`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl "
                />
                <button
                  type="button"
                  onClick={() => faqRemove(index)}
                  className="mt-2 btn-black"
                >
                  <FiDelete />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => faqAppend({ question: "", answer: "" })}
              className="btn-black"
            >
              <MdAdd /> Add FAQ
            </button>
          </div>

          {/* Add pre requisites */}
          <div className="my-10">
            <h3 className="mb-4 text-2xl font-bold">Add pre requisites:</h3>
            {preFields.map((pre, index) => (
              <div key={pre.id} className="flex items-center gap-5 mb-4">
                <input
                  type="text"
                  placeholder="pre requisites"
                  {...register(`preRequisites.${index}`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => preRemove(index)}
                  className="mt-2 btn-black"
                >
                  <FiDelete />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => preAppend("")}
              className="btn-black"
            >
              <MdAdd /> Add pre requisites
            </button>
          </div>

          {/* Add eligible members */}
          <div className="my-10">
            <h3 className="mb-4 text-2xl font-bold">Who will do the course:</h3>
            {eligibleFields.map((eligible, index) => (
              <div key={eligible.id} className="flex items-center gap-5 mb-4">
                <input
                  type="text"
                  placeholder="Eligible User"
                  {...register(`eligibleUsers.${index}`)} // Use 'eligibleUsers' here
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => eligibleRemove(index)}
                  className="mt-2 btn-black"
                >
                  <FiDelete />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => eligibleAppend("")}
              className="btn-black"
            >
              <MdAdd /> Add Eligible User
            </button>
          </div>

          {/* Add goals */}
          <div className="my-10">
            <h3 className="mb-4 text-2xl font-bold">Course Goals:</h3>
            {goalFields.map((goal, index) => (
              <div key={goal.id} className="flex items-center gap-5 mb-4">
                <input
                  type="text"
                  placeholder="Goals"
                  {...register(`goals.${index}`)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl "
                />
                <button
                  type="button"
                  onClick={() => goalRemove(index)}
                  className="mt-2 btn-black"
                >
                  <FiDelete />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => goalAppend("")}
              className="btn-black"
            >
              <MdAdd /> Add Goal
            </button>
          </div>
        </div>

        {/* Add Collaborators */}
        <div className="flex justify-between">
          <div className="w-1/2 mb-4">
            <label htmlFor="Collaborators" className="mb-4 text-2xl font-bold">
              Course Collaborators:
            </label>
            {/* Selected Collaborators */}
            <div className="mb-2">
              {selectedCollaborators.map((Collaborator, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 mr-2 bg-gray-200 rounded-lg"
                >
                  {Collaborator}
                  <button
                    type="button"
                    onClick={() => removeCollaborators(Collaborator)}
                    className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    X
                  </button>
                </span>
              ))}
            </div>

            {/* Collaborator Input */}
            <div className="flex items-center">
              <input
                type="url"
                id="Collaborators"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-orange"
                value={newCollaborator}
                onChange={handleNewCollaboratorChange}
                placeholder="Enter Collaborators logo URL"
              />
              <button
                type="button"
                onClick={addNewCollaborator}
                className="ml-3 btn-black"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Adding module */}
        <div className="my-10">
          <p className="block mb-1 text-2xl font-semibold">Design Course</p>
          <button
            type="button"
            className="my-2 text-xl font-semibold btn-black"
            onClick={addModule}
          >
            + Add Module
          </button>

          {watchModules.map((module, moduleIndex) => (
            <div
              key={moduleIndex}
              className="p-4 mb-4 border border-gray-300 rounded-xl"
            >
              <div className="flex items-center gap-5 my-5">
                <h2 className="mb-2 text-xl font-semibold">
                  Module {moduleIndex + 1}
                </h2>
                <button
                  type="button"
                  onClick={() => removeModule(moduleIndex)}
                  className="pb-2 text-2xl text-primary"
                >
                  <MdPlaylistRemove />
                </button>
              </div>

              <div className="mb-4">
                <label
                  htmlFor={`modules[${moduleIndex}].title`}
                  className="block mb-1 font-semibold"
                >
                  Module Title:
                </label>
                <input
                  {...register(`modules[${moduleIndex}].title`)}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-xl"
                />
              </div>

              <div className="flex flex-wrap items-center space-x-2">
                <button
                  type="button"
                  className="my-2 btn-black"
                  onClick={() => addContentWithType(moduleIndex, "content")}
                >
                  + Add Content
                </button>
                <button
                  type="button"
                  className="my-2 btn-black"
                  onClick={() => addContentWithType(moduleIndex, "quiz")}
                >
                  + Add Quiz
                </button>
                <button
                  type="button"
                  className="my-2 btn-black"
                  onClick={() => addContentWithType(moduleIndex, "assignment")}
                >
                  + Add Assignment
                </button>
              </div>

              {module.contents &&
                module.contents.map((content, contentIndex) => (
                  <div
                    key={contentIndex}
                    className="p-4 mb-4 border border-gray-300 rounded-xl"
                  >
                    <div className="flex items-center gap-5">
                      <h3 className="mb-2 text-lg font-semibold">
                        {content.type} {contentIndex + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          removeContentWithType(moduleIndex, contentIndex)
                        }
                        className="pb-2 text-primary"
                      >
                        <MdRemoveCircle />
                      </button>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor={`modules[${moduleIndex}].contents[${contentIndex}].title`}
                        className="block mb-1 font-semibold"
                      >
                        {content.type} Title:
                      </label>
                      <input
                        {...register(
                          `modules[${moduleIndex}].contents[${contentIndex}].title`
                        )}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor={`modules[${moduleIndex}].contents[${contentIndex}].url`}
                        className="block mb-1 font-semibold"
                      >
                        Content URL:
                      </label>
                      <input
                        {...register(
                          `modules[${moduleIndex}].contents[${contentIndex}].url`
                        )}
                        type="url"
                        className="w-full p-2 border border-gray-300 rounded-xl"
                      />
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <button type="submit" className="btn-black">
          {isLoading ? (
            <p className="flex items-center gap-2 text-white">
              Uploading{" "}
              <span className="loading loading-spinner text-error"></span>
            </p>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
