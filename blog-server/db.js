const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');
const faker = require('faker')

db.serialize(function() {
    db.run('DROP TABLE IF EXISTS categories;');
    db.run('create table categories (id INTEGER PRIMARY KEY AUTOINCREMENT , title text, image text);');
    for(let i = 1; i<=10; i++) {
        db.run('INSERT INTO categories (title, image) VALUES (?, ?)', faker.lorem.words(), 'https://fakeimg.pl/200/')
    }
    db.run('drop table if exists posts;');
    db.run('create table posts(id integer primary key autoincrement , title text, image text, categoryId integer, text text);')
    for(let i =1; i<20; i++){
        db.run(
            'INSERT INTO posts (title, image, categoryId, text) VALUES (?,?,?,?)',
            [
                faker.lorem.sentence(),
                'https://fakeimg.pl/400/',
                faker.datatype.number({min: 1, max: 10}),
                faker.lorem.paragraphs()
            ]
        )
    }

});


