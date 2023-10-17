import { useForm, Controller, useFieldArray } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const EditConsultantProfile = () => {
    const [data, setData] = useState([]);
    const { control, handleSubmit, register } = useForm();
  const { fields: recentWorks, append: appendRecentWork, remove: removeRecentWork } = useFieldArray({
    control,
    name: 'recentWorks',
  });
  const { fields: successes, append: appendSuccess, remove: removeSuccess } = useFieldArray({
    control,
    name: 'successes',
  });
  const { fields: experience, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: 'experience',
  });
  const { fields: qualification, append: appendQualification, remove: removeQualification } = useFieldArray({
    control,
    name: 'qualification',
  });
  const { fields: workingWith, append: appendWorkingWith, remove: removeWorkingWith } = useFieldArray({
    control,
    name: 'workingWith',
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };
  const handleAddDate = () => {
    setData({
      ...data,
      availability: [...data.availability, new Date()],
    });
  };
  
  const handleRemoveDate = (index) => {
    const updatedAvailability = data.availability.filter((_, i) => i !== index);
    setData({
      ...data,
      availability: updatedAvailability,
    });
  };
  
  const handleDateChange = (index, newDate) => {
    const updatedAvailability = [...data.availability];
    updatedAvailability[index] = newDate;
    setData({
      ...data,
      availability: updatedAvailability,
    });
  };
  
    return (
        <div>
             <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                />
              )}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                />
              )}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-800">
              Address
            </label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="address"
                  className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                />
              )}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">
              Phone Number
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  id="phone"
                  className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                />
              )}
            />
          </div>
          <div className="mt-8">
          <label className="text-[#707070]">Designation</label>
          <Controller
            name="designation"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            )}
          />
        </div>

        <div className="mt-8">
          <label className="text-[#707070]">Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            )}
          />
        </div>

        <div className="mt-8">
          <label className="text-[#707070]">About</label>
          <Controller
            name="about"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            )}
          />
        </div>
        <div className="mt-8">
  <label className="text-[#707070]">Availability</label>
  <div className="space-y-2">
    {data?.availability?.map((date, index) => (
      <div key={index} className="flex space-x-2">
        <DatePicker
          selected={date}
          onChange={(newDate) => handleDateChange(index, newDate)}
          dateFormat="MM/dd/yyyy"
        />
        <button
          type="button"
          onClick={() => handleRemoveDate(index)}
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={handleAddDate}
    >
      Add Availability Date
    </button>
  </div>
</div>
        <div className="mt-8">
          <label className="text-[#707070]">Recent Works</label>
          {recentWorks?.map((field, index) => (
            <div key={field.id}>
              <Controller
                name={`recentWorks[${index}]`}
                control={control}
                defaultValue={field.value}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                )}
              />
              <button type="button" className='btn-black m-2'  onClick={() => removeRecentWork(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button" className='btn-black m-2'
            onClick={() => appendRecentWork('')}
          >
            Add Recent Work
          </button>
        </div>
        <div className="mt-8">
          <label className="text-[#707070]">Successes</label>
          {successes?.map((field, index) => (
            <div key={field.id}>
              <Controller
                name={`successes[${index}]`}
                control={control}
                defaultValue={field.value}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                )}
              />
              <button type="button" className='btn-black m-2' onClick={() => removeSuccess(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button" className='btn-black m-2'
            onClick={() => appendSuccess('')}
          >
            Add Success
          </button>
        </div>
        <div className="mt-8">
          <label className="text-[#707070]">Experience</label>
          {experience?.map((field, index) => (
            <div key={field.id}>
              <Controller
                name={`experience[${index}]`}
                control={control}
                defaultValue={field.value}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                )}
              />
              <button type="button" className='btn-black m-2' onClick={() => removeExperience(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button" className='btn-black m-2'
            onClick={() => appendExperience('')}
          >
            Add Experience
          </button>
        </div>

        <div className="mt-8">
          <label className="text-[#707070]">Educational Qualification</label>
          {qualification?.map((field, index) => (
            <div key={field.id}>
              <Controller
                name={`qualification[${index}]`}
                control={control}
                defaultValue={field.value}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                )}
              />
              <button type="button" className='btn-black m-2' onClick={() => removeQualification(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button" className='btn-black m-2'
            onClick={() => appendQualification('')}
          >
            Add Qualification
          </button>
        </div>

      

        <div className="mt-8">
          <label className="text-[#707070]">Working With</label>
          {workingWith?.map((field, index) => (
            <div key={field.id}>
              <Controller
                name={`workingWith[${index}]`}
                control={control}
                defaultValue={field.value}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                )}
              />
              <button type="button" className='btn-black m-2' onClick={() => removeWorkingWith(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button" className='btn-black m-2'
            onClick={() => appendWorkingWith('')}
          >
            Add Working With
          </button>
        </div>



          </div>
          <button type="submit" className="btn-add">
          Submit
        </button>
          </form>
        </div>
        </div>
    );
};

export default EditConsultantProfile;