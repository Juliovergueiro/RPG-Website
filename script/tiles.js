

// DOM

choiceBtn.addEventListener('click', () => {

choiceBar.classList.toggle('hidden')

})

document.addEventListener('click', () => {

if(!choiceBar.classList.contains('hidden')){

document.addEventListener('click', () => {

choiceBar.classList.toggle('hidden')

})

}

})

skill.forEach(skillClicked => {

skillClicked.addEventListener('click', () => {

})

})

const playerSpot = document.querySelectorAll('.player-spot')

console.log(`${playerSpot}`);

playerSpot.forEach(pSpot => {

pSpot.innerHTML = `
                    <div class="col-6 player-avatar">
                        <div class="avatarp1"></div>
                    </div>
                    <div class="col-6 flex-fill player-bar">
                        <div class="player-info">Gojo Kazuki, Lv. 17</div>
                        <div class="hp-spot">
                            <div class="hp-info">100</div>
                            <div class="hp-container">
                                <div class="hp-bar"></div>
                                <div class="hp-grey"></div>
                            </div>
                        </div>
                        <div class="mp-spot">
                            <div class="mp-info">100</div>
                            <div class="mp-container">
                                <div class="mp-bar"></div>
                                <div class="mp-grey"></div>
                            </div>
                        </div>
                        <div class="ap-spot">
                            <div class="ap-info">5</div>
                            <div class="ap-container">
                                <div class="ap-bar"></div>
                                <div class="ap-grey"></div>
                            </div>
                        </div>
                    </div>
`

})

attackSkills.forEach(attacks => {

attacks.addEventListener('click', () => {

Attacking = true;

playerBar.forEach(players => {

players.style.cursor = "pointer"

players.addEventListener('hover', () => {

players.style.background = "red"

})

})

})

})

playerBar.forEach(player => {
  player.addEventListener('click', async function (event) {
    let targetPlayer = event.target.closest('.player-bar'); // Ensure we get the correct player element

    player.onclick = audio1.play()

    if (!targetPlayer || !Attacking) return; // Exit if no valid player-bar or not attacking

  await waitForReaction() // O código abaixo do await só vai ser realizado se a promessa do waitForReact retornar um resolve

    let HP = targetPlayer.querySelector('.hp-number');
    let HpBar = targetPlayer.querySelector('.hp-bar');
    let Log = document.querySelector('#log-container')
    let initialHP = Number(HP.textContent);
    let valueHP = initialHP;

    let interval = setInterval(() => {
      if (valueHP > initialHP - DamageFormula()) {
        valueHP--;
        HP.textContent = valueHP;
        Attacking = false;
      } else {
        clearInterval(interval);
        let HPPercentage = (valueHP / 150) * 100;
        HpBar.style.width = `${HPPercentage}%`;

        const logText = document.createElement("div")
        logText.classList.add("log-text")
        logText.textContent = "oi"
        Log.appendChild(logText)
      }
    }, 30);
  });
});

async function waitForReaction() {

let overlay = document.querySelector('.overlay')
let modal = document.querySelector('.modal')

overlay.classList.toggle('hidden')
modal.classList.toggle('hidden')

return new Promise((resolve) => {

// Se waitForReaction for invocado sem resolver, o await não vai esperar por uma outra função/outro momento, por isso é necessário colocar o reacting aqui

reactSkills.forEach(reacting => {

reacting.addEventListener('click', () => {

overlay.classList.add('hidden')
modal.classList.add('hidden')

resolve()

})
})

})

}

function DamageFormula() {

return Damage + 1

}

// Dices

// generateTiles

for(let tiles = 0; tiles < 168; tiles++){

const tile = document.createElement('div')
tile.classList.add('tile')
}