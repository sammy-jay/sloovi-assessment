export const timeCalculator = (data) => {
  const time = data.task_time && data.task_time.split(":");
  return time[0] * 3600 + time[1] * 60;
};
