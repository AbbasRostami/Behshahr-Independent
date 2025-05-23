import React from "react";
import iconCarrier0 from "./../../../assets/svg/Landing/iconCarrier.svg";
import iconCarrier1 from "./../../../assets/svg/Landing/iconCarrier-1.svg";
import iconCarrier2 from "./../../../assets/svg/Landing/iconCarrier-2.svg";
import iconCarrier3 from "./../../../assets/svg/Landing/iconCarrier-3.svg";
import { useState, useEffect } from "react";
import { getApi } from "../../../core/api/api";

interface StatisticsType {
  newsCount: number;
  courseCount: number;
  studentCount: number;
  teacherCount: number;
}

interface ApiResponse {
  data: StatisticsType;
}
const Statistics: React.FC = () => {
  const [Statistics, setStatistics] = useState<StatisticsType | null>(null);

  const getStatistics = async () => {
    try {
      const path = `/Home/LandingReport`;
      const response = (await getApi({ path })) as ApiResponse;
      if (response) {
        setStatistics(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <div className=" bg-BgGreen mx-16 flex justify-around items-center rounded-3xl h-[230px] dark:bg-gray-800">
      <div className="py-5 text-center text-TextGreen ">
        <img src={iconCarrier1} alt="" />
        <p className="text-slate-700 dark:text-white text-xl ">مقاله آموزشی</p>
        <p className="font-medium text-2xl text-slate-700 dark:text-white">
          {Statistics?.newsCount}
        </p>
      </div>

      <div className="p-5 text-center text-TextGreen">
        <img src={iconCarrier0} alt="" />
        <p className="text-slate-700 dark:text-white text-xl ">دوره آموزشی</p>
        <p className="font-medium text-2xl text-slate-700 dark:text-white">
          {Statistics?.courseCount}
        </p>
      </div>

      <div className="p-5 text-center text-TextGreen">
        <img src={iconCarrier3} alt="" />
        <p className="text-slate-700 dark:text-white text-xl ">دانشجو</p>
        <p className="font-medium text-2xl text-slate-700 dark:text-white">
          {Statistics?.studentCount}
        </p>
      </div>

      <div className="p-5 text-center text-TextGreen">
        <img src={iconCarrier2} alt="" />
        <p className="text-slate-700 dark:text-white text-xl ">
          اساتید حرفه ای
        </p>
        <p className="font-medium text-2xl text-slate-700 dark:text-white">
          {Statistics?.teacherCount}
        </p>
      </div>
    </div>
  );
};

export { Statistics };
