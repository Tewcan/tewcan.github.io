var Character = {
    name: "",
    maxDamage: 10,
    minDamage: 8,
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
        { slot: "invHead", rarity: 0, price: 1, name: "Rags", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invChest", rarity: 0, price: 1, name: "Rags", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invLegs", rarity: 0, price: 1, name: "Rags", armor: 1, maxDamage: 0, minDamage: 0, str:0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invShoulders", rarity: 0, price: 1, name: "Rags", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invWrists", rarity: 0, price: 1, name: "Rags", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invHands", rarity: 0, price: 1, name: "Rags", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invFeet", rarity: 0, price: 1, name: "Sandals", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invWaist", rarity: 0, price: 1, name: "Twine", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invNeck", rarity: 0, price: 1, name: "Twine", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invFinger", rarity: 0, price: 1, name: "String", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
        { slot: "invMainHand", rarity: 0, price: 1, name: "Club", armor: 0, maxDamage: 2, minDamage: 1, str: 0, agi: 0, int: 0, sta: 0, ilevel: 2 },
        { slot: "invOffHand", rarity: 0, price: 1, name: "Old Board", armor: 1, maxDamage: 0, minDamage: 0, str: 0, agi: 0, int: 0, sta: 0, ilevel: 1 },
    ],    
    gameVersion: 2.0,
}

gameVersion = 2.0
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
var enemyAlive = 0
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
    var ilvl 

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

    ilvl = (Character.level * 10) + (Character.level * rarity)

    if (currentSlot >= 0 && currentSlot <= 7) {
        newItem = createArmor(rarity, classSelector, itemTier, ilvl)
    }
    if (currentSlot >= 8 && currentSlot <= 9) {
        newItem = createJewelry(rarity, classSelector, itemTier, ilvl)
    }
    else if (currentSlot >= 10) {
        newItem = createWeapon(rarity, classSelector, itemTier, ilvl)
    }     
}

function item(name, slot, rarity, price, armor, minDamage, maxDamage, str, agi, int, sta, ilevel) {
    this.name = name
    this.slot = slot
    this.rarity = rarity
    this.price = price
    this.armor = armor
    this.minDamage = minDamage
    this.maxDamage = maxDamage
    this.str = str
    this.agi = agi
    this.int = int
    this.sta = sta
    this.ilevel = ilevel
}

function distributeStats(ilvl) {
    var statSelector
    for (i = 0; i < ilvl; i++) {
        statSelector = Math.floor(Math.random() * 3)
        switch (statSelector) {
            case 0:
                newItemStr++
                break;
            case 1:
                newItemAgi++
                break;
            case 2:
                newItemInt++
                break;
            case 3:
                newItemSta++
                break;
        }
    }
}

function createArmor(rarity, classType, tier, ilvl) {
    var armorMaterial = materialTypes[classType][tier][rarity]
    var armorType = itemTypes[classType][tier][currentSlot]
    var newItemName = armorMaterial + " " + armorType
    var sellPrice = getPrice(rarity, tier)
    var newItemArmor = Math.floor((ilvl / 10) * (classType + 1))
    var newItemMinDam = 0
    var newItemMaxDam = 0
    var newItemStr = 0
    var newItemAgi = 0
    var newItemInt = 0
    var newItemSta = 0
    var statSelector

    for (i = 0; i < ilvl; i++) {
        statSelector = Math.floor(Math.random() * 4)
        switch (statSelector) {
            case 0:
                newItemStr++
                break;
            case 1:
                newItemAgi++
                break;
            case 2:
                newItemInt++
                break;
            case 3:
                newItemSta++
                break;
        }
    }
    switch (classType) {
        case 0:            
            newItemInt = Math.floor(newItemInt * 1.3)            
            break;
        case 1:                      
            newItemAgi = Math.floor(newItemAgi * 1.3)            
            newItemSta = Math.floor(newItemSta * 1.3)
            break;
        case 2:            
            newItemStr = Math.floor(newItemStr * 1.3)            
            newItemSta = Math.floor(newItemSta * 1.5)
            break;
    }
    
    newArmor = new item(newItemName, Character.Inventory[currentSlot].slot, rarity, sellPrice, newItemArmor, newItemMinDam, newItemMaxDam, newItemStr, newItemAgi, newItemInt, newItemSta, ilvl)
    return newArmor
}

function createJewelry(rarity, classType, tier, ilvl) {
    var jewelryMaterial = materialTypes[3][tier][rarity]
    var jewelryType = itemTypes[classType][tier][currentSlot]
    var newItemName = jewelryMaterial + " " + jewelryType
    var sellPrice = getPrice(rarity, tier)
    var newItemArmor = 0
    var newItemMinDam = 0
    var newItemMaxDam = 0
    var newItemStr = 0
    var newItemAgi = 0
    var newItemInt = 0
    var newItemSta = 0

    for (i = 0; i < ilvl; i++) {
        statSelector = Math.floor(Math.random() * 4)
        switch (statSelector) {
            case 0:
                newItemStr++
                break;
            case 1:
                newItemAgi++
                break;
            case 2:
                newItemInt++
                break;
            case 3:
                newItemSta++
                break;
        }
    }
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
    
    newJewelry = new item(newItemName, Character.Inventory[currentSlot].slot, rarity, sellPrice, newItemArmor, newItemMinDam, newItemMaxDam, newItemStr, newItemAgi, newItemInt, newItemSta, ilvl)
    return newJewelry
}

function createWeapon(rarity, classType, tier, ilvl) {
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
    var newItemMinDam = Math.floor((ilvl / 20) + (Character.level * classType))
    var newItemMaxDam = Math.floor(((ilvl / 20) * 2) + (Character.level * classType))
    var newItemStr = 0
    var newItemAgi = 0
    var newItemInt = 0
    var newItemSta = 0

    for (i = 0; i < ilvl; i++) {
        statSelector = Math.floor(Math.random() * 4)
        switch (statSelector) {
            case 0:
                newItemStr++
                break;
            case 1:
                newItemAgi++
                break;
            case 2:
                newItemInt++
                break;
            case 3:
                newItemSta++
                break;
        }
    }
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
    
    newWeapon = new item(newItemName, Character.Inventory[currentSlot].slot, rarity, sellPrice, newItemArmor, newItemMinDam, newItemMaxDam, newItemStr, newItemAgi, newItemInt, newItemSta, ilvl)
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
    document.getElementById("newItemDam").innerHTML = newItem.minDamage + "-" + newItem.maxDamage
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
    document.getElementById("equippedItemDam").innerHTML = currentItem.minDamage + "-" + currentItem.maxDamage
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
    document.getElementById("selectedItemDam").innerHTML = Character.Inventory[selectedItem].minDamage + "-" + Character.Inventory[selectedItem].maxDamage
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
    var totalMinDam = 0
    var totalMaxDam = 0
    var totalStr = Character.stats.str
    var totalAgi = Character.stats.agi
    var totalInt = Character.stats.int
    var totalSta = Character.stats.sta
    var totalIlevel = 0
    var mainStat = ""
    
    document.getElementById("selectedItemDisplay").style.display = "none"
    document.getElementById("statsDisplay").style.display = "block"

    for (i = 0; i < 12; i++) {
        totalArmor += Character.Inventory[i].armor
        totalMinDam += Character.Inventory[i].minDamage
        totalMaxDam += Character.Inventory[i].maxDamage
        totalStr += Character.Inventory[i].str
        totalAgi += Character.Inventory[i].agi
        totalInt += Character.Inventory[i].int
        totalSta += Character.Inventory[i].sta
        totalIlevel += Character.Inventory[i].ilevel
    }
    switch (Character.primaryStat) {
        case "str":
            mainStat = totalStr
            break;
        case "agi":
            mainStat = totalAgi
            break;
        case "int":
            mainStat = totalInt
            break;
    }
    totalMaxDam += Math.floor(mainStat / 10)
    totalMinDam += Math.floor(mainStat / 10)

    document.getElementById("charDisplay").innerHTML = "<table><tr><td><h3>" + Character.name + "</h3></td></tr><tr><td>Level " + Character.level + " " + Character.gender + " " + Character.race + " " + Character.myClass + "</td></tr></table>"

    Character.maxDamage = totalMaxDam
    Character.minDamage = totalMinDam
    Character.stats.health = totalSta * 2

    document.getElementById("ilvlDisplay").innerHTML = Math.floor(totalIlevel / 12)
    document.getElementById("ilvlDisplay").style.color = "black"
    document.getElementById("armorDisplay").innerHTML = totalArmor
    document.getElementById("damDisplay").innerHTML = totalMinDam + "-" + totalMaxDam
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

function prepareCombat() {
    document.getElementById("combatDisplay").style.display = "block"
    document.getElementById("inventoryDisplay").style.display = "none"
    document.getElementById("topBar").style.display = "none"
    enemyAlive = 1
    buildEnemy()
    document.getElementById("combatLog").innerHTML = ""
    document.getElementById("combatLog").innerHTML = "<li>A level " + enemy.level + " " + enemy.name + " approaches!</li>"
    updateCombatDisplay()
}

function combat() {
    hitDamage = randomBetween(Character.minDamage, Character.maxDamage)    
    var node = document.createElement("Li");
    var textnode = document.createTextNode("You hit the " + enemy.name + " for " + hitDamage + " damage!");
    node.appendChild(textnode);
    document.getElementById("combatLog").insertBefore(node, document.getElementById("combatLog").childNodes[0]);    
    
    enemy.currentHealth -= hitDamage
    if (enemy.currentHealth <= 0) {
        document.getElementById("combatDisplay").style.display = "none"
        document.getElementById("inventoryDisplay").style.display = "block"
        document.getElementById("topBar").style.display = "block"
        enemyAlive = 0
        Character.currentExp += Math.floor((enemy.level * 10) * enemy.expModifier)
        updateExp()
        getLoot()
    }
    else {
        hitDamage = randomBetween(enemy.minDamage, enemy.maxDamage)        
        var node = document.createElement("Li");
        var textnode = document.createTextNode("The " + enemy.name + " hits you for " + hitDamage + " damage!");
        node.appendChild(textnode);
        node.style.color = "red"
        document.getElementById("combatLog").insertBefore(node, document.getElementById("combatLog").childNodes[0]);        
        Character.currentHealth -= hitDamage
    }
    updateCombatDisplay()
}

function buildEnemy() {
    var mobSelector = Math.floor(Math.random() * 3)
    console.log(mobSelector)
    var mobPicker
    switch (mobSelector) {
        case 0:
            mobPicker = Math.floor(Math.random() * mobsHumanoid.length)
            enemy = new mobHumanoid(mobsHumanoid[mobPicker])
            break;
        case 1:
            mobPicker = Math.floor(Math.random() * mobsBeast.length)
            enemy = new mobBeast(mobsBeast[mobPicker])
            break;
        case 2:
            mobPicker = Math.floor(Math.random() * mobsUndead.length)
            enemy = new mobUndead(mobsUndead[mobPicker])
            break;        
    }

    enemy.level = Character.level
    enemy.maxHealth = (100 * enemy.level) * enemy.expModifier
    enemy.currentHealth = enemy.maxHealth
    enemy.minDamage = enemy.minDamage * enemy.level
    enemy.maxDamage = enemy.maxDamage * enemy.level
}

function mobBeast(name) {    
    this.name = name
    this.type = "beast"
    this.minDamage = 1
    this.maxDamage = 2
    this.level = 0
    this.currentHealth = 0
    this.maxHealth = 0
    this.expModifier = .8
}

function mobHumanoid(name) {
    this.name = name
    this.type = "humanoid"
    this.minDamage = 2
    this.maxDamage = 3
    this.level = 0
    this.currentHealth = 0
    this.maxHealth = 0
    this.expModifier = 1
}

function mobUndead(name) {
    this.name = name
    this.type = "undead"
    this.minDamage = 1
    this.maxDamage = 4
    this.level = 0
    this.currentHealth = 0
    this.maxHealth = 0
    this.expModifier = .9
}

function updateCombatDisplay() {
    var enemyHPPercent = ((enemy.currentHealth / enemy.maxHealth) * 100) + "%"
    var playerHPPercent = ((Character.currentHealth / Character.stats.health) * 100)+ "%"
    var playerManaPercent = ((Character.currentMana / Character.stats.mana) * 100) + "%"
    var playerEnergyPercent = ((Character.currentEnergy / Character.stats.energy) * 100) + "%"
    
    document.getElementById("combatMobStatsDisplay").innerHTML = "<h3>Level " + enemy.level + " " + enemy.name + "</h3>"
    document.getElementById("combatMobHealthBarOverlay").innerHTML = enemy.currentHealth + " / " + enemy.maxHealth
    document.getElementById("combatMobHealthBar").style.width = enemyHPPercent
    document.getElementById("combatHealthBarOverlay").innerHTML = Character.currentHealth + " / " + Character.stats.health
    document.getElementById("combatHealthBar").style.width = playerHPPercent
    document.getElementById("combatManaBarOverlay").innerHTML = Character.currentMana + " / " + Character.stats.mana
    document.getElementById("combatManaBar").style.width = playerManaPercent
    document.getElementById("combatEnergyBarOverlay").innerHTML = Character.currentEnergy + " / " + Character.stats.energy
    document.getElementById("combatEnergyBar").style.width = playerEnergyPercent
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}