const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser')
const app = express()
const port = 3001


const db = new sqlite3.Database('data.db');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/categories/:id', (req, res)=>{
    let id = req.params['id']
    if(id){
        db.get('select * from categories where id = ?', id,  (error, row)=>{
            if(error){
                return res.status(404).send(error.message)
            }
            db.all('select * from posts where categoryId = ?;', id,  (error, rows)=>{
                if(error){
                    return res.status(404).send(error.message)
                }
                row.posts = rows;
                res.json(row)
            })
        })
    }else {
        res.status(404).send()
    }
})

app.get('/categories', (req, res) => {

    db.all('select * from categories;', function (error, rows){
        if(error){
            return res.status(404).send(error.message)
        }
        res.json(rows)
    })
})

app.get('/posts/:id', (req, res)=>{
    let id = req.params['id']
    if(id){
        db.get('select * from posts where id = ?', id,  (error, row)=> {
            if (error) {
                return res.status(404).send(error.message)
            }
            res.json(row)
        });
    } else {
        res.status(404).send()
    }
})

app.post('/posts', (req, res)=>{
    console.log(req.body);
    return res.status(200).send({status: 'Success!!!'})

})

app.get('/posts', (req, res)=>{

    db.all('select * from posts;', function (error, rows){
        if(error){
            return res.status(404).send(error.message)
        }
        res.json(rows)
    })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})