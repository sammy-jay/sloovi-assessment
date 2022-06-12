import React, { useState, useEffect } from "react";
import SingleTask from "./SingleTask";
import { getAllTasks } from "../actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "./EditTask";
const AllTasks = () => {
  const dispatch = useDispatch();
  const { loading, tasks, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);
  // console.log(tasks);

  const makeDisplay = () => {
    if (loading) {
      return (
        <h1 className="text-center mt-16 text-3xl dark:text-gray-200 text-gray-900">
          Loading Tasks...
        </h1>
      );
    } else {
      return (
        <section className="flex flex-wrap justify-around space-y-4 md:grid md:grid-cols-2 xl:grid-cols-3 md:space-y-0 md:gap-4 relative">
          {tasks && tasks.map((task) => <SingleTask key={task.id} {...task} />)}
        </section>
      );
    }
  };
  return (
    <div className="col-span-9 mt-[4rem] xl:mt-0">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-200 text-gray-900 mb-5">
        All Tasks
      </h2>
      {makeDisplay()}
      <EditTask />
    </div>
  );
};

export default AllTasks;
