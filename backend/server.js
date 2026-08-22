const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const questionRoutes = require('./routes/questionRoutes');

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes de l'API
app.use('/api/questions', questionRoutes);

// Connexion à MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quizapp';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connecté avec succès !'))
    .catch(err => console.error('Erreur MongoDB :', err));

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur exécuté sur http://localhost:${PORT}`);
});
