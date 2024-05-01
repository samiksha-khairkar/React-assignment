import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <>
            <div className='-ml-20'>
                <nav className="bg-gray-800 w-160 -mt-8 -mr-28">
                    <div className=' h-16 relative flex items-center justify-between'>
                        <div>

                        </div>
                        <div className='flex items-center font-sans'>
                            <div>
                                <select className='bg-gray-200 h-[40px] rounded-l-full text-slate-800 pl-4 text-sm'>
                                    <option value="Patients">Patients</option>
                                </select>
                            </div>
                            <div className='bg-white w-60 h-[40px] flex items-center justify-between rounded-r-full text-sm text-gray-400'>
                                <div className='ml-4'>Search</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <div className='bg-green-700 mx-4 rounded-full p-[8px] text-white'>
                                <button>+ Add New</button>
                            </div>

                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5"></span>
                                <BellIcon className="h-6 w-6 alert mr-4" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <div>
                                <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-8">
                                    <span className="absolute -inset-1.5" />
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav >

                <div className='w-screen h-screen flex '>
                    <div className='bg-white w-28 h-screen'>
                        <div className='text-sm text-left font-medium text-gray-400'>
                            Dashboards
                        </div>

                        <div className='font-medium text-sm text-gray-600 bg-white'>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <div>Patients</div>
                            </div>

                            <div className='h-16 w-28 shadow-md bg-green-700 text-white'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                </div>
                                <div>HR</div>
                            </div>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                                    </svg>
                                </div>
                                <div>Labs</div>
                            </div>

                            <div className='text-sm text-left font-medium text-gray-400'>
                                Processes
                            </div>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                    </svg>
                                </div>
                                <div>Pharma</div>
                            </div>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                    </svg>
                                </div>
                                <div>Registration</div>
                            </div>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </div>
                                <div>Consultation</div>
                            </div>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
                                    </svg>
                                </div>
                                <div>Test & Reports</div>
                            </div>

                            <div className='h-16 w-28 shadow-md'>
                                <div className='flex justify-center items-center p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                    </svg>
                                </div>
                                <div>Biliing</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex bg-gray-100 '>
                        <div className='bg-gray-100 w-160 h-screen '>
                            <div className='m-[6px] bg-white h-8 flex items-center text-green-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-[6px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                <h1 className='ml-[6px] font-normal'>Consultants</h1>
                                <br />
                            </div>
                            <div className='-mt-[30px] ml-[12px] text-left'>
                                <div className='text-green-700 text-xl font-bold'>______________</div>
                            </div>

                            <div className='bg-white m-[6px] h-12 flex items-center text-gray-500'>
                                <div className=' flex items-center '>
                                    <button className='mr-8 h-12 bg-green-700 text-white px-4'>Filters</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-700 -ml-[40px]">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <select className='mr-8 border px-4 py-[6px] rounded-full'>
                                    <option value="Select Range">Select Range &nbsp;&nbsp;&nbsp;</option>
                                </select>

                                <input type='radio' id='radio1' className='text-9xl'></input>
                                <label htmlFor="radio1" className='m-4'>Summary</label>
                                <input type='radio' id="radio2" className='ml-8'></input>
                                <label htmlFor="radio2" className='m-4'> Branch Wise</label>
                            </div>



                            <div className='m-[6px] mt-4 h-20 flex justify-between font-sans'>
                                <div className='bg-white w-1/4 mr-8 flex justify-between items-center'>
                                    <div className='w-[6px] h-20 bg-orange-100'></div>
                                    <div className='mr-8'>
                                        <h2 className='text-green-700 font-semibold'>Consultant Count</h2>
                                        <h2 className='text-gray-500 text-xl font-bold'>90 / 900</h2>
                                        <p className='text-sm text-gray-600'>Today/Period</p>
                                    </div>
                                    <div className='ml-8 mr-8 border p-[10px] rounded-full bg-orange-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className='bg-white w-1/4 mr-8 flex justify-between items-center'>
                                    <div className='w-[6px] h-20 bg-slate-100'></div>
                                    <div className='mr-8'>
                                        <h2 className='text-green-700 font-semibold'>Consultant Count</h2>
                                        <h2 className='text-gray-500 text-xl font-bold'>90 / 900</h2>
                                        <p className='text-sm text-gray-600'>Today/Period</p>
                                    </div>
                                    <div className='ml-8 mr-8 border p-[10px] rounded-full bg-slate-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                            <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className='bg-white w-1/4 mr-8 flex justify-between items-center'>
                                    <div className='w-[6px] h-20 bg-green-100'></div>
                                    <div className='mr-8'>
                                        <h2 className='text-green-700 font-semibold'>Consultant Count</h2>
                                        <h2 className='text-gray-500 text-xl font-bold'>90 / 900</h2>
                                        <p className='text-sm text-gray-600'>Today/Period</p>
                                    </div>
                                    <div className='ml-8 mr-8 border p-[10px] rounded-full bg-green-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                            <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                                            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                        </svg>

                                    </div>
                                </div>

                                <div className='bg-white w-1/4 flex justify-between items-center'>
                                    <div className='w-[6px] h-20 bg-violet-100'></div>
                                    <div className='mr-8'>
                                        <h2 className='text-green-700 font-semibold'>Consultant Count</h2>
                                        <h2 className='text-gray-500 text-xl font-bold'>90 / 900</h2>
                                        <p className='text-sm text-gray-600'>Today/Period</p>
                                    </div>
                                    <div className='ml-8 mr-8 border p-[10px] rounded-full bg-violet-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className='p-8 h-screen bg-white m-[6px] mt-4'>
                                <div className='flex justify-between'>
                                    <h1 className='font-medium text-gray-700'>Consultant</h1>
                                    <div className='flex'>
                                        <div className='border border-gray-300 rounded-full p-1 mr-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M12.207 2.232a.75.75 0 0 0 .025 1.06l4.146 3.958H6.375a5.375 5.375 0 0 0 0 10.75H9.25a.75.75 0 0 0 0-1.5H6.375a3.875 3.875 0 0 1 0-7.75h10.003l-4.146 3.957a.75.75 0 0 0 1.036 1.085l5.5-5.25a.75.75 0 0 0 0-1.085l-5.5-5.25a.75.75 0 0 0-1.06.025Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className='border border-gray-300 rounded-full p-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .75.75v12.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className='h-40 w-full flex justify-between'>
                                    <table class=" w-full h-80 table-auto border-collapse border border-slate-500 ...">
                                        <thead>
                                            <tr className='text-gray-600'>
                                                <th className='w-1/4 py-[10px] border border-slate-700 ...'>NAME</th>
                                                <th className='w-1/4 py-[10px] border border-slate-700 ...'>PATIENT COUNT</th>
                                                <th className='w-1/4 py-[10px] border border-slate-700 ...'>LABS</th>
                                                <th className='w-1/4 py-[10px] border border-slate-700 ...'>DIET PLANS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='text-gray-500'>
                                                <td className='border border-slate-700 ...'>John Smith</td>
                                                <td className='border border-slate-700 ...'>12</td>
                                                <td className='border border-slate-700 ...'>3</td>
                                                <td className='border border-slate-700 ...'>6</td>
                                            </tr>
                                            <tr className='text-gray-500'>
                                                <td className='border border-slate-700 ...'>Jane Doe</td>
                                                <td className='border border-slate-700 ...'>8</td>
                                                <td className='border border-slate-700 ...'>2</td>
                                                <td className='border border-slate-700 ...'>4</td>
                                            </tr>
                                            <tr className='text-gray-500'>
                                                <td className='border border-slate-700 ...'>Mark Johnson</td>
                                                <td className='border border-slate-700 ...'>6</td>
                                                <td className='border border-slate-700 ...'>1</td>
                                                <td className='border border-slate-700 ...'>2</td>
                                            </tr>
                                            <tr className='text-gray-500'>
                                                <td className='border border-slate-700 ...'>Mary Lee</td>
                                                <td className='border border-slate-700 ...'>10</td>
                                                <td className='border border-slate-700 ...'>4</td>
                                                <td className='border border-slate-700 ...'>8</td>
                                            </tr>
                                            <tr className='text-gray-500'>
                                                <td className='border border-slate-700 ...'>David Chen</td>
                                                <td className='border border-slate-700 ...'>14</td>
                                                <td className='border border-slate-700 ...'>5</td>
                                                <td className='border border-slate-700 ...'>9</td>
                                            </tr>
                                            <tr className='text-gray-500'>
                                                <td className='border border-slate-700 ...'>David Chen</td>
                                                <td className='border border-slate-700 ...'>14</td>
                                                <td className='border border-slate-700 ...'>5</td>
                                                <td className='border border-slate-700 ...'>9</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}