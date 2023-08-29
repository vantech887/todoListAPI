const express = require('express');
const router = express.Router();
const tasks = require('../../tasks');

//get todo tasks
router.get('/', (req, res) => {
	res.json(tasks);
})
//get specific task
router.get('/:id', (req, res) => {
	const found = tasks.some(task => task.id === parseInt(req.params.id));
	if(found){
		res.json(tasks.filter(task => task.id === parseInt(req.params.id)));
	} else{
		res.status(400).json({msg: ` no task with the id of: ${req.params.id}`});
	}
});

//adding new tasks
router.post('/', (req, res) => {
	const newTask = {
		id: tasks.length + 1,
		title: req.body.title,
		completed: req.body.completed
	}

	if(!newTask.title || newTask.title.trim() === ''){
		return res.status(400).json({msg: 'title required'});
	}

	tasks.push(newTask);
	res.json(newTask);
})

module.exports = router;