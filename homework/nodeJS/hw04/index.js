const fs = require('fs');
const path = require('path');
const joi = require('joi');


/**
 * Схема валидации пользователя
 */
const userSchema = joi.object({
    firstName: joi.string().min(2).required(),
    secondName: joi.string().min(2).required(),
    age: joi.number().min(0).required(),
    city: joi.string().min(2)
})

const express = require('express');
const app = express();

const userPath = path.join(__dirname, 'users.json');

app.use(express.json());


/**
 * Получение списка всех пользователей
 */
app.get('/users', (req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(userPath, 'utf8'));
        res.send({ users });
    } catch (error) {
        res.send({ error: error });
    }
});


/**
 * Получение конкретного пользователя по ID
 */
app.get('/users/:id', (req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(userPath, 'utf8'));
        const findUser = users.find((user) => user.id === +req.params.id);

        res.send({ user: findUser ? findUser : null });
    } catch (error) {
        res.send({ error: error });
    }
});


/**
 * Добавление пользователя
 */
app.post('/users', (req, res) => {
    const result = userSchema.validate(req.body);

    if (result.error) {
        return res.status(404).send({ error: result.error.details });
    };

    try {
        const users = JSON.parse(fs.readFileSync(userPath, 'utf8'));
        const uniqueId = 1 + Math.max.apply(null, users.map((user) => user.id));

        users.push({
            id: uniqueId,
            ...req.body
        });

        fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
        res.send({ id: uniqueId });
    } catch (error) {
        res.send({ error: error });
    }
});


/**
 * Изменение конкретного пользователя по ID
 */
app.put('/users/:id', (req, res) => {
    const result = userSchema.validate(req.body);

    if (result.error) {
        return res.status(404).send({ error: result.error.details });
    };

    try {
        const users = JSON.parse(fs.readFileSync(userPath, 'utf8'));
        const findUser = users.find((user) => user.id === +req.params.id);

        if (findUser) {
            findUser.firstName = req.body.firstName;
            findUser.secondName = req.body.secondName;
            findUser.age = req.body.age;
            findUser.city = req.body.city;
        }

        fs.writeFileSync(userPath, JSON.stringify(users, null, 2))
        res.send({ user: findUser ? findUser : null });
    } catch (error) {
        res.send({ error: error });
    }
});


/**
 * Удаление конкретного пользователя по ID
 */
app.delete('/users/:id', (req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(userPath, 'utf8'));
        const findUserId = users.findIndex((user) => user.id === Number(req.params.id));

        if (findUserId !== -1) {
            users.splice(findUserId, 1);
            fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
        }

        res.send({ userId: findUserId !== -1 ? req.params.id : null });
    } catch (error) {
        res.send({ error: error });
    }
});


app.listen(3000, () => {
    console.log('Сервер запущен.');
});
