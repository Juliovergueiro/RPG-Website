// Audio

//const audio1 = new Audio()

//audio1.src = "./sound/click.wav"

// Manipulação dos Ataques

const { Oie, choiceBtn, choiceBar, choiceSkill, skill, playerBar, attackSkills, reactSkills, specialSkills, supportSkills, enhancementSkills, movementSkills, tacticalSkills, maneuverSkills, actingBtn, playerSpot } = require('./selectors')

import { createTiles, populatePlayerSpots } from './gameSetup.js';

import { choosingSkills } from './domListeners.js';

document.addEventListener("DOMContentLoaded", () => {
    createTiles();
    populatePlayerSpots();
    choosingSkills();
});