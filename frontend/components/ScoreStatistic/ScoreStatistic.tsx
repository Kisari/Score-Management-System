"use client";

import { GetScoreByRangeInputDTO } from "@/app/dto/score/getScoreByRange";
import "./ScoreStatistic.css";
import { useState } from "react";
import { ScoreData } from "@/app/dto/score/getScoreByRange";

interface ScoreStatisticProps {
    query: GetScoreByRangeInputDTO;
    setQuery: React.Dispatch<React.SetStateAction<GetScoreByRangeInputDTO>>;
    scoreData: ScoreData[];
    setScoreData: React.Dispatch<React.SetStateAction<ScoreData[]>>;
}

const rangeList = [
    { range: "8-10", label: ">= 8" },
    { range: "6-8", label: "6 to 8" },
    { range: "4-6", label: "4 to 6" },
    { range: "0-4", label: "< 4" },
];

export default function ScoreStatistic({
    query,
    setQuery,
    scoreData,
    setScoreData,
}: ScoreStatisticProps) {
    const [activeButton, setActiveButton] = useState<string>("");

    const handleSetSubject = (subject: string) => {
        setQuery({
            ...query,
            subject: subject,
            page: 0,
        });

        setScoreData([]);
    };

    const handleSetRange = (range: string) => {
        setActiveButton(range);
        setQuery({
            ...query,
            from: parseInt(range.split("-")[0]),
            to: parseInt(range.split("-")[1]),
            page: 0,
        });

        setScoreData([]);
    };

    return (
        <div className="bg-secondary-color p-6 rounded-lg shadow flex flex-col space-y-6">
            {/* Score Statistics Section */}
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-4">Score Statistics</h2>

                <div className="mb-4 flex items-center space-x-4">
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-primary-color text-center"
                        >
                            Subject
                        </label>
                        <select
                            id="subject"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => handleSetSubject(e.target.value)}
                        >
                            <option value="toan">Math</option>
                            <option value="ngu_van">Literature</option>
                            <option value="ngoai_ngu">Foreign Language</option>
                            <option value="vat_li">Physics</option>
                            <option value="hoa_hoc">Chemistry</option>
                            <option value="sinh_hoc">Biology</option>
                            <option value="lich_su">History</option>
                            <option value="dia_li">Geography</option>
                            <option value="gdcd">Civic Education</option>
                        </select>
                    </div>

                    <div className="flex space-x-2 flex-1">
                        {rangeList.map((button) => (
                            <button
                                key={button.range}
                                className={`flex-1 px-4 py-2 border-2 transition-all ease-in duration-75 rounded-md ${activeButton === button.range
                                    ? "bg-primary-color text-white"
                                    : "border-primary-color text-primary-color hover:bg-primary-color hover:text-white"
                                    }`}
                                onClick={() => handleSetRange(button.range)}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto shadow-md rounded-lg bg-secondary-color">
  <table className="min-w-full table-fixed">
    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-[150px]">SBD</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Toan</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Ngu Van</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Ngoai Ngu</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Vat Li</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Hoa Hoc</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Sinh Hoc</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Lich Su</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Dia Li</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">GDCD</th>
        <th className="px-6 py-3 text-sm font-semibold text-gray-700">Ma Ngoai Ngu</th>
      </tr>
    </thead>
  </table>

  <div className="overflow-y-auto max-h-80">
    <table className="min-w-full table-fixed">
      <tbody>
        {scoreData.map((score) => (
          <tr key={score.sbd} className="border-b">
            <td className="px-6 py-4 text-sm text-gray-600 w-[150px]">{score.sbd}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.toan}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.nguVan}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.ngoaiNgu}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.vatLi}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.hoaHoc}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.sinhHoc}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.lichSu}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.diaLi}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.gdcd}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{score.maNgoaiNgu}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

            </div>

            {scoreData.length > 0 ? <div className="flex justify-end mt-4">
                <button
                    className="bg-primary-color text-secondary-color px-6 py-2 rounded-md hover:bg-primary-color-dark transition-all w-full"
                    onClick={() => {
                        setQuery({
                            ...query,
                            page: query.page + 1,
                        });
                    }}
                >
                    Add More (10 records)
                </button>
            </div> :
                <div className="flex justify-center mt-4">
                    <p className="text-gray-500">No data</p>
                </div>
            }

            {/* Chart Section */}
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-4">Chart</h2>
                <div className="">
                    {/* Chart Component Here */}
                </div>
            </div>
        </div>
    );
}
