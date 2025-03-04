class Skill{
    constructor(cost, damage, power){
        this.cost = cost;
        this.damage = damage;
        this.power = power;
}
}

class Character{
    constructor(name, level, str, vig, dex, agi, rfx, acu, con, spi){
        this.name = name;
        this.level = level;
        this.str = str;
        this.vig = vig;
        this.dex = dex;
}
}

const Azul = new Skill(10, 7, 2.5)
const Slash = new Skill(5, 5, 2)

let Attacking = false;
let Reacted = false;
let Damage = Slash.damage * Slash.power