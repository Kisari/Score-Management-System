import Image from "next/image";

const StatsCard = ({ title, value, imageSource }: { title: string; value: string, imageSource: string }) => {
    return (
      <div className="bg-secondary-color p-6 rounded-lg shadow-md flex items-center justify-around">
          <Image 
          src={`${imageSource}`}
          alt="G-Score Logo"
          width={50}
          height={50}
        />
        <div className="flex-1 flex flex-col justify-center ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default StatsCard;
  