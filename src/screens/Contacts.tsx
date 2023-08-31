import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {
  RootState,
  addContact,
  editContact,
  deleteContact,
} from "../store/contactsSlice";
import { useSelector } from "react-redux";
import pfp from "../assests/pfp.png";

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector((state: RootState) => state.contacts);
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const status = ["Active", "Inactive"];
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditMode(false);
    setEditIndex(null);
    setFirstName("");
    setLastName("");
    setSelectedOption(null);
  };
  const handleCheckboxChange = (index: number) => {
    setSelectedOption(index === selectedOption ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact = {
      firstName,
      lastName,
      status: selectedOption !== null ? status[selectedOption] : "",
    };

    if (editMode && editIndex !== null) {
      dispatch(editContact({ index: editIndex, updatedContact: newContact }));
    } else {
      dispatch(addContact(newContact));
    }

    setFirstName("");
    setLastName("");
    setSelectedOption(null);

    toggleForm();
  };

  const handleEdit = (index: number) => {
    window.scrollTo(0, 0);
    setEditMode(true);
    setEditIndex(index);

    const contactToEdit = contactsList[index];
    setFirstName(contactToEdit.firstName);
    setLastName(contactToEdit.lastName);
    setSelectedOption(status.indexOf(contactToEdit.status));
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    dispatch(deleteContact(index));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-4">
        <div className="lg:w-[80%] md:w-full sm:w-full  ml-auto  items-top items-center flex flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-9"
            onClick={toggleForm}
          >
            Add Contact
          </button>
          {showForm && (
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Status
                </label>
                <label className="inline-flex items-center">
                  {status.map((item, index) => (
                    <p className="items-center  flex">
                      <Checkbox
                        checked={selectedOption === index}
                        onChange={() => handleCheckboxChange(index)}
                        color="purple"
                        crossOrigin="anonymous"
                        className="rounded-full  active:bg-white  focus:bg-white bg-white focus:outline-none checked:bg-white "
                        icon={
                          <svg
                            width="99px"
                            height="99px"
                            viewBox="-24 -24 72.00 72.00"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#a23ad9"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                                fill="#a23ad9"
                              ></path>{" "}
                            </g>
                          </svg>
                        }
                      />
                      {item}
                    </p>
                  ))}
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {editMode ? "Update Contact" : "Create Contact"}
              </button>
            </form>
          )}
        </div>
        <div className="lg:w-[80%] md:w-full sm:w-full  ml-auto  mb-auto items-top items-start flex flex-col">
          <div className="flex flex-wrap sm:justify-center lg:w-full lg:justify-start md:justify-start mb-9 ">
            {contactsList.map((item, index) => (
              <div
                key={index}
                className="p-4 lg:w-[27%] md:w-[39%]  sm:w-[70%] bg-white border border-gray-300 shadow-lg text-black rounded-lg flex items-start mb-5 mt-5 ml-4 mr-9"
              >
                <div className="flex text-black flex-col w-[80%] h-full w-full">
                  <p className="mb-2 text-[14px]">
                    {item.firstName} {item.lastName}
                  </p>
                  <p className=" text-[13px]">status: {item.status}</p>
                  <p className="text-gray-500 text-[13px]">@Taiyo</p>

                  <button
                    onClick={(e) => handleEdit(index)}
                    className=" w-[50%] text-white rounded-lg text-[12px] flex justify-center bg-green-300 mt-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(index)}
                    className=" w-[50%] text-white rounded-lg text-[12px] flex justify-center  mt-3"
                    style={{ backgroundColor: "#9F91CC" }}
                  >
                    Delete
                  </button>
                </div>
                <div className="border border-white rounded-full shadow-lg w-1/2 overflow-hidden ">
                  <img src={pfp} alt="pfp" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
