character = {
    name: "Test Testerson",
    level: 1,
    gender: "Male",
    race: "Human",
    myClass: "Warrior",
    currentHP: 100,
    maxHP: 100,
    currentMana: 100,
    maxMana: 100,
    stats: { str: 25, dex: 20, int: 15, sta: 20 },
    minDamage: 2,
    maxDamage: 5,
    currentExp: 1,
    nextLevelExp: 100,
    gold: 0,
    abilities: [
        {name: "Attack", damageMod: 1, manaCost: 0},
        {name: "Bash", damageMod: 2, manaCost: 50},
        {name: "Slam", damageMod: 4, manaCost: 100}],
    x: 70,
    y: 50,

    inCombat: false,



    expGain: function (exp) {
        var node = document.createElement("Li");
        var textnode = document.createTextNode("You gained " + exp + " experience!");
        node.appendChild(textnode);
        node.style.color = "yellow"
        document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
        character.currentExp += exp
    },

    goldGain: function(gold) {
        var node = document.createElement("Li");
        var textnode = document.createTextNode("You looted " + gold + " gold!");
        node.appendChild(textnode);
        node.style.color = "yellow"
        document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
        character.gold += gold
    },

    checkExp: function() {
        if (this.currentExp >= this.nextLevelExp) {
            character.level += 1
            var node = document.createElement("Li");
            var textnode = document.createTextNode("You gained a level! Welcome to level " +character.level);
            node.appendChild(textnode);
            node.style.color = "yellow"
            document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
            this.currentExp -= this.nextLevelExp
            this.nextLevelExp = this.level * 100
        }
    },
}