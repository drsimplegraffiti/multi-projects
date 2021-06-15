const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const players = require('../../Players');


// All members route -GET
router.get('/', (req, res) => {
    res.json(players);
})

// Get individual members
router.get('/:id', (req, res) => {
    const found = players.some(player => player.id === parseInt(req.params.id));

    if (found) {
        res.json(players.filter(player => player.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ message: `No player with the id of ${req.params.id}` })
    }

})

// Create Players
router.post('/', (req, res) => {
    const newPlayer = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newPlayer.name || !newPlayer.email) {
        res.status(400).json({ message: "please fill a name or an email" })
    }

    players.push(newPlayer);
    res.json(players);
})


// Update players
router.put('/:id', (req, res) => {
    const found = players.some(player => player.id === parseInt(req.params.id));

    if (found) {
        const updPlayer = req.body;
        players.forEach(player => {
            if (player.id === parseInt(req.params.id)) {
                player.name = updPlayer.name ? updPlayer.name : player.name;
                player.email = updPlayer.email ? updPlayer.email : player.email;
                res.json({ message: 'players updated', players })
            }
        });

    } else {
        res.status(400).json({ message: `No player with the id of ${req.params.id}` })
    }
})


// Delete players
router.delete('/:id', (req, res) => {
    const found = players.some(player => player.id === parseInt(req.params.id));

    if (found) {
        res.json({ message: 'Member deleted', players: players.filter(player => player.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ message: `No player with the id of ${req.params.id}` })
    }

})


module.exports = router;