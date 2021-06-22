
const db = require('../models')

async function createTask(req, res) {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await db.Task.create({
      projectId,
      name,
      done
    });
    res.json({ message: 'New Task created', newTask });
  }
  catch (error) {
    console.log(error);
  }
};

async function getTasks(req, res) {
  try {
    const tasks = await db.Task.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      order: [
        ['id', 'DESC']
      ]
    });
    res.json({
      tasks
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: 'something goes wrong'
    });
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    const taskDeleted = await db.Task.destroy({
      where: { id }
    });
    res.json({
      message: 'Task Deleted'
    })
  } catch (e) {
    console.log(e);
  }
};

async function getOneTask(req, res) {
  const { id } = req.params;
  try {
    const task = await db.Task.findOne({
      where: { id },
      attributes: ['id', 'projectId', 'name', 'done']
    });
    res.json({ task });
  } catch (e) {
    console.log(e);
  }
};

async function getTaskByProject(req, res) {
  const { projectId } = req.params;
  try {
    const tasks = await db.Task.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      where: { projectId }
    });
    res.json({
      tasks
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createTask, getTasks, deleteTask, getOneTask, getTaskByProject }