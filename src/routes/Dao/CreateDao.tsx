import GradientText from "@components/GradientText";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const CreateDao = () => {
  const inputClass =
    "border rounded-lg w-full h-11 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-black transition duration-500";
  const [members, setMembers] = useState([
    {
      id: 1,
      address: "",
      noOfTokens: 0,
    },
  ]);

  const AddMember = () => {
    setMembers([
      ...members,
      {
        id: members.length + 1,
        address: "",
        noOfTokens: 0,
      },
    ]);
  };

  const RemoveMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div className="my-8">
      <GradientText title="Create a DAO" fontSize="text-3xl" />

      <div className="w-full mt-8">
        <div className="mt-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            DAO Name
          </label>
          <input type="text" placeholder="DAO Name" className={inputClass} />
        </div>
        <div className="mt-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            DAO Description
          </label>
          <input
            type="text"
            placeholder="DAO Description"
            className={inputClass}
          />
        </div>

        <div className="mt-8 bg-gray-50 p-5">
          <GradientText title="Create Token" />
          <div className="flex md:flex-row flex-col space-x-4 mt-3">
            <div className="md:w-1/2 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Token Name
              </label>
              <input
                type="text"
                placeholder="Token Name"
                className={inputClass}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Token Symbol
              </label>
              <input
                type="text"
                placeholder="eg. TEST"
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col space-x-4 mt-5">
            <div className="md:w-1/2 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Total Token Supply
              </label>
              <input
                type="number"
                placeholder="150000"
                className={inputClass}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Quorum
              </label>
              <div className="flex items-center space-x-2">
                <input type="number" placeholder="90" className={inputClass} />
                <span className="text-gray-500 text-xl">%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-xs font-bold">What is Quorum?</p>
            <p className="mt-1 text-xs">
              The minumum percentage of voting power that must vote on a
              proposal for it to be considered. For example, in the US House of
              Representatives, 218 members must be present for a vote. If you
              have a DAO with many inactive members, setting this value too high
              may make it difficult to pass proposals.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <GradientText title="Token Distribution" />
          <p className="font-semibold my-4">Members</p>
          {members.map((member) => (
            <div
              key={member.id}
              className="flex justify-between space-x-4 items-center bg-gray-50 p-4 rounded-lg my-2"
            >
              <input
                type="text"
                placeholder="Member Address"
                className={inputClass}
              />
              <input
                type="number"
                placeholder="No of Tokens"
                className={inputClass}
              />
              <button
                onClick={() => RemoveMember(member.id)}
                className="text-2xl text-red-800"
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
          <button
            onClick={AddMember}
            className="px-3 py-2 text-gray-600 rounded-lg bg-gray-100 mt-3 text-xs font-semibold hover:bg-gray-300 transition duration-500"
          >
            Add Member
          </button>
        </div>
        <button className="bg-dark w-32 h-11 rounded-lg text-white mt-8">
          Create Dao
        </button>
      </div>
    </div>
  );
};

export default CreateDao;
