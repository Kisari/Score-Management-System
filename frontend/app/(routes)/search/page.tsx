"use client";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/SideBar/SideBar";
import StudentDetailCard from "@/components/StudentDetailCard/StudentDetailCard";
import { useState } from "react";
import { getScoreBySbd } from "@/app/api/score";
import { GetScoreBySbdOutputDTO } from "@/app/dto/score/getScoreBySbd";
import { errorMessageHandler } from "@/app/utils/errorHandler";

export default function Search() {
    const [searchSbd, setSearchSbd] = useState<string>("");
    const [studentScore, setStudentScore] = useState<GetScoreBySbdOutputDTO>();
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setError(null);
        try {
            const scoreData = await getScoreBySbd(searchSbd);
            setStudentScore(scoreData);
        } catch (err) {
            const message = errorMessageHandler(err);
            setError(message);
        }
    };

    return (
        <div className="flex h-screen flex-col lg:flex-row">
            {/* Sidebar Section */}
            <Sidebar onTag={2}/>
            
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Search and Sidebar */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <div className="flex flex-row justify-between">
                                <h2 className="text-lg font-semibold mb-4">Students</h2>
                                <button className="text-gray-500 hover:text-black focus:outline-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6h.01M12 12h.01M12 18h.01"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    value={searchSbd}
                                    onChange={(e) => setSearchSbd(e.target.value)}
                                    placeholder="Search for students SBD"
                                    className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-black"
                                >
                                    🔍
                                </button>
                            </div>

                            <ul>
                                <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                                    Student 1
                                </li>
                                <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                                    Student 2
                                </li>
                                <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                                    Student 3
                                </li>
                            </ul>
                        </div>

                        {/* Details Section */}
                        <div className="col-span-1 lg:col-span-2 bg-secondary-color p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Details Score</h2>
                            {error && (
                                <p className="text-red-500 mt-4">{error}</p>
                            )}
                            {studentScore ? (
                                <StudentDetailCard scoreData={studentScore}/>
                            ) : (
                                <p className="mt-4">Search for a student to view their details.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
