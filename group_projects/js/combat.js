var currentEnemy

function beginCombat(enemy) {
    currentEnemy = enemy
    document.getElementsByClassName("map")[0].style.display = "none"
    document.getElementById("combatDisplay").style.display = "block"
    var node = document.createElement("Li");
    var textnode = document.createTextNode("Entering combat with " + enemy.name);
    node.appendChild(textnode);    
    document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
    updateCombatDisplay()    
}

function combat(ability) {
    ability = character.abilities[ability]
    if (character.currentMana - ability.manaCost >= 0) {        
        playerAttack(ability)
        if (currentEnemy.currentHealth > 0) {
            enemyAttack()
            updateCombatDisplay()
        }
        else {
            currentEnemy.currentHealth = 0
            var node = document.createElement("Li");
            var textnode = document.createTextNode("You have slain the " + currentEnemy.name + "!");
            node.appendChild(textnode);
            document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
            expGain(currentEnemy.exp)
            updateCombatDisplay()            
        }
       
    }
    else {
        var node = document.createElement("Li");
        var textnode = document.createTextNode("You need " + ability.manaCost + " mana to use " + ability.name );
        node.appendChild(textnode);
        document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
    }
}

function playerAttack(ability) {
    var damage

    if (ability === 0) {
        damage = randomBetween(character.minDamage, character.maxDamage)
    }
    else {
        damage = character.maxDamage * ability.damageMod
    }
    var node = document.createElement("Li");
    var textnode = document.createTextNode("You " + ability.name + " the " + currentEnemy.name + " for " + damage + " damage");
    node.appendChild(textnode);
    document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
    character.currentMana -= ability.manaCost
    currentEnemy.currentHealth -= damage
}

function enemyAttack() {
    var damage = randomBetween(currentEnemy.damageMin, currentEnemy.damageMax)
    var node = document.createElement("Li");
    var textnode = document.createTextNode("The " + currentEnemy.name + " hits you for " + damage + " damage");
    node.appendChild(textnode);
    node.style.color = "red"
    document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
    character.currentHP -= damage
}

function updateCombatDisplay() {
    document.getElementById("hero-health-number").innerHTML = character.currentHP + " / " + character.maxHP
    document.getElementById("hero-health").style.width = (character.currentHP / character.maxHP) * 100 + "%"
    document.getElementById("hero-mana-number").innerHTML = character.currentMana + " / " + character.maxMana
    document.getElementById("hero-mana").style.width = (character.currentMana / character.maxMana) * 100 + "%"
    document.getElementById("attack").innerHTML = character.abilities[0].name
    document.getElementById("special1").innerHTML = character.abilities[1].name
    document.getElementById("special2").innerHTML = character.abilities[2].name

    // Update Enemy Information
    document.getElementById("enemy-name").innerHTML = currentEnemy.name
    document.getElementById("enemy-health-number").innerHTML = currentEnemy.currentHealth + " / " + currentEnemy.health
    document.getElementById("enemy-health").style.width = (currentEnemy.currentHealth / currentEnemy.health) * 100 + "%"

    // This needs to be fixed. The enemy level div contains the other divs, and replacing the text inside it removes them.
    //document.getElementById("enemy-level").innerHTML = currentEnemy.level
}

function flee() {
    endCombat()
    mapFunction()
}

function endCombat() {
    document.getElementsByClassName("map")[0].style.display = "block"
    document.getElementById("combatDisplay").style.display = "none"
}

function expGain(exp) {
    var node = document.createElement("Li");
    var textnode = document.createTextNode("You gained " + exp + " experience!");
    node.appendChild(textnode);
    node.style.color = "yellow"
    document.getElementById("combat-log").insertBefore(node, document.getElementById("combat-log").childNodes[0]);
    character.currentExp += exp
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}