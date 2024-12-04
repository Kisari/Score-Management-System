"use client";

import Header from "@/components/Header/Header";
import ScoreStatistic from "@/components/ScoreStatistic/ScoreStatistic";
import Sidebar from "@/components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { GetScoreByRangeInputDTO } from "@/app/dto/score/getScoreByRange";
import { getScoreByRange } from "@/app/api/score";
import { errorMessageHandler } from "@/app/utils/errorHandler";
import { ScoreData } from "@/app/dto/score/getScoreByRange";

export default function Report() {

  const [query, setQuery] = useState<GetScoreByRangeInputDTO>({
    subject: 'toan',
    from: -1,
    to: -1,
    page: 0,
    pageSize: 10,
  });

  const [scoreList, setScoreList] = useState<ScoreData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScore() {
      const nextQuery = { ...query, page: query.page + 1 };
      const scoreData = await getScoreByRange(nextQuery);
      setScoreList([...scoreList, ...scoreData.data.scoreData]);
    }

    if (query.from !== -1 && query.to !== -1) {
      try {
        fetchScore();
      } catch (err) {
        const message = errorMessageHandler(err);
        setError(message);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar onTag={3} />

      <div className="flex-1">
        <Header />

        <section className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Score Statistics</h2>
            {error && (
              <p className="text-red-500 mt-4">{error}</p>
            )}
            <ScoreStatistic query={query} setQuery={setQuery} scoreData={scoreList} setScoreData={setScoreList} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Top 10 Students (Group A)</h2>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">Student ID</th>
                  <th className="border border-gray-300 px-4 py-2">Math</th>
                  <th className="border border-gray-300 px-4 py-2">Physics</th>
                  <th className="border border-gray-300 px-4 py-2">Chemistry</th>
                  <th className="border border-gray-300 px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
