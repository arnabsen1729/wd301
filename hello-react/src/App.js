import TaskCard from "./TaskCard";

function App() {
  const tasks = [
    {
      title: "Build the website with static content",
      dueDate: "10th April",
      assigneeName: "Rohit S",
    },
    {
      title: "Add a blog",
      dueDate: "22nd March",
      assigneeName: "Rohit M",
    },
    {
      title: "Design the mockup",
      completedDate: "10th April",
      assigneeName: "Rohit M",
    },
    {
      title: "Get the approval from principal",
      completedDate: "20th April",
      assigneeName: "Ajay S",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Smarter Tasks</h1>
        <h3 className="text-xl text-slate-700">
          <span className="font-bold">Project:</span> Graduation Final Year
          Project (Revamp College Website)
        </h3>
      </div>
      <div className="flex justify-around gap-4">
        <div className="w-1/2 border-2 border-slate-200 rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-slate-500 mb-2">Pending</h2>
          <div>
            {tasks
              .filter((task) => task.dueDate)
              .map((task) => (
                <TaskCard {...task} />
              ))}
          </div>
          <button className="w-full bg-slate-500 text-white px-3 py-1 rounded-md mt-2">
            + New Task
          </button>
        </div>
        <div className="w-1/2 border-2 border-slate-200 rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-slate-500 mb-2">Done</h2>
          <div>
            {tasks
              .filter((task) => task.completedDate)
              .map((task) => (
                <TaskCard {...task} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
