const express = require('express')
const cors = require('cors')

// PARAM API
const app = express()

// J'aime les saucisses
console.log("j'aime les saucissses")

// J'aime aussi les baleines
console.log("j'aime les saucissses")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// PARAM ROUTER
/******************************/
/*** Mise en place du routage */

app.get('/', (req, res) => res.send(`EZ PZ LZ!`))

app.get('/coffee', (req, res) => res.status(418).send('Coffe time, Dujardin respect'))

app.get('*', (req, res) => res.status(501).send('What the hell are you doing !?!'))


// START API SERVER

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun !`)
})

module.exports = server
