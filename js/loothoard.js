var Character = {
    name: "",
    currentHealth: 0,
    currentMana: 0,
    currentEnergy: 0,
    gender: "",
    race: "",
    myClass: "",
    primaryStat: "",
    stats: { str: 0, agi: 0, int: 0, sta: 0, health: 0, mana: 0, energy: 0 },
    level: 1,
    currentExp: 0,
    gold: 0,
    Inventory: [
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
    ],
    gameVersion: 1.4,
}

gameVersion = 1.4
updateNeeded = 0

var itemTypes = [[["Cap","Tunic","Pants","Shawl","Cuffs","Gloves","Sandals","Cord","Amulet","Ring","Wand","Tome"],["Cowl","Robe","Leggings","Cloak","Bracer","Mitts","Boots","Belt","Talisman","Signet","Staff","Grimoire"]],
                 [["Skullcap", "Hauberk", "Leggings", "Spaulders", "Manacles", "Gloves", "Shoes", "Belt", "Necklace", "Band", "Knife", "Knife"], ["Sallet", "Brigandine", "Greaves", "Rerebraces", "Bracers", "Gauntlets", "Boots", "Harness", "Amulet", "Ring", "Dagger", "Dagger"]],
                 [["Helm","Chestpiece","Cuisses","Rerebraces","Vambraces","Gloves","Boots","Belt","Necklace","Band","Axe","Round Shield"],["Barbute","Breastplate","Greaves","Pauldrons","Bracers","Gauntlets","Sabatons","Girdle","Amulet","Ring","Sword","Kite Shield"]]]

var materialTypes = [[["Junk", "Linen", "Mink", "Silk", "Shot Silk", "Samite", "Gemcloth", "Omnite"], ["Junk", "Broadcloth", "Velveteen", "Scarlet", "Satin Weave", "Damask", "Aetherweave", "Irasilk"]],
                     [["Junk", "Roughspun", "Corded Cotton", "Hide", "Worked Leather", "Boiled Leather", "Adamant Weave", "Nyxite"], ["Junk", "Calico", "Linen", "Hide", "Corded Wool", "Bamboo", "Lamellar", "Mithril Weave", "Sanguinite"]],
                     [["Junk", "Hide", "Copper", "Iron", "Steel", "Adamantine", "Indilocite", "Thanatite"], ["Junk", "Animal Scale", "Bronze", "Worked Iron", "Damascus Steel", "Mithril", "Embersteel", "Oblidite"]],
                     [["Junk", "Tin", "Copper", "Silver", "Palladium", "Gold", "Platinum", "Rhodium"], ["Junk", "Glass", "Quartz", "Sapphire", "Opal", "Ruby", "Diamond", "Blue Diamond"]],
                     [["Junk", "Wooden", "Copper", "Iron", "Steel", "Adamantine", "Indilocite", "Thanatite"], ["Junk", "Ironwood", "Bronze", "Worked Iron", "Damascus Steel", "Mithril", "Embersteel", "Oblidite"]],
                     [["Junk", "Pine", "Cedar", "Bubinga", "Walnut", "Silver-Worked", "Mahogany", "Ebony"], ["Junk", "Oak", "Palm", "Kingwood", "Gold-Inlaid", "Ivory", "Lacewood", "Rosewood"]]]

var maleStats = {
    human: { str: 25, agi: 23, int: 25, sta: 27, health: 115, mana: 100, energy: 100 },
    elf: { str: 22, agi: 27, int: 27, sta: 24, health: 90, mana: 115, energy: 110 },
    dwarf: { str: 26, agi: 23, int: 24, sta: 27, health: 120, mana: 85, energy: 105 },
    halfling: { str: 21, agi: 29, int: 25, sta: 25, health: 90, mana: 100, energy: 120 }
}

var femaleStats = {
    human: { str: 24, agi: 28, int: 25, sta: 23, health: 100, mana: 100, energy: 115 },
    elf: { str: 20, agi: 30, int: 27, sta: 23, health: 90, mana: 120, energy: 105 },
    dwarf: { str: 25, agi: 24, int: 25, sta: 26, health: 120, mana: 80, energy: 110 },
    halfling: { str: 20, agi: 30, int: 27, sta: 23, health: 85, mana: 105, energy: 120 }
}

var classStats = {
    warrior: { str: 5, agi: 0, int: 0, sta: 5, health: 30, mana: 0, energy: 10 },
    mage: { str: 0, agi: 3, int: 7, sta: 0, health: 0, mana: 40, energy: 0 },
    rogue: { str: 0, agi: 7, int: 3, sta: 0, health: 5, mana: 0, energy: 35 }
}

var itemRarity = ["Junk", "Common", "Uncommon", "Rare", "Epic", "Legendary", "Celestial", "Divine"]
var itemSlot = ["Head", "Chest", "Legs", "Shoulders", "Wrists", "Hands", "Feet", "Waist", "Neck", "Finger", "Main Hand", "Off Hand"]

var mobsHumanoid = ["orc", "goblin", "kobold", "thief", "bandit"]
var mobsBeast = ["rat", "snake", "beetle", "raven"]
var mobsUndead = ["skeleton", "zombie", "mummy", "ghoul", "wraith"]

var enemy
var currentItem
var newItem
var currentSlot
var tempItem
var maxExp

var itemSold = 0

function startGame() {    

    if (localStorage.getItem("savedCharacter") === null) {
        document.getElementById("inventoryDisplay").style.display = "none"
        document.getElementById("newMenu").style.display = "block"
    }
    else if (localStorage.getItem("savedCharacter") != null) {
        loadGame()    }

    if (Character.gameVersion != gameVersion) {
        alert("Loot Hoard updated to version " + gameVersion + ". Your character is out of date.  Reset required")
    }

    updateInventory()
}

function newCharacterStats() {
    var baseStats = {}
    var classModifiers = {}
    var characterRace = Character.race
    if (Character.gender === "Female") baseStats = femaleStats
    else if (Character.gender === "Male") baseStats = maleStats

    switch (characterRace) {
        case "Human":
            baseStats = baseStats.human
            break;
        case "Elf":
            baseStats = baseStats.elf
            break;
        case "Dwarf":
            baseStats = baseStats.dwarf
            break;
        case "Halfling":
            baseStats = baseStats.halfling
            break;
    }
    Character.stats.str = baseStats.str
    Character.stats.agi = baseStats.agi
    Character.stats.int = baseStats.int
    Character.stats.sta = baseStats.sta
    Character.stats.health = baseStats.health
    Character.stats.mana = baseStats.mana
    Character.stats.energy = baseStats.energy

    if (Character.myClass === "Warrior") {
        classModifiers = classStats.warrior
        Character.primaryStat = "str"
    }
    else if (Character.myClass === "Mage") {
        classModifiers = classStats.mage
        Character.primaryStat = "int"
    }
    else if (Character.myClass === "Rogue") {
        classModifiers = classStats.rogue
        Character.primaryStat = "agi"
    }
    Character.stats.str += classModifiers.str
    Character.stats.agi += classModifiers.agi
    Character.stats.int += classModifiers.int
    Character.stats.sta += classModifiers.sta
    Character.stats.health += classModifiers.health
    Character.stats.mana += classModifiers.mana
    Character.stats.energy += classModifiers.energy

    updateInventory()
    closeNewMenu()
}

function closeNewMenu() {
    document.getElementById("inventoryDisplay").style.display = "block"
    document.getElementById("newMenu").style.display = "none"    
}

function newName() {
    Character.name = prompt("Enter your name", "Loot Hoarder")
    previewNewCharacter()
}

function newGender(selectedButton, gender) {
    Character.gender = gender
    document.getElementById("buttonMale").style = "background-color: orangered; color:black;"
    document.getElementById("buttonFemale").style = "background-color: orangered; color:black;"
    document.getElementById(selectedButton).style = "background-color: black; color:white;"
    previewNewCharacter()
}

function newRace(selectedButton, char) {
    Character.race = char
    document.getElementById("buttonHuman").style = "background-color: orangered; color:black;"
    document.getElementById("buttonDwarf").style = "background-color: orangered; color:black;"
    document.getElementById("buttonElf").style = "background-color: orangered; color:black;"
    document.getElementById("buttonHalfling").style = "background-color: orangered; color:black;"
    document.getElementById(selectedButton).style = "background-color: black; color:white;"
    previewNewCharacter()
}

function newClass(selectedButton, newClass) {
    Character.myClass = newClass
    document.getElementById("buttonWarrior").style = "background-color: orangered; color:black;"
    document.getElementById("buttonMage").style = "background-color: orangered; color:black;"
    document.getElementById("buttonRogue").style = "background-color: orangered; color:black;"
    document.getElementById(selectedButton).style = "background-color: black; color:white;"
    previewNewCharacter()
}

function previewNewCharacter() {
    var tempCharacter = ""
    document.getElementById("newCharacterName").innerHTML = "<h3>" + Character.name + "</h3>"
    document.getElementById("newCharacterClass").innerHTML = ""
    if (Character.gender != "") document.getElementById("newCharacterClass").innerHTML += Character.gender + " "
    if (Character.race != "") document.getElementById("newCharacterClass").innerHTML += Character.race + " "
    if (Character.myClass != "") document.getElementById("newCharacterClass").innerHTML += Character.myClass    
    tempCharacter = Character.gender + " " + Character.race + " " + Character.myClass
    document.getElementById("newCharacterClass").innerHTML = tempCharacter
}

function getLoot() {    
    itemSold = 0    
    currentSlot = Math.floor(Math.random() * 12)    
    currentItem = Character.Inventory[currentSlot]

    newLoot()
    updateLootDisplay()
    updateInventory()
    changeButtons()
}

function newLoot() {
    var rarity
    var calcRarity = Math.random()
    var itemTier = Math.floor(Math.random() * 2)    
    var classSelector = Math.floor(Math.random() * 3)

    if (calcRarity >= 0 && calcRarity <= .8) {
        rarity = 1           
    }
    else if (calcRarity > .8 && calcRarity <= .95) {
        rarity = 2              
    }
    else if (calcRarity > .95 && calcRarity <= .975) {
        rarity = 3              
    }
    else if (calcRarity > .975 && calcRarity <= .995) {
        rarity = 4              
    }
    else if (calcRarity > .995 && calcRarity <= .998) {
        rarity = 5              
    }
    else if (calcRarity > .998 && calcRarity <= .9995) {
        rarity = 6       
    }
    else if (calcRarity > .9995) {
        rarity = 7        
    }


    if (currentSlot >= 0 && currentSlot <= 7) {
        newItem = createArmor(rarity,classSelector,itemTier)
    }
    if (currentSlot >= 8 && currentSlot <= 9) {
        newItem = createJewelry(rarity, classSelector, itemTier)
    }
    else if (currentSlot >= 10) {
        newItem = createWeapon(rarity, classSelector, itemTier)
    }     
}

function item(name, slot, rarity, price, armor, damage, str, agi, int, sta, ilevel) {
    this.name = name
    this.slot = slot
    this.rarity = rarity
    this.price = price
    this.armor = armor
    this.damage = damage
    this.str = str
    this.agi = agi
    this.int = int
    this.sta = sta
    this.ilevel = ilevel
}

function createArmor(rarity, classType, tier) {
    var armorMaterial = materialTypes[classType][tier][rarity]
    var armorType = itemTypes[classType][tier][currentSlot]
    var newItemName = armorMaterial + " " + armorType
    var sellPrice = getPrice(rarity, tier)
    var newItemArmor = rollStats(rarity)
    var newItemDam = 0
    var newItemStr = rollStats(rarity)
    var newItemAgi = rollStats(rarity)
    var newItemInt = rollStats(rarity)
    var newItemSta = rollStats(rarity)
    switch (classType) {
        case 0:
            newItemStr = Math.floor(newItemStr / 2)
            newItemAgi = Math.floor(newItemAgi / 2)
            newItemInt = Math.floor(newItemInt * 1.3)
            newItemSta = Math.floor(newItemSta / 2)
            break;
        case 1:
            newItemArmor = Math.floor(newItemArmor * 1.5)
            newItemStr = Math.floor(newItemStr / 2)
            newItemAgi = Math.floor(newItemAgi * 1.3)
            newItemInt = Math.floor(newItemInt / 2)
            newItemSta = Math.floor(newItemSta * 1.3)
            break;
        case 2:
            newItemArmor = Math.floor(newItemArmor * 2)
            newItemStr = Math.floor(newItemStr * 1.3)
            newItemAgi = Math.floor(newItemAgi / 2)
            newItemInt = Math.floor(newItemInt / 2)
            newItemSta = Math.floor(newItemSta * 1.5)
            break;
    }
    var newItemIlvl = Math.floor(((newItemArmor / 10) + newItemDam + newItemStr + newItemAgi + newItemInt + newItemSta) / 2)
    newArmor = new item(newItemName, Character.Inventory[currentSlot].slot, rarity, sellPrice, newItemArmor, newItemDam, newItemStr, newItemAgi, newItemInt, newItemSta, newItemIlvl)
    return newArmor
}

function createJewelry(rarity, classType, tier) {
    var jewelryMaterial = materialTypes[3][tier][rarity]
    var jewelryType = itemTypes[classType][tier][currentSlot]
    var newItemName = jewelryMaterial + " " + jewelryType
    var sellPrice = getPrice(rarity, tier)
    var newItemArmor = 0
    var newItemDam = 0
    var newItemStr = rollStats(rarity)
    var newItemAgi = rollStats(rarity)
    var newItemInt = rollStats(rarity)
    var newItemSta = rollStats(rarity)
    switch (classType) {
        case 0:
            newItemInt = newItemInt * 2
            break;
        case 1:            
            newItemAgi = newItemAgi * 2
            newItemSta = Math.floor(newItemSta * 1.5)
            break;
        case 2:            
            newItemStr = newItemStr * 2
            newItemSta = newItemSta * 2
    }
    var newItemIlvl = Math.floor(((newItemArmor / 10) + newItemDam + newItemStr + newItemAgi + newItemInt + newItemSta) / 2)
    newJewelry = new item(newItemName, Character.Inventory[currentSlot].slot, rarity, sellPrice, newItemArmor, newItemDam, newItemStr, newItemAgi, newItemInt, newItemSta, newItemIlvl)
    return newJewelry
}

function createWeapon(rarity, classType, tier) {
    var weaponMaterial
    switch (classType) {
        case 0:
            weaponMaterial = materialTypes[5][tier][rarity]
            break;
        case 1:
            weaponMaterial = materialTypes[4][tier][rarity]
            break;
        case 2:
            weaponMaterial = materialTypes[4][tier][rarity]
            break;
    }
    var weaponType = itemTypes[classType][tier][currentSlot]
    var newItemName = weaponMaterial + " " + weaponType
    var sellPrice = getPrice(rarity, tier)
    var newItemArmor = 0
    var newItemDam = rollStats(rarity)
    var newItemStr = rollStats(rarity)
    var newItemAgi = rollStats(rarity)
    var newItemInt = rollStats(rarity)
    var newItemSta = rollStats(rarity)
    switch (classType) {
        case 0:
            newItemInt = newItemInt * 2
            break;
        case 1:            
            newItemAgi = newItemAgi * 2
            newItemSta = Math.floor(newItemSta * 1.5)
            break;
        case 2:            
            newItemStr = newItemStr * 2
            newItemSta = newItemSta * 2
    }
    var newItemIlvl = Math.floor(((newItemArmor / 10) + newItemDam + newItemStr + newItemAgi + newItemInt + newItemSta) / 2)
    newWeapon = new item(newItemName, Character.Inventory[currentSlot].slot, rarity, sellPrice, newItemArmor, newItemDam, newItemStr, newItemAgi, newItemInt, newItemSta, newItemIlvl)
    return newWeapon
}

function getPrice(rarity, tier) {
    switch (rarity) {
        case 1:
            return 2 + (tier)
            break;
        case 2:
            return 5 + (tier * 2)
            break;
        case 3:
            return 10 + (tier * 3)
            break;
        case 4:
            return 20 + (tier * 5)
            break;
        case 5:
            return 50 + (tier * 10)
            break;
        case 6:
            return 200 + (tier * 50)
            break;
        case 7:
            return 500 + (tier * 100)
            break;
    }
}

function rollStats(rarity) {
    var firstMod = 0
    var secondMod = 0
    switch (rarity) {
        case 1:
            firstMod = 1
            secondMod = 2
            break;
        case 2:
            firstMod = 2
            secondMod = 10
            break;
        case 3:
            firstMod = 3
            secondMod = 25
            break;
        case 4:
            firstMod = 4
            secondMod = 50
            break;
        case 5:
            firstMod = 5
            secondMod = 100
            break;
        case 6:
            firstMod = 6
            secondMod = 200
            break;
        case 7:
            firstMod = 7
            secondMod = 300
            break;
    }
    return Math.floor(((Math.random() * 10) + 1) * firstMod) + secondMod
}

function keepLoot() {
    if (itemSold === 0) {
        tempItem = Character.Inventory[currentSlot]
        Character.Inventory[currentSlot] = newItem
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
    Character.gold += newItem.price
    itemSold = 1
    document.getElementById("newItemDisplay").style.display = "none"
    document.getElementById("itemSoldDisplay").style.display = "block"
    Character.currentExp += newItem.price
    updateInventory()
    changeButtons()
    saveGame()    
}

function updateExp() {
    maxExp = (Character.level * 100)
    if (Character.currentExp >= maxExp) {
        Character.currentExp -= maxExp
        Character.level ++
    }
    var levelPercent = (Character.currentExp / maxExp) * 100
    document.getElementById("expBar").style.width = levelPercent + "%"
    document.getElementById("expBarOverlay").innerHTML = Character.currentExp + " / " +maxExp
}

function updateLootDisplay() {
    document.getElementById("newItemDisplay").style.display = "block"
    document.getElementById("itemSoldDisplay").style.display = "none"
    document.getElementById("newItemDisplay").style.borderColor = rarityColor(newItem.rarity)
    document.getElementById("newItemName").innerHTML = newItem.name
    document.getElementById("newItemArmor").innerHTML = newItem.armor
    document.getElementById("newItemRarity").innerHTML = itemRarity[newItem.rarity]
    document.getElementById("newItemRarity").style.color = rarityColor(newItem.rarity)
    document.getElementById("newItemDam").innerHTML = newItem.damage
    document.getElementById("newItemStr").innerHTML = newItem.str
    document.getElementById("newItemSlot").innerHTML = itemSlot[currentSlot]
    document.getElementById("newItemAgi").innerHTML = newItem.agi
    document.getElementById("newItemInt").innerHTML = newItem.int
    document.getElementById("newItemSta").innerHTML = newItem.sta
    document.getElementById("newItemIlvl").innerHTML = newItem.ilevel
    document.getElementById("newItemPrice").innerHTML = newItem.price

    document.getElementById("equippedItemDisplay").style.display = "block"
    document.getElementById("equippedItemDisplay").style.borderColor = rarityColor(currentItem.rarity)    
    document.getElementById("equippedItemName").innerHTML = currentItem.name
    document.getElementById("equippedItemArmor").innerHTML = currentItem.armor
    document.getElementById("equippedItemRarity").innerHTML = itemRarity[currentItem.rarity]
    document.getElementById("equippedItemRarity").style.color = rarityColor(currentItem.rarity)
    document.getElementById("equippedItemDam").innerHTML = currentItem.damage
    document.getElementById("equippedItemStr").innerHTML = currentItem.str
    document.getElementById("equippedItemSlot").innerHTML = itemSlot[currentSlot]
    document.getElementById("equippedItemAgi").innerHTML = currentItem.agi
    document.getElementById("equippedItemInt").innerHTML = currentItem.int
    document.getElementById("equippedItemSta").innerHTML = currentItem.sta
    document.getElementById("equippedItemIlvl").innerHTML = currentItem.ilevel
    document.getElementById("equippedItemPrice").innerHTML = currentItem.price    
}

function itemDisplayBox() {
    this.equip = "",
    this.itemName = "",
    this.str = ""
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

function selectItem(selectedElement,selectedItem) {
    document.getElementById(selectedElement).style.backgroundColor = "steelblue"
    document.getElementById("statsDisplay").style.display = "none"
    document.getElementById("selectedItemDisplay").style.display = "block"
    document.getElementById("selectedItemName").innerHTML = Character.Inventory[selectedItem].name
    document.getElementById("selectedItemName").style.color = rarityColor(Character.Inventory[selectedItem].rarity)
    document.getElementById("selectedItemArmor").innerHTML = Character.Inventory[selectedItem].armor
    document.getElementById("selectedItemDam").innerHTML = Character.Inventory[selectedItem].damage
    document.getElementById("selectedItemStr").innerHTML = Character.Inventory[selectedItem].str
    document.getElementById("selectedItemAgi").innerHTML = Character.Inventory[selectedItem].agi
    document.getElementById("selectedItemInt").innerHTML = Character.Inventory[selectedItem].int
    document.getElementById("selectedItemSta").innerHTML = Character.Inventory[selectedItem].sta
    document.getElementById("selectedItemIlvl").innerHTML = Character.Inventory[selectedItem].ilevel
}

function deselectItem(selectedElement) {
    var baseColor = "lightblue"
    document.getElementById("inventoryHeadDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryChestDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryLegsDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryShouldersDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryWristsDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryHandsDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryFeetDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryWaistDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryNeckDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryFingerDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryMainhandDisplay").style.backgroundColor = baseColor
    document.getElementById("inventoryOffhandDisplay").style.backgroundColor = baseColor
    document.getElementById("statsDisplay").style.display = "block"
    document.getElementById("selectedItemDisplay").style.display = "none"
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
        case 6:
            return "yellow"
            break;
        case 7:
            return "red"
            break;
    }
}

function updateInventory() {
    for (i = 0; i < 12; i++) {
        var lootColor = rarityColor(Character.Inventory[i].rarity)
        
        document.getElementById(Character.Inventory[i].slot).style.color = lootColor
        document.getElementById(Character.Inventory[i].slot).innerHTML = Character.Inventory[i].name
    }
    document.getElementById("goldDisplay").innerHTML = Character.gold
    updateStats()    
}

function updateStats() {
    var totalArmor = 0
    var totalDam = 0
    var totalStr = Character.stats.str
    var totalAgi = Character.stats.agi
    var totalInt = Character.stats.int
    var totalSta = Character.stats.sta
    var totalIlevel = 0
    
    document.getElementById("selectedItemDisplay").style.display = "none"
    document.getElementById("statsDisplay").style.display = "block"

    for (i = 0; i < 12; i++) {
        totalArmor += Character.Inventory[i].armor
        totalDam += Character.Inventory[i].damage
        totalStr += Character.Inventory[i].str
        totalAgi += Character.Inventory[i].agi
        totalInt += Character.Inventory[i].int
        totalSta += Character.Inventory[i].sta
        totalIlevel += Character.Inventory[i].ilevel
    }

    document.getElementById("charDisplay").innerHTML = "<table><tr><td><h3>" + Character.name + "</h3></td></tr><tr><td>Level " + Character.level + " " + Character.gender + " " + Character.race + " " + Character.myClass + "</td></tr></table>"

    document.getElementById("ilvlDisplay").innerHTML = Math.floor(totalIlevel / 12)
    document.getElementById("ilvlDisplay").style.color = "black"
    document.getElementById("armorDisplay").innerHTML = totalArmor
    document.getElementById("damDisplay").innerHTML = totalDam
    document.getElementById("strDisplay").innerHTML = totalStr
    document.getElementById("agiDisplay").innerHTML = totalAgi
    document.getElementById("intDisplay").innerHTML = totalInt
    document.getElementById("staDisplay").innerHTML = totalSta
    updateExp()
    updateResources()
}

function updateResources() {
    Character.currentHealth = Character.stats.health
    Character.currentMana = Character.stats.mana
    Character.currentEnergy = Character.stats.energy
    document.getElementById("healthDisplay").innerHTML = Character.currentHealth
    document.getElementById("manaDisplay").innerHTML = Character.currentMana
    document.getElementById("energyDisplay").innerHTML = Character.currentEnergy
}

function saveGame() {
    localStorage.setItem("savedCharacter", JSON.stringify(Character))    
}

function loadGame() {    
    Character = JSON.parse(localStorage.getItem("savedCharacter"))    
    updateInventory()
}

function openSettings() {
    document.getElementById("inventoryDisplay").style.display = "none"
    document.getElementById("settingsMenu").style.display = "block"
}

function closeSettings() {
    document.getElementById("inventoryDisplay").style.display = "block"
    document.getElementById("settingsMenu").style.display = "none"
}

function resetGame() {
    localStorage.removeItem("savedCharacter")    
    location.reload()
}

function buildEnemy() {
    var mobSelector = Math.floor(Math.random() * 2)
    
    var mobPicker
    switch (mobSelector) {
        case 0:
            mobPicker = Math.floor(Math.random() * mobsHumanoid.length) - 1
            enemy = new mobHumanoid(mobsHumanoid[mobPicker])
            break;
        case 1:
            mobPicker = Math.floor(Math.random() * mobsBeast.length) - 1
            enemy = new mobHumanoid(mobsBeast[mobPicker])
            break;
        case 2:
            mobPicker = Math.floor(Math.random() * mobsUndead.length) - 1
            enemy = new mobHumanoid(mobsUndead[mobPicker])
            break;        
    }

    enemy.level = Character.level
}

function mobBeast(name) {
    this.name = name
    this.type = "beast"
    this.level = 0
    this.currentHealth = 0
    this.maxHealth = 0
    this.expModifier = .8
}

function mobHumanoid(name) {
    this.name = name
    this.type = "humanoid"
    this.level = 0
    this.currentHealth = 0
    this.maxHealth = 0
    this.expModifier = 1
}

function mobUndead(name) {
    this.name = name
    this.type = "undead"
    this.level = 0
    this.currentHealth = 0
    this.maxHealth = 0
    this.expModifier = .9
}

function updateCombatDisplay() {
    var enemyHPPercent = (enemy.currentHealth / enemy.maxHealth) + "%"
    var playerHPPercent = (Character.currentHealth / Character.stats.health) + "%"
    var playerManaPercent = (Character.currentMana / Character.stats.mana) + "%"
    var playerEnergyPercent = (Character.currentEnergy / Character.stats.energy) + "%"
    
    document.getElementById("combatMobStatsDisplay").innerHTML = "<h3>Level " + enemy.level + " " + enemy.name + "</h3>"
    document.getElementById("combatMobHealthBarOverlay").innerHTML = enemy.currentHealth + " / " + enemy.maxHealth
    document.getElementById("combatMobHealthBar").style.width = enemyHPPercent
    document.getElementById("combatHealthBarOverlay").innerHTML = Character.currentHealth + " / " + Character.stats.health
    document.getElementById("combatHealthBar").style.width = playerHPPercent
    document.getElementById("combatManaBarOverlay").innerHTML = Character.currentMana + " / " + Character.stats.mana
    document.getElementById("combatManaBar").style.width = playerManaPercent
    document.getElementById("combatEnergyBarOverlay").innerHTML = Character.currentEnergy + " / " + Character.stats.energy
    document.getElementById("combatManaBar").style.width = playerEnergyPercent
}