import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// ! Constantes/Variables
const app = express()
const PORT = process.env.PORT
const ORIGIN = process.env.ORIGIN

// ! Middleware
app.use(express.static('./public'))
app.use(express.json())

const corsOptions = {
    origin: ORIGIN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//app.use(cors()) // Habilita a que todos los origines puedan acceder
app.use(cors(corsOptions)) // Habilita a que todos los origines puedan acceder

// ! Rutas
app.get('/', (req, res) => {
    res.send('OK')
})

app.get('/productos', (req, res) => {
    res.json([{ id: 1 }, { id: 2 }, { id: 3 }])
})

// ! Arranque del servidor
app.listen(PORT, (err) => {
    if (err) throw new Error(`No se pudo levantar el servidor -> ${err}`)
    console.log(`Aplicación arrancó -> http://localhost:${PORT}`)
})