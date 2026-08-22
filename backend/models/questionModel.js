const express = require('express');
const router = express.Router();
const Question = require('../models/questionModel');

// Récupérer toutes les questions du jeu
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la récupération des questions',
            error: error.message
        });
    }
});

// Ajouter une question au jeu
router.post('/', async (req, res) => {
    try {
        const question = new Question({
            text: req.body.text,
            answers: req.body.answers,
            correctAnswerIndex: req.body.correctAnswerIndex
        });

        const nouvelleQuestion = await question.save();

        res.status(201).json(nouvelleQuestion);
    } catch (error) {
        res.status(400).json({
            message: 'Erreur lors de la création de la question',
            error: error.message
        });
    }
});

module.exports = router;
