import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);


  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const handleDeleteSelected = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => !selectedTaskIds.includes(task.id))
    );
    setSelectedTaskIds([]);
    setEditingTaskId(null); // Close editing input when deleting selected tasks
  };

  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleSaveEdit = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
    setEditingTaskId(null);
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setSelectedTaskIds((prevSelectedTasks) =>
      prevSelectedTasks.filter((id) => id !== taskId)
    );
    setEditingTaskId(null); // Close editing input when deleting a task
  };

  const handleCheckboxChange = (taskId) => {
    setSelectedTaskIds((prevSelectedTasks) => {
      if (prevSelectedTasks.includes(taskId)) {
        return prevSelectedTasks.filter((id) => id !== taskId);
      } else {
        return [...prevSelectedTasks, taskId];
      }
    });
    setEditingTaskId(null); // Close editing input when selecting/unselecting a task
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={selectedTaskIds.includes(task.id)}
              onChange={() => handleCheckboxChange(task.id)}
            />
            {selectedTaskIds.includes(task.id) && editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => handleSaveEdit(task.id, e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id, task.text)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button onClick={() => handleEdit(task.id)}>Edit</button>
              </>
            )}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={handleDeleteSelected}>Delete Selected</button>
    </div>
  );
};

export default TodoList;
