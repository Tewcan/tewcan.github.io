var myCharacter = {    
    name: "",
    gender: "",
    race: "",
    myClass: "",
    level: 1,    
}

var myInventory = [
    { slot: "invHead", rarity: 0, price: 1, name: "Rags", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invChest", rarity: 0, price: 1, name: "Rags", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invLegs", rarity: 0, price: 1, name: "Rags", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invShoulders", rarity: 0, price: 1, name: "Rags", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invWrists", rarity: 0, price: 1, name: "Rags", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invHands", rarity: 0, price: 1, name: "Rags", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invFeet", rarity: 0, price: 1, name: "Sandals", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invWaist", rarity: 0, price: 1, name: "Twine", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invNeck", rarity: 0, price: 1, name: "Twine", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invFinger", rarity: 0, price: 1, name: "String", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    { slot: "invMainHand", rarity: 0, price: 1, name: "Club", armor: 0, damage: 2, str: 0, agi: 0, int: 0, sta: 0, ilevel: 2 },
    { slot: "invOffHand", rarity: 0, price: 1, name: "Old Board", armor: 1, damage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
]


var itemType = ["Helm", "Chestpiece", "Greaves", "Pauldrons", "Bracers", "Gauntlets", "Boots", "Belt", "Amulet", "Ring", "Sword", "Shield"]

var materialType = [["Nothing", "Cloth", "Leather", "Chain", "Plate", "Mithril"],
                    ["Nothing", "Wooden", "Copper", "Iron", "Steel", "Mithril"],
                    ["Nothing", "Tin", "Copper", "Silver", "Gold", "Platinum"]]

var itemRarity = ["Nothing", "Common", "Uncommon", "Rare", "Epic", "Legendary"]
var currentItem
var newItem
var currentSlot
var rarity
var tempItem
var totalGold = 0
var totalItemLevel = 0
var totalArmor = 0
var totalDam = 0
var totalStr = 0
var totalAgi = 0
var totalInt = 0
var totalSta = 0
var totalIlevel = 0

var itemSold = 0

function startGame() {
    if (localStorage.getItem("savedCharacter") === null) {
        document.getElementById("topBar").style.display = "none"
        document.getElementById("gearDisplay").style.display = "none"
        document.getElementById("statsDisplay").style.display = "none"
        document.getElementById("lootDisplay").style.display = "none"
        document.getElementById("buttonBar").style.display = "none"
        document.getElementById("newMenu").style.display = "block"
    }
    else if (localStorage.getItem("savedCharacter") != null) {
        loadGame()
    }

    updateInventory()
}

function closeNewMenu() {
    document.getElementById("topBar").style.display = "block"
    document.getElementById("gearDisplay").style.display = "block"
    document.getElementById("statsDisplay").style.display = "block"
    document.getElementById("lootDisplay").style.display = "block"
    document.getElementById("buttonBar").style.display = "block"
    document.getElementById("newMenu").style.display = "none"
    updateInventory();
}

function newName() {
    myCharacter.name = prompt("Enter your name", "Loot Hoarder")
    previewNewCharacter()
}

function newGender(selectedButton, gender) {
    myCharacter.gender = gender
    document.getElementById("buttonMale").style = "background-color: orangered; color:black;"
    document.getElementById("buttonFemale").style = "background-color: orangered; color:black;"
    document.getElementById(selectedButton).style = "background-color: black; color:white;"
    previewNewCharacter()
}

function newRace(selectedButton, char) {
    myCharacter.race = char
    document.getElementById("buttonHuman").style = "background-color: orangered; color:black;"
    document.getElementById("buttonDwarf").style = "background-color: orangered; color:black;"
    document.getElementById("buttonElf").style = "background-color: orangered; color:black;"
    document.getElementById("buttonHalfling").style = "background-color: orangered; color:black;"
    document.getElementById(selectedButton).style = "background-color: black; color:white;"
    previewNewCharacter()
}

function newClass(selectedButton, newClass) {
    myCharacter.myClass = newClass
    document.getElementById("buttonWarrior").style = "background-color: orangered; color:black;"
    document.getElementById("buttonMage").style = "background-color: orangered; color:black;"
    document.getElementById("buttonRogue").style = "background-color: orangered; color:black;"
    document.getElementById(selectedButton).style = "background-color: black; color:white;"
    previewNewCharacter()
}

function previewNewCharacter() {
    var tempCharacter = ""
    document.getElementById("newCharacterName").innerHTML = "<h3>" + myCharacter.name + "</h3>"
    document.getElementById("newCharacterClass").innerHTML = ""
    if (myCharacter.gender != "") document.getElementById("newCharacterClass").innerHTML += myCharacter.gender + " "
    if (myCharacter.race != "") document.getElementById("newCharacterClass").innerHTML += myCharacter.race + " "
    if (myCharacter.myClass != "") document.getElementById("newCharacterClass").innerHTML += myCharacter.myClass
    
    
    tempCharacter = myCharacter.gender + " " + myCharacter.race + " " + myCharacter.myClass
    document.getElementById("newCharacterClass").innerHTML = tempCharacter
}

function getLoot() {    
    itemSold = 0    
    currentSlot = Math.floor(Math.random() * 12)    
    currentItem = myInventory[currentSlot]

    newLoot()
    updateLootDisplay()
    updateInventory()
    changeButtons()
}

function newLoot() {
    var calcRarity = Math.random()
    var material
    var sellPrice
    var statModifier
    if (calcRarity >= 0 && calcRarity <= .8) {
        rarity = 1
        sellPrice = 2
        statModifier = 1        
    }
    else if (calcRarity > .8 && calcRarity <= .95) {
        rarity = 2
        sellPrice = 5
        statModifier = 2        
    }
    else if (calcRarity > .95 && calcRarity <= .975) {
        rarity = 3
        sellPrice = 10
        statModifier = 3        
    }
    else if (calcRarity > .975 && calcRarity <= .995) {
        rarity = 4
        sellPrice = 20
        statModifier = 4        
    }
    else if (calcRarity > .995) {
        rarity = 5
        sellPrice = 50
        statModifier = 5        
    }    
    
    if (currentSlot >= 0 && currentSlot <= 7) {
        material = 0
    }
    if (currentSlot >= 8 && currentSlot <= 9) {
        material = 2
    }
    else if (currentSlot >= 10) {
        material = 1
    }
    var newItemArmor = Math.floor(((Math.random() * 10) + 1) * statModifier)
    var newItemDam = Math.floor(((Math.random() * 10) + 1) * statModifier)
    var newItemStr = Math.floor(((Math.random() * 10) + 1) * statModifier)
    var newItemAgi = Math.floor(((Math.random() * 10) + 1) * statModifier)
    var newItemInt = Math.floor(((Math.random() * 10) + 1) * statModifier)
    var newItemSta = Math.floor(((Math.random() * 10) + 1) * statModifier)
    var newItemIlvl = newItemArmor + newItemDam + newItemStr + newItemAgi + newItemInt + newItemSta

    
    newItem = {
        slot: currentItem.slot,
        rarity: rarity,
        price: sellPrice,
        name: materialType[material][rarity] + " " + itemType[currentSlot],
        armor: newItemArmor,
        damage: newItemDam,
        str: newItemStr,
        agi: newItemAgi,
        int: newItemInt,
        sta: newItemSta,
        ilevel: newItemIlvl
    }
}

function keepLoot() {
    if (itemSold === 0) {
        tempItem = myInventory[currentSlot]
        myInventory[currentSlot] = newItem
        currentItem = newItem
        newItem = tempItem
                
        updateLootDisplay()
        updateInventory()
        statChangeMarkup()
        saveGame()        
    }
}

function statChangeMarkup() {
    if (currentItem.ilevel > newItem.ilevel) {
        document.getElementById("ilvlDisplay").style.color = "lawngreen"
    }
    else if (currentItem.ilevel < newItem.ilevel) {
        document.getElementById("ilvlDisplay").style.color = "red"
    }
}

function sellLoot() {
    totalGold += newItem.price
    itemSold = 1
    document.getElementById("newItemDisplay").innerHTML = "<h1>Sold</h1>"
    document.getElementById("newItemDisplay").style.borderColor = "lightgray"
    updateInventory()
    changeButtons()
    saveGame()
}

function updateLootDisplay() {
    document.getElementById("newItemDisplay").style.borderColor = rarityColor(newItem.rarity)
    document.getElementById("newItemDisplay").innerHTML = "<h3>Loot</h3><strong>" + newItem.name + "</strong>" + "<table><tr><td>Armor</td><td>" + newItem.armor + "<tr><td>Damage</td><td>" + newItem.damage + "<tr><td>Strength</td><td>" + newItem.str + "</td></tr><tr><td>Agility</td><td>" + newItem.agi + "</td></tr><tr><td>Intelligence</td><td>" + newItem.int + "</td></tr><tr><td>Stamina</td><td>" + newItem.sta + "<tr><td>Sell Price</td><td>" + newItem.price + "</td></tr></table>"
    document.getElementById("equippedItemDisplay").style.borderColor = rarityColor(currentItem.rarity)
    document.getElementById("equippedItemDisplay").innerHTML = "<h3>Equipped</h3><strong>" + currentItem.name + "</strong>" + "<table><tr><td>Armor</td><td>" + currentItem.armor + "<tr><td>Damage</td><td>" + currentItem.damage + "<tr><td>Strength</td><td>" + currentItem.str + "</td></tr><tr><td>Agility</td><td>" + currentItem.agi + "</td></tr><tr><td>Intelligence</td><td>" + currentItem.int + "</td></tr><tr><td>Stamina</td><td>" + currentItem.sta + "<tr><td>Sell Price</td><td>" + currentItem.price + "</td></tr></table>"
}

function changeButtons() {
    if (itemSold === 1) {
        document.getElementById("keepLoot").style.display = "none"
        document.getElementById("sellLoot").style.display = "none"
        document.getElementById("newLoot").style.display = "block"
    }
    else if (itemSold === 0) {
        document.getElementById("keepLoot").style.display = "inline"
        document.getElementById("sellLoot").style.display = "inline"
        document.getElementById("newLoot").style.display = "none"
    }
}

function rarityColor(x) {
    switch (x) {
        case 0:
            return "gray"
            break;
        case 1:
            return "white"
            break;
        case 2:
            return "green"
            break;
        case 3:
            return "blue"
            break;
        case 4:
            return "purple"
            break;
        case 5:
            return "orange"
            break;
    }
}

function updateInventory() {
    for (i = 0; i < 12; i++) {
        var lootColor = rarityColor(myInventory[i].rarity)
        
        document.getElementById(myInventory[i].slot).style.color = lootColor
        document.getElementById(myInventory[i].slot).innerHTML = myInventory[i].name
    }
    document.getElementById("goldDisplay").innerHTML = totalGold
    updateStats()
    
}

function updateStats() {
    totalArmor = 0
    totalDam = 0
    totalStr = 0
    totalAgi = 0
    totalInt = 0
    totalSta = 0
    totalIlevel = 0

    for (i = 0; i < 12; i++) {
        totalArmor += myInventory[i].armor
        totalDam += myInventory[i].damage
        totalStr += myInventory[i].str
        totalAgi += myInventory[i].agi
        totalInt += myInventory[i].int
        totalSta += myInventory[i].sta
        totalIlevel += myInventory[i].ilevel
    }

    document.getElementById("charDisplay").innerHTML = "<table><tr><td><h3>" + myCharacter.name + "</h3></td></tr><tr><td>Level " + myCharacter.level + " " + myCharacter.gender + " " + myCharacter.race + " " + myCharacter.myClass + "</td></tr></table>"

    document.getElementById("ilvlDisplay").innerHTML = totalIlevel
    document.getElementById("ilvlDisplay").style.color = "black"
    document.getElementById("armorDisplay").innerHTML = totalArmor
    document.getElementById("damDisplay").innerHTML = totalDam
    document.getElementById("strDisplay").innerHTML = totalStr
    document.getElementById("agiDisplay").innerHTML = totalAgi
    document.getElementById("intDisplay").innerHTML = totalInt
    document.getElementById("staDisplay").innerHTML = totalSta
}

function saveGame() {
    localStorage.setItem("savedCharacter", JSON.stringify(myCharacter))
    localStorage.setItem("savedInventory", JSON.stringify(myInventory))
    localStorage.setItem("savedGold", totalGold)
}

function loadGame() {    
    myCharacter = JSON.parse(localStorage.getItem("savedCharacter"))
    myInventory = JSON.parse(localStorage.getItem("savedInventory"))
    totalGold = parseInt(localStorage.getItem("savedGold"))
    
    updateInventory()
}

function openSettings() {
    document.getElementById("topBar").style.display = "none"
    document.getElementById("gearDisplay").style.display = "none"
    document.getElementById("statsDisplay").style.display = "none"
    document.getElementById("lootDisplay").style.display = "none"
    document.getElementById("buttonBar").style.display = "none"
    document.getElementById("settingsMenu").style.display = "block"
}

function closeSettings() {
    document.getElementById("topBar").style.display = "block"
    document.getElementById("gearDisplay").style.display = "block"
    document.getElementById("statsDisplay").style.display = "block"
    document.getElementById("lootDisplay").style.display = "block"
    document.getElementById("buttonBar").style.display = "block"
    document.getElementById("settingsMenu").style.display = "none"
}

function resetGame() {
    localStorage.removeItem("savedCharacter")
    localStorage.removeItem("savedInventory")
    localStorage.removeItem("savedGold")
    location.reload()
}