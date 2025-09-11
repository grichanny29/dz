


function App() {
	const tasks = [
		{ id: 1, title: "Купить продукты на неделю", isDone: false },
		{ id: 2, title: "Полить цветы", isDone: true },
		{ id: 3, title: "Сходить на тренировку", isDone: false },
	]

	return (
		<div>

			<div>
				<h1>
					Список Задач
				</h1>
			</div>
			<ul>
				{
					tasks.map((task) => {
						return (
							<li key={task.id}>
								<div>
									{task.title}
									<div>
										<input type="checkbox"></input>
									</div>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default App
