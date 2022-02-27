const express = require('express')
const { create } = require('express-handlebars')

const app = express()

const hbs = create({
    partialsDir: ['views/partials'],
    extname: '.hbs',
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static(__dirname + '/public'))
app.use('/css', express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use('/js', express.static(__dirname + "/node_modules/bootstrap/dist/js"))

app.get('/', (req, res) => {
    res.render('dashboard', {
        productos: [
            'Banana',
            'Cebollas',
            'Pimenton',
            'Papas',
            'Lechuga',
            'Tomate',
        ],
    })
})

app.listen(3000, () => {
    console.log('Server ON')
})