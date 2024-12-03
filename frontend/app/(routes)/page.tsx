import Chart from "@/components/Chart/Chart";
import EventCalendar from "@/components/EventCalendar/EventCalendar";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/SideBar/SideBar";
import StatsCard from "@/components/StatsCard/StatsCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar onTag={1} />

      <div className="flex-1">
        <Header />
        
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <StatsCard title="Students" value="12478" imageSource="/logo.jpg" />
          <StatsCard title="Teachers" value="478" imageSource="/logo.jpg" />
          <StatsCard title="Parents" value="8908" imageSource="/logo.jpg" />
          <StatsCard title="Earnings" value="$42.8k" imageSource="/logo.jpg" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
          <div className="col-span-1">
            <Chart />
          </div>
          <div className="col-span-1">
            <EventCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}
