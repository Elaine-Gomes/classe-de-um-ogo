class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.fatigueLevel = 0;
        this.heroicAttack = '';
    }

    attack() {
        const attacks = {
            mago: 'magia',
            guerreiro: 'espada',
            monge: 'artes marciais',
            ninja: 'shuriken',
        };

        this.heroicAttack = attacks[this.type];
        this.fatigueLevel += 5;
        this.rest();
    }

    rest() {
        if (this.fatigueLevel >= 50) {
            console.log(`O Herói ${this.name} está descansando.`);
        } else {
            console.log(`O ${this.type} atacou usando ${this.heroicAttack}.`);
        }
    }
}

const guerreiro = new Hero('Ironclad', 52, 'guerreiro');
const ninja = new Hero('Shadowblade', 130, 'ninja');

ninja.attack();












