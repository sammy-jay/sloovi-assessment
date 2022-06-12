import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { deleteTask, getSingleTask } from "../actions/taskAction";
import { IS_EDITABLE } from "../constants/actionTypes";
import { useDispatch } from "react-redux";

const SingleTask = ({
  id,
  assigned_user,
  task_date,
  task_msg,
  task_time,
  is_completed,
}) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const convertTime = (time) => {
    const date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  return (
    <div className="max-w-[350px] w-[350px] xl:w-full xl:max-w-[350px] h-max mx-auto dark:bg-slate-800 shadow-md  rounded md:rounded-md md:col-span-1">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex px-4 justify-between items-center ${
          isExpanded ? "border-b" : "border-b-0"
        }  border-b-gray-200 dark:border-b-gray-600`}
      >
        <h5
          className={`dark:text-gray-200 text-gray-900  font-medium ${
            is_completed && "line-through"
          }`}
        >
          {task_msg}
        </h5>
        {isExpanded ? (
          <MdOutlineKeyboardArrowUp
            className="arrow"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        ) : (
          <MdOutlineKeyboardArrowDown
            className="arrow"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        )}
      </div>

      <div
        className={`${
          isExpanded ? "block" : "hidden"
        }  py-5 px-4 bg-blue-50 h-full space-y-5 dark:bg-slate-800 rounded-l-md rounded-b-md `}
      >
        <div>
          <label className="label">Task Description</label>
          <div className="text-container">{task_msg}</div>
        </div>

        {/* Second part */}
        <div className="flex justify-between items-center w-full ">
          <div className="w-[47%]">
            <label className="label">Date</label>
            <div className="text-container">
              {task_date?.replaceAll("-", "/")}
            </div>
          </div>
          <div className="w-[47%]">
            <label className="label">Time</label>
            <div className="text-container">{convertTime(task_time)}</div>
          </div>
        </div>

        {/* Third part */}
        <div>
          <label className="label">Assigned User</label>
          <div className="text-container">{assigned_user}</div>
        </div>

        {/* Buttons here */}
        <div className="flex justify-end space-x-1">
          <AiOutlineEdit
            className="arrow w-7 h-7 "
            onClick={() => {
              dispatch(getSingleTask(id));
              dispatch({ type: IS_EDITABLE });
            }}
          />
          <AiOutlineDelete
            onClick={() => dispatch(deleteTask(id))}
            className="arrow w-7 h-7   text-red-600 dark:text-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
