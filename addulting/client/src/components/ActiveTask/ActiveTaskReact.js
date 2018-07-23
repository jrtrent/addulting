class TaskSubejectRow extends React.Component {
	render() {
		const subject =this.props.subject.title;
		return (
			<tr>
				<th colspan="2">
				{subject}
			</th>
			</tr>
		);
	}
}

class TaskRow extends React.Component {
	render() {
		const task = this.props.task;
		const name = task.isDone ?
		task.title:
		<span style={{color: 'red'}}>
		{task.title}
		</span>

		return (
			<tr>
				<td>{task.title}</td>
				<td>{task.isDone}</td>
			</tr>
		);
	}
}

class TaskTable extends React.Componoent {
	render() {
		const rows =[];
		let lastSubject =null;

		this.props.tasks.forEach((task) =>{
			if(task.subject !== lastSubject) {
				rows.push(
					<TaskSubejectRow
					category={task.subject}
					key={task.subject}/>
				);
			}
			rows.push(
				<TaskSubejectRow
				category={task.subject}
				key={task.subject}/>
			);
			lastSubject = task.subject;
		});
		return (
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
				</table>
		);
		
	}
}

class ActiveTaskTable extends React.Component {
	render() {
		return(
			<div>
				<TaskTable tasks={this.props.tasks} />
			</div>
		)
	}

}


 export default ActiveTaskTable;