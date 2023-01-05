import React from 'react'
import 'animate.css';

const Card = ({ mytitle, mybody, type = false }) => {

    console.log("mytitle: " + mytitle)
    return (
        type == "amazon" ?
            (
                <div className="m-auto ml-96 my-10">
                    {/* <!-- This is an example component --> */}
                    <div className="max-w-2xl mx-auto animate__animated animate__backInRight">

                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-100">
                            <div className="p-5 ">
                                <a href="#">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{mytitle}</h5>
                                </a>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{mybody}</p>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Daha fazla oku..
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div className="m-auto mr-96 my-10">
                    {/* <!-- This is an example component --> */}
                    <div className="max-w-2xl mx-auto animate__animated animate__backInRight">

                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-100">
                            <div className="p-5 ">
                                <a href="#">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{mytitle}</h5>
                                </a>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{mybody}</p>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Siteye Git
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )
    )
}

export default Card