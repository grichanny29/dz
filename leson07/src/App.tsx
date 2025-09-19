




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
	 {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "5 сентября",
    priority: 3,
  },
]
const selectedTaskId=1;
// const  tasks = null
const priorityColors:Record<number, string> = {
  0: "#ffffff",
  1: "#ffd7b5",
  2: "#ffb38a",
  3: "#ff9248",
  4: "#ff6700",
};

function App() {

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
    <div className="tasks-container">
      {tasks.map((task) => (
        <div key={task.id} 
				 className={`task-card ${task.id === selectedTaskId ? "selected" : ""}`}
				 style={{
             backgroundColor:priorityColors[task.priority]}
						 } >
			
          <p style={{textDecorationLine:task.isDone ? "line-through":'none'}}><strong>Заголовок:</strong> {task.title}</p>
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