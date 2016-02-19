var inventory = [["invHead", 0, 0, "Nothing", 0, 0, 0, 0, 0], 
                 ["invChest", 1, 1, "Old Tunic", 1, 0, 0, 0, 0],
                 ["invLegs", 1, 1, "Old Pants", 1, 0, 0, 0, 0],
                 ["invShoulders", 0, 0, "Nothing", 0, 0, 0, 0, 0],
                 ["invWrists", 0, 0, "Nothing", 0, 0, 0, 0, 0],
                 ["invHands", 0, 0, "Nothing", 0, 0, 0, 0, 0],
                 ["invFeet", 1, 1, "Old Shoes", 1, 0, 0, 0, 0],
                 ["invWaist", 0, 0, "Nothing", 0, 0, 0, 0, 0],
                 ["invNeck", 0, 0, "Nothing", 0, 0, 0, 0, 0],
                 ["invFinger", 1, 5, "Copper Ring", 10, 1, 1, 1, 1],
                 ["invMainHand", 1, 0, "Wooden Club", 2, 0, 0, 0, 0],
                 ["invOffHand", 0, 0, "Nothing", 0, 0, 0, 0, 0]]
//inventory slot, rarity, price, name, armor/damage, strength, agility, intelligence, stamina


var itemType = ["Helm", "Chestpiece", "Greaves", "Pauldrons", "Bracers", "Gauntlets", "Boots", "Belt", "Amulet", "Ring", "Sword", "Shield"]

var materialType = [["Nothing", "Cloth", "Leather", "Chain", "Plate", "Mithril"],
                    ["Nothing", "Wooden", "Copper", "Iron", "Steel", "Mithril"]]

var itemRarity = ["Nothing", "Common", "Uncommon", "Rare", "Epic", "Legendary"]
var currentItem
var newItem
var slot


function getLoot() {
    
    var itemSlot
    var rarity    
    var calcRarity = Math.random()
    var itemPrefix    
    var material

    if (calcRarity >= 0 && calcRarity <= .9) {
        rarity = 1
    }
    else if (calcRarity > .9 && calcRarity <= .95) {
        rarity = 2
    }
    else if (calcRarity > .95 && calcRarity <= .975) {
        rarity = 3
    }
    else if (calcRarity > .975 && calcRarity <= .995) {
        rarity = 4
    }
    else if (calcRarity > .995) {
        rarity = 5
    }

    slot = Math.floor(Math.random() * 12)
    if (slot >= 0 && slot <= 9) {
        material = 0
    }
    else if (slot >= 10) {
        material = 1
    }

    document.getElementById("lootRarity").innerHTML = itemRarity[rarity]

    newItem = materialType[material][rarity] + " " + itemType[slot]
    currentItem = inventory[slot][3]

    updateLootDisplay()
    updateInventory()

}

function keepLoot() {
    var tempItem
    tempItem = inventory[slot][3]
    inventory[slot][3] = newItem
    currentItem = newItem
    newItem = tempItem
    
    updateLootDisplay()
    updateInventory()
}

function updateLootDisplay() {
    document.getElementById("itemDisplay").innerHTML = newItem
    document.getElementById("currentItemDisplay").innerHTML = currentItem
}

function updateInventory() {
    for (i = 0; i < 12; i++) {
        document.getElementById(inventory[i][0]).innerHTML = inventory[i][3]
    }
}