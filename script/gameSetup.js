export function createTiles() {
    const map = document.querySelector('.map');

    for (let tiles = 0; tiles < 120; tiles++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        map.appendChild(tile);
    }
}

export function populatePlayerSpots() {
    const playerSpot = document.querySelectorAll('.player-spot');

    playerSpot.forEach(pSpot => {
        pSpot.innerHTML = `
            <div class="col-2 player-avatar">
                <div class="avatarp1"></div>
            </div>
            <div class="col-2 flex-fill player-bar">
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
        `;
    });
}