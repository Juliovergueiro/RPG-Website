const { Oie, choiceBtn, choiceBar, choiceSkill, skill, playerBar, attackSkills, reactSkills, specialSkills, supportSkills, enhancementSkills, movementSkills, tacticalSkills, maneuverSkills, actingBtn, playerSpot } = require('./selectors')

export function choosingSkills() {

choiceSkill.forEach(choice => {

choice.addEventListener('click', (event) => {

skill.forEach(eachSkill => {

console.log(eachSkill)

eachSkill.classList.add('hidden')

if(event.target.textContent.includes("Action")){

attackSkills.forEach(attacks => {

attacks.classList.remove('hidden')
})

}

})

})

})

}