"use client";

import { GetScoreBySbdOutputDTO } from "@/app/dto/score/getScoreBySbd";
import Image from "next/image";
import { useState } from "react";

interface ScoreTableData {
  scoreData: GetScoreBySbdOutputDTO;
}

const StudentDetailCard = (scoreData: ScoreTableData) => {
  const [selectedTab, setSelectedTab] = useState("Score Result");

  return (
    <div className="max-w-4xl mx-auto bg-secondary-color shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-6 bg-primary-color rounded-md text-secondary-color p-3">
      <Image 
          src="/logo.jpg"
          alt="G-Score Logo"
          width={50}
          height={50}
        />
        <div className="">
          <h2 className="text-xl font-bold">Trisha Berge</h2>
          <p className="text-sm">Class VI | Student ID: F-6522</p>
        </div>
      </div>

      {/* Basic Details */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        <div>
          <p className="font-semibold">Gender:</p>
          <p>Female</p>
        </div>
        <div>
          <p className="font-semibold">Date of Birth:</p>
          <p>29-04-2004</p>
        </div>
        <div>
          <p className="font-semibold">Religion:</p>
          <p>Christian</p>
        </div>
        <div>
          <p className="font-semibold">Blood Group:</p>
          <p>B+</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold">Address:</p>
          <p>1962 Harrison Street, San Francisco, CA 94103</p>
        </div>
      </div>

      <div className="border-b mb-4">
        {["Score Result", "Attendance", "Fees History", "School Bus"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 font-medium ${
              selectedTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>


      <div className="overflow-x-auto shadow-md rounded-lg bg-secondary-color">
      <table className="min-w-full table-auto">
    <thead>
        <tr className="bg-gray-100 text-left">
            {Object.entries(scoreData.scoreData.data.scoreData)
                .filter(([subject]) => subject !== 'sbd' && subject !== 'maNgoaiNgu')
                .map(([subject]) => (
                    <th key={subject} className="px-6 py-3 text-sm font-semibold text-gray-700">
                        {subject.replace(/([A-Z])/g, ' $1')}
                    </th>
                ))}
        </tr>
    </thead>
    <tbody>
        <tr className="border-b">
            {Object.entries(scoreData.scoreData.data.scoreData)
                .filter(([subject]) => subject !== 'sbd' && subject !== 'maNgoaiNgu')
                .map(([subject, score]) => (
                    <td key={subject} className="px-6 py-4 text-sm text-gray-600">
                        {score !== null ? score : 'N/A'}
                    </td>
                ))}
        </tr>
    </tbody>
</table>

</div>



    </div>
  );
};

export default StudentDetailCard;
