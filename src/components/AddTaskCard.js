import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { addTask } from "../actions/taskAction";
import { getUsers } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { timeCalculator } from "../utils";
const AddTaskCard = () => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const { allUsers } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      ...data,
      task_time: timeCalculator(data),
      time_zone: 20022,
      is_completed: data["is_completed"] && data["is_completed"] ? 1 : 0,
    };
    console.log(newTask);
    dispatch(addTask(newTask));
    data.task_msg = "";
    data.is_completed = false;
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  //   console.log(allUsers);
  return (
    <div className="max-w-[350px] xl:w-full xl:max-w-[370px] h-max my-3 mx-auto dark:bg-slate-800 shadow-md  rounded md:rounded-md col-span-3 xl:mt-14 xl:sticky xl:top-36">
      <div
        className={`flex px-4 justify-between items-center ${
          isExpanded ? "border-b" : "border-b-0"
        } md:border-b border-b-gray-200 dark:border-b-gray-600`}
      >
        <h5 className="dark:text-gray-200 text-gray-900  font-medium">
          ADD TASK
        </h5>
        <IoAdd className="arrow" onClick={() => setIsExpanded(!isExpanded)} />
      </div>

      <div
        className={`${
          isExpanded ? "block" : "hidden"
        } md:block py-5 px-4 bg-blue-50 h-full space-y-5 dark:bg-slate-800 rounded-l-md rounded-b-md `}
      >
        <div>
          <label htmlFor="taskDescription" className="label">
            Task Description
          </label>
          <div className="flex justify-between items-center bg-white px-2 border border-gray-200 dark:bg-gray-100">
            <input
              type="text"
              id="taskDescription"
              className="outline-none bg-transparent flex-grow"
              {...register("task_msg")}
            />
            <MdOutlineDescription className="p-1 pl-2 w-8 h-8 " />
          </div>
        </div>

        {/* Second part */}
        <div className="flex justify-between items-center w-full">
          <div className="w-[47%]">
            <label htmlFor="taskDate" className="label">
              Date
            </label>
            <div className="flex justify-between items-center bg-white w-full">
              <input
                type="date"
                id="taskDate"
                className="selectInput w-full border border-gray-200"
                {...register("task_date")}
              />
            </div>
          </div>
          <div className="w-[47%]">
            <label htmlFor="taskTime" className="label">
              Time
            </label>
            <div className="flex justify-between items-center bg-white  w-full">
              <input
                type="time"
                id="taskTime"
                className="selectInput w-full border border-gray-200"
                {...register("task_time")}
              />
            </div>
          </div>
        </div>

        {/* Third part */}
        <div>
          <label htmlFor="assignUser" className="label">
            Assign User
          </label>
          <div className="flex justify-between items-center bg-white border border-gray-200">
            <select
              id="assignUser"
              className="selectInput"
              {...register("assigned_user")}
            >
              {allUsers?.data.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Fourth part */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isCompleted"
            {...register("is_completed")}
          />{" "}
          <label htmlFor="isCompleted" className="label">
            is completed
          </label>
        </div>

        {/* Buttons here */}
        <div className="flex justify-end space-x-1 pt-1">
          <button className="bg-transparent text-gray-700 py-1 px-5 cursor-pointer dark:text-gray-100">
            Cancel
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            className="text-white  bg-green-600 hover:bg-green-500 transition-all py-1 px-5 rounded cursor-pointer dark:text-gray-100"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskCard;
