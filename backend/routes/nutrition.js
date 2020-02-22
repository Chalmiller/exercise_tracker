const router = require('express').Router();
let Nutrition = require('../models/nutrition.model');

router.route('/').get((req, res) => {
    Nutrition.find()
    .then(nutrition => res.json(nutrition))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);

    const newNutrition = new Nutrition({
        username,
        description,
        calories,
        date
    });

    newNutrition.save()
    .then(() => res.json('Nutrition added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Nutrition.findById(req.params.id)
    .then(nutrition => res.json(nutrition))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Nutrition.findByIdAndDelete(req.params.id)
    .then(() => res.json('Nutrition deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Nutrition.findById(req.params.id)
        .then(nutrition => {
            nutrition.username = req.body.username;
            nutrition.description = req.body.description;
            nutrition.calories = Number(req.body.calories);
            nutrition.date = new Date(req.body.date);

            nutrition.save()
            .then(() => res.json('Nutrition updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
