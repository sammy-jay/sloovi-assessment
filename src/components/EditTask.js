import React, { useState, useEffect } from "react";
import { MdOutlineDescription } from "react-icons/md";
import { TiTimesOutline } from "react-icons/ti";
import { updateTask } from "../actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import { IS_EDITABLE } from "../constants/actionTypes";
import { timeCalculator } from "../utils";

const EditTask = () => {
  const dispatch = useDispatch();

  const { isEditable, task } = useSelector((state) => state.tasks);
  const { allUsers } = useSelector((state) => state.auth);

  const [updatedTask, setUpdatedTask] = useState({
    task_msg: task?.task_msg,
    task_date: task?.task_date,
    task_time: task?.task_time,
    time_zone: task?.time_zone,
    is_completed: task?.is_completed === 1 ? true : false,
    assigned_user: task?.assigned_user,
  });
  const handleChange = (e) => {
    setUpdatedTask({ ...updateTask, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const reUpdatedTask = {
      ...updatedTask,
      //   task_time: timeCalculator(updatedTask.task_time),
      is_completed: updateTask.is_completed ? 1 : 0,
    };
    dispatch(updateTask(task.id, reUpdatedTask));
    dispatch({ type: IS_EDITABLE });
  };

  return (
    <div
      className={`${
        isEditable ? "block" : "hidden"
      } fixed top-0 bottom-0  left-0 right-0 bg-[rgba(0,0,0,0.7)] z-20`}
    >
      <div
        className={`max-w-[350px] h-max mx-auto dark:bg-slate-800 shadow-md  rounded md:rounded-md my-36`}
      >
        <div
          className={`flex px-4 justify-between items-center  border-b md:border-b border-b-gray-200 dark:border-b-gray-600`}
        >
          <h5 className="text-gray-200   font-medium">UPDATE TASK</h5>
          <TiTimesOutline
            className="arrow hover:rotate-180 duration-700 transition-all text-gray-200 dark:text-gray-200"
            onClick={() => dispatch({ type: IS_EDITABLE })}
          />
        </div>

        <div
          className={`block md:block py-5 px-4 bg-blue-50 h-full space-y-5 dark:bg-slate-800 rounded-l-md rounded-b-md `}
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
                value={updatedTask?.task_msg}
                onChange={handleChange}
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
                  value={updatedTask?.task_date}
                  onChange={handleChange}
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
                  value={updatedTask?.task_time}
                  onChange={handleChange}
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
                value={updatedTask?.assigned_user}
                onChange={handleChange}
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
              value={updatedTask?.is_completed}
              onChange={handleChange}
            />{" "}
            <label htmlFor="isCompleted" className="label">
              is completed
            </label>
          </div>

          {/* Buttons here */}
          <div className="flex justify-end space-x-1 pt-1">
            <button
              onClick={handleSubmit}
              className="text-white  bg-green-600 hover:bg-green-500 transition-all py-1 px-5 rounded cursor-pointer dark:text-gray-100"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
