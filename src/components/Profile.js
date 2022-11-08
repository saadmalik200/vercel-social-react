import React, { useContext, useState } from "react";
import { AppContext } from "./Context";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const Profile = () => {
  const { state, dispatch } = useContext(AppContext);
  const [localState, setLocalState] = useState({
    ...state.user,
  });

  console.log(localState);
  const handleChange = (e) => {
    setLocalState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    dispatch({ type: "userUpdated", payload: { ...localState } });
    alert("Profile Saved");
  };

  return (
    <div className="flex items-center min-h-[calc(100vh-100px)] justify-center flex-col p-[20px] w-full bg-slate-500">
      <form
        action=""
        onSubmit={handleClick}
        className="flex flex-col gap-[20px]"
      >
        <div className="flex gap-[10px] items-center">
          <FaUserAlt className="text-white text-[1rem]" />
          <input
            className="p-[5px]"
            name="name"
            value={localState.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-[10px] items-center">
          <AiFillPhone className="text-white text-[1rem]" />
          <input
            name="phone"
            value={localState.phone}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Profile;
