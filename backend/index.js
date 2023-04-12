const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const UserRoutes = require('./db/routes/userRoute')
const StudentsRoutes = require('./db/routes/studentsRoute')
const MaterialsRoutes = require('./db/routes/materialsRoute')

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.static('public'))

//Routes
app.use('/users', UserRoutes)
app.use('/students', StudentsRoutes)
app.use('/materials', MaterialsRoutes)

conn
    .sync()
    .then(() => {
        app.listen(5000)
    })
    .catch((err) => console.log(err))

    