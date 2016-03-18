var currentEnemy

function beginCombat(enemy) {
    currentEnemy = enemy
    document.getElementsByClassName("map")[0].style.display = "none"
    document.getElementById("combatDisplay").style.display = "block"
    var node = document.createElement("Li");
    var textnode = document.createTextNode("Entering combat with " + enemy.name);
    node.appendChild(textnode);    
    document.getElementById("combat-text").insertBefore(node, document.getElementById("combat-text").childNodes[0]);
    updateCombatDisplay()    
}

function combat() {
    
}

function updateCombatDisplay() {
    document.getElementById("hero-health-number").innerHTML = character.currentHP + " / " + character.maxHP
    document.getElementById("hero-health").style.width = (character.currentHP / character.maxHP) * 100 + "%"
    document.getElementById("hero-mana-number").innerHTML = character.currentMana + " / " + character.maxMana
    document.getElementById("hero-mana").style.width = (character.currentMana / character.maxMana) * 100 + "%"

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