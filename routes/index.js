const express = require('express')
const router = express.Router();
const { createTask, getTasks, getOneTask, deleteTask, getTaskByProject } = require('../controllers/task')
const { getProjects, deleteProject, createProject, getOneProject } = require('../controllers/project');

router.get('/tasks', getTasks);
router.post('/task', createTask);
router.get('/taskByProyect/:projectId', getTaskByProject);
router.get('/task/:id', getOneTask);
router.delete('/deleteTask/:id', deleteTask);

router.get('/Projects', getProjects);
router.post('/project', createProject);
router.get('/project/:id', getOneProject)
router.delete('/deleteProject/:id', deleteProject);

module.exports = router;