import axios from "axios";

const API = axios.create({
  baseURL: "https://stage.api.sloovi.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user"))?.token
    }`;
  }
  return req;
});

const company_id = JSON.parse(localStorage.getItem("user"))?.company_id;
const subUrl = "/task/lead_465c14d0e99e4972b6b21ffecf3dd691";

export const login = (formData) => API.post("/login", formData);
export const getUsers = () =>
  API.get(`/team?product=outreach&company_id=${company_id}`);

// Task API calls
export const addTask = (newTask) =>
  API.post(`${subUrl}?company_id=${company_id}`, newTask);
export const getAllTasks = () => API.get(`${subUrl}?company_id=${company_id}`);
export const getSingleTask = (task_id) =>
  API.get(`${subUrl}/${task_id}?company_id=${company_id}`);
export const updateTask = (task_id, updatedTask) =>
  API.put(`${subUrl}/${task_id}?company_id=${company_id}`, updatedTask);
export const deleteTask = (task_id) =>
  API.delete(`${subUrl}/${task_id}?company_id=${company_id}`);
