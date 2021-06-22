const db = require('../models');


async function getProjects(req, res) {

    try {
        const projects = await db.Project.findAll();
        res.json({
            data: projects
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'something goes wrong'
        });
    }
};

async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await db.Project.create({
            name,
            priority,
            description,
            deliverydate
        });
        if (newProject) {
            return res.json({
                message: 'New Project created',
                data: newProject
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }
    res.json('received');
};

async function getOneProject(req, res) {
    const { id } = req.params;
    try {
        const project = await db.Project.findOne({
            where: {
                id
            },
            include: [{ model: db.Task }]
        })
        res.json(project);
    } catch (error) {
        console.log(error);
    }
}

async function deleteProject(req, res) {
    const { id } = req.params;
    try {
        await db.Task.destroy({
            where: {
                projectId: id
            }
        });
        const deleteRowsCount = await db.Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Project Deleted',
            count: deleteRowsCount
        })
    } catch (error) {
        res.json({
            message: 'Delete Failed.',
            data: {}
        });
    }
};

module.exports = { getProjects, createProject, getOneProject, deleteProject }