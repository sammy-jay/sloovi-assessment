import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddTaskCard from "./components/AddTaskCard";
import AllTasks from "./components/AllTasks";
import Navbar from "./components/Navbar";
import { login } from "./actions/authAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({
        email: "smithwills1989@gmail.com",
        password: "12345678",
      })
    );
  }, []);

  return (
    <div className="w-full bg-gray-100 min-h-screen dark:bg-slate-900">
      <Navbar />
      <main className="mx-auto w-[90vw] xl:w-[95vw]  py-10 xl:pt-3 xl:grid grid-cols-12 xl:gap-[2rem]">
        {/* Add task card */}
        <AddTaskCard />

        {/* All Tasks */}
        <AllTasks />

        {/* Paginate */}
      </main>
    </div>
  );
}
export default App;
