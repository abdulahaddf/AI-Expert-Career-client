import { useForm, Controller, useFieldArray } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import UseUser from '../../hooks/useUser';
import Loader from '../../components/common/loader/Loader';
import { CiSquareRemove } from 'react-icons/ci';

const EditConsultantProfile = () => {
    const [userinfo, isLoading, refetch] = UseUser();
// console.log(userinfo)
  
    const daysOfWeek = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ];
    const servicesOptions = ['Research', 'Career Consulting', 'Project'];

    const { control, handleSubmit, register,getValues } = useForm({
            defaultValues: {
            displayName: userinfo?.displayName,
            email: userinfo?.email,
            phone: userinfo?.phone,
            designation: userinfo?.designation,
            description: userinfo?.description,
            about: userinfo?.about,
            recentWorks: userinfo?.recentWorks,
            successes: userinfo?.successes,
            experience: userinfo?.experience,
            qualification: userinfo?.qualification,
            availability: userinfo?.availability,
            selectedDays: userinfo?.selectedDays,
            workingWith: userinfo?.workingWith,
        },
      });

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


  const onSubmit = (data) => {
    console.log('Form Data:', data);
    const { name, email, phone, designation, description, about, recentWorks, successes, experience, qualification, availability, } = data;
    const selectedDays = daysOfWeek.filter((day) => getValues(`availability.${day}`));
    const workingWith = servicesOptions.filter((service) => getValues(`services.${service}`));
    // console.log('Selected Days:', selectedDays);
    const profile = {
        displayName: name, 
        email : userinfo.email, 
        phone, 
        designation, 
        description, 
        about, 
        recentWorks, 
        successes, 
        experience, 
        qualification, 
        availability, 
        selectedDays, 
        workingWith}
    axios
    .patch(
      `http://localhost:5000/consultantinfoupdate/?email=${userinfo?.email}`,
      profile
    )
    .then((res) => {
      if (res.data.modifiedCount > 0) {
        
        // reset(); // Reset the form
        toast.success("Profile updated successfully")
        // refetch();
      } else if (res.data.modifiedCount === 0 || res.data.matchedCount > 1) {
        
        toast.error("Profile is not updated")
      }
    })
    .catch((err) => console.log(err));
  };












  if(!userinfo) return <Loader/>
    return (
        <div>
             <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8 space-y-4">
          <div className="">
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
                  defaultValue={userinfo?.displayName}
                  className="block w-full px-4 py-2 mt-2 border rounded-lg"
                />
              )}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="email"
                  value={userinfo?.email}
                  className="block w-full px-4 py-2 mt-2 border rounded-lg"
                />
              )}
            />
           
          </div>
         

          <div className="">
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
                  className="block w-full px-4 py-2 mt-2 border rounded-lg"
                />
              )}
            />
          </div>
          <div className="">
          <label className="block text-sm font-semibold text-gray-800">Designation</label>
          <Controller
            name="designation"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="block w-full px-4 py-2 mt-2 border rounded-lg"
              />
            )}
          />
        </div>

        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                type="text"
                className="block w-full px-4 py-2 mt-2 border rounded-lg"
              />
            )}
          />
        </div>

        <div className="">
          <label className="block text-sm font-semibold text-gray-800">About</label>
          <Controller
            name="about"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                type="text"
                className="block w-full px-4 py-2 mt-2 border rounded-lg"
              />
            )}
          />
        </div>
        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Availability</label>
          <div className="space-y-2 grid grid-cols-3">
            {daysOfWeek.map((day) => (
              <div key={day} className="flex items-center gap-2 ">
                <Controller
                  name={`availability.${day}`}
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="checkbox"
                        className='checkbox checkbox-xs'
                      />
                      <label>
                        {day}
                      </label>
                    </>
                  )}
                />
              </div>
            ))}
          </div>
        </div>


        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Working With</label>
          <div className="space-y-2">
            {servicesOptions.map((service) => (
              <div key={service} className="flex items-center gap-2">
                <Controller
                  name={`services.${service}`}
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="checkbox"
                        className='checkbox checkbox-xs'
                      />
                      <label>
                        {service}
                      </label>
                    </>
                  )}
                />
              </div>
            ))}
          </div>
        </div>





        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Recent Works</label>
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
                    className="block w-full px-4 py-2 mt-2 border rounded-lg"
                  />
                )}
              />
              <button type="button" className=' m-2'  onClick={() => removeRecentWork(index)}>
                <CiSquareRemove className='text-2xl'/>
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
        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Successes</label>
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
                    className="block w-full px-4 py-2 mt-2 border rounded-lg"
                  />
                )}
              />
              <button type="button" className='m-2' onClick={() => removeSuccess(index)}>
                <CiSquareRemove className='text-2xl'/>
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
        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Experience</label>
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
                    className="block w-full px-4 py-2 mt-2 border rounded-lg"
                  />
                )}
              />
              <button type="button" className=' m-2' onClick={() => removeExperience(index)}>
                <CiSquareRemove className='text-2xl'/>
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

        <div className="">
          <label className="block text-sm font-semibold text-gray-800">Educational Qualification</label>
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
                    className="block w-full px-4 py-2 mt-2 border rounded-lg"
                  />
                )}
              />
              <button type="button" className=' m-2' onClick={() => removeQualification(index)}>
                <CiSquareRemove className='text-2xl'/>
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