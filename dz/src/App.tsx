


import { useState } from "react";
import "./App.css";


const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
		priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
		 priority: 1,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
	   priority: 0
  },
	
]


const priorityColors:Record<number, string> = {
  0: "#ffffff",
  1: "#ffd7b5",
  2: "#ffb38a",
 
};

function App() {
const[selectedTaskId,setSelectedTaskId]= useState<number|null>(null)

	if( tasks===null ){
		return(
		<div>
			<span>Loading</span>
		</div>
		)
	}
	if( tasks.length === 0 ){
		return(
		<div>
			<span>Задачи отсутсвуют</span>
		</div>
		)
	}
	
  return (
    <div  className="tasks-container">
			<button onClick={()=>{
				setSelectedTaskId(null)
			}}>Сбросить выделение</button>
      {tasks.map((task) => (
        <div  key={task.id} 
			      className={"task-card" + (task.id === selectedTaskId ? " selected" : "")}
				 style={{
             backgroundColor:priorityColors[task.priority]}
						 } 
						 onClick={()=>{
							setSelectedTaskId(task.id)
						 }}
						 >
			       
          <p style={{textDecorationLine:task.isDone ? "line-through":'none'}}> <strong>Заголовок:</strong> {task.title}</p>
          <p>
            <strong>Статус:</strong>{" "}
            <input type="checkbox" checked={task.isDone} readOnly />
          </p>
          <p><strong>Дата создания задачи:</strong> {task.addedAt}</p>
        </div>
      ))}
    </div>
  );
}


export default App;
