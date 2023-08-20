import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineMailLock } from "react-icons/md";
import Man2 from "../assets/logo.png";
import PropTypes from "prop-types";
import { IoChevronBackOutline } from "react-icons/io5";

import Instagram from "../components/Instagram";
import Email from "../components/Email";
import { useEffect } from "react";
import axios from "axios";

const Vote = () => {
  const [active, setActive] = useState("initial");
  const [agentName, setAgentName] = useState("");

  useEffect(() => {
    const getUrlParam = (name) => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(name);
    };

    const agent = getUrlParam("name");
    setAgentName(agent);
  }, [agentName]);

  const renderActive = () => {
    switch (active) {
      case "instagram":
        return <Instagram setActive={setActive} />;
      case "email":
        return <Email setActive={setActive} />;
      default:
        return <Initial agentName={agentName} setActive={setActive} />;
    }
  };

  // console.log(voteCount[0].voteCount);

  return (
    <div className="flex flex-col mt-[5rem]">
      <span
        className="w-1/3 pl-5 text-xl font-semibold flex flex-row items-center my-5 cursor-pointer"
        onClick={() => setActive("initial")}
      >
        <IoChevronBackOutline size={25} /> <span>Go Back</span>{" "}
      </span>
      <div className="w-11/12 mx-auto">{renderActive()}</div>
    </div>
  );
};

export default Vote;

const Initial = ({ setActive, agentName }) => {
  const [voteCount, setVoteCount] = useState([]);

  useEffect(() => {
    const getVoteCount = async () => {
      const response = await axios.get(
        "https://my-pisces-api.vercel.app/api/voteCount"
      );
      setVoteCount(response.data);
    };

    getVoteCount();
  }, []);
  return (
    <div className=" flex flex-col items-center gap-5 p-5 bg-amber-50">
      <span className="text-lg text-slate-500 text-center font-bold">
        Please I need your votes
      </span>
      <img src={Man2} alt="" className="w-44" />
      <span className="text-2xl">Pisces Agent Voting</span>
      <div className="flex flex-row items-center gap-5">
        <button
          to="/"
          className="bg-emerald-500 text-white font-bold text-sm flex flex-row items-center gap-3 py-3 px-5 rounded-3xl "
          onClick={() => setActive("instagram")}
        >
          {" "}
          VOTE WITH <BsInstagram size={20} />{" "}
        </button>
        <button
          to="/"
          className="bg-red-500 text-white font-bold text-sm flex flex-row items-center gap-3 py-3 px-5 rounded-3xl "
          onClick={() => setActive("email")}
        >
          VOTE WITH <MdOutlineMailLock size={20} />{" "}
        </button>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-left text-xl font-bold">
          {agentName && agentName}
        </span>
        <span className="text-xl font-semibold text-blue-600">
          Total Votes: {voteCount.length > 0 ? voteCount[0].voteCount : 500} out
          of 2000
        </span>
        <span className="text-xl font-semibold text-slate-600">
          Votes to verification: 1500
        </span>
      </div>
    </div>
  );
};

Initial.propTypes = {
  setActive: PropTypes.func.isRequired,
  agentName: PropTypes.string,
};
