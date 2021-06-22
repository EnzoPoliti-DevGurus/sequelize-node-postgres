# sequelize-node-postgres


## Installation


```bash
npm install
```
```bash
edit "/config/config.json" with your credentials.
```
```bash
sequelize db:migrate 
```
## Usage

```bash
npm start
```
## End-Points

```code
Tasks 
getTasks = http://localhost:"port"/api/tasks
createTask = http://localhost:"port"/api/task
taskByProyect = http://localhost:"port"/api/taskByProyect/":id"
getOneTask= http://localhost:"port"/api/task/":id"
deleteTask = http://localhost:"port"/api/deleteTask/":id"
```


```code
Projects
getProjects = http://localhost:"port"/api/projects
createProject = http://localhost:"port"/api/project
getOneProject = http://localhost:"port"/api/project/":id"
deleteProject = http://localhost:"port"/api/deleteProject/":id"

```

## About tools
I use sequelize-cli to generate models and migrations whit the command

```bash
sequelize model:generate --name "name" --attributes "atributes"
sequelize db:migrate 
```
