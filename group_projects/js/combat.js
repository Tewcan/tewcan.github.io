function beginCombat() {
    document.getElementsByClassName("map")[0].style.display = "none"
    document.getElementById("combatDisplay").style.display = "block"
    updateCombatDisplay()
    combat()
}

function combat() {
    
}

function updateCombatDisplay() {
    document.getElementById("hero-health").innerHTML = character.currentHP + " / " + character.maxHP
    document.getElementById("hero-health").style.width = (character.currentHP / character.maxHP) * 100 + "%"
}

function flee() {
    endCombat()    
}

function endCombat() {
    document.getElementsByClassName("map")[0].style.display = "block"
    document.getElementById("combatDisplay").style.display = "none"
}