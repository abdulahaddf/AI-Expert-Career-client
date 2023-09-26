import { useEffect } from "react";

const AlternativeForm = () => {
    // scrollTo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="px-4 pt-2 pb-20 mt-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
            <header className="py-20">
                <h1 className="font-bold text-[35px] text-center">Make an Appointment of Consultancy</h1>
                <p className="text-center">Lorem Ipsum as their default model text, and a search for lorem ipsum dd will uncover </p>
            </header>
            <main className="bg-white px-12 rounded-xl py-[60px] w-[80%] m-auto ">
                <form>
                    <div className="">
                        <label htmlFor="name" className="font-bold">Name*</label> <br />
                        <input placeholder="Enter your name" type="text" name="name" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="">
                            <label htmlFor="email" className="font-bold">email</label> <br />
                            <input placeholder="Enter your email" type="text" name="email" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                        <div className="">
                            <label htmlFor="phone" className="font-bold">phone</label> <br />
                            <input placeholder="Enter your phone number" type="text" name="phone" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="address" className="font-bold">Address</label> <br />
                        <input placeholder="Enter your address" type="text" name="address" className="border px-2 mt-3 py-2 w-full rounded border-[red] " />
                    </div>
                    <div className="mt-8">
                        <label htmlFor="date" className="font-bold">Date of birth</label> <br />
                        <input type="date" name="address" className="border px-2 mt-3 py-2 w-full rounded border-[red] " />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="">
                            <label htmlFor="appointmentDate" className="font-bold">appointment date</label> <br />
                            <input placeholder="Enter your appointment date" type="date" name="appointmentDate" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                        <div className="">
                            <label htmlFor="appointmentTime" className="font-bold">Appointment Time</label> <br />
                            <input type="time" name="phone" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="">
                            <label htmlFor="department" className="font-bold">Department</label> <br />
                            <input placeholder="Enter your department" type="text" name="department" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                        <div className="">
                            <label htmlFor="place" className="font-bold">Place</label> <br />
                            <input type="text" placeholder="Enter your place" name="place" className="border px-2 mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="formFileLg" className="font-bold">Upload File</label> <br />
                        <div className="mb-3">
                            <input
                                className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-[red]  bg-clip-padding px-3 py-[0.32rem] font-bold  text-sm mt-2 leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-[red] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none light:border-neutral-600 light:text-neutral-200 light:file:bg-neutral-700 light:file:text-neutral-100 dark:focus:border-primary"
                                id="formFileLg"
                                type="file" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="formFileLg" className="font-bold">Case Summary</label> <br />
                        <div className="mb-3">
                            <textarea placeholder="Enter your case summary" type="text" name="department" className="border px-2 h-[260px] mt-3 py-2 w-full rounded border-[red]" />
                        </div>
                    </div>
                    <button className="bg-[#F6002C] text-white flex justify-center items-center w-[170px] h-[50px] rounded-lg float-right">Submit</button>
                    <br />
                </form>
            </main>
        </div>
    );
};

export default AlternativeForm;