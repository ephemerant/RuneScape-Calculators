// return tasks that can be assigned based on a slayer level
function getTasks(tasks, slayerLevel, blocked, preferred) {
  var result = {};

  // clone the base tasks, since we will be modifying them
  tasks = JSON.parse(JSON.stringify(tasks));

  Object.keys(tasks).forEach(function (monster) {
    var task = tasks[monster];

    if (blocked.includes(monster))
      return;

    if (preferred.includes(monster))
      task.weight *= 2;

    if (slayerLevel >= task.slayerLevel)
      result[monster] = task;
  });

  return result;
}

// gets the total weight of a set of tasks
function getWeight(tasks) {
  var total = 0;

  Object.values(tasks).forEach(function (task) {
    total += task.weight;
  });

  return total;
}

// tasks for Duradel
var tasks = {
  "Aberrant spectres": {
    "weight": 10,
    "slayerLevel": 60
  },
  "Abyssal demon": {
    "weight": 15,
    "slayerLevel": 85
  },
  "Airut": {
    "weight": 16,
    "slayerLevel": 92
  },
  "Aquanite": {
    "weight": 9,
    "slayerLevel": 78
  },
  "Ascension members": {
    "weight": 8,
    "slayerLevel": 81
  },
  // "Automatons": { // World Wakes
  //   "weight": 8,
  //   "slayerLevel": 67
  // },
  // "Aviansie": { // GWD dying knight
  //   "weight": 8,
  //   "slayerLevel": 1
  // },
  "Black demon": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Black dragon": {
    "weight": 9,
    "slayerLevel": 1
  },
  "Bloodveld": {
    "weight": 20,
    "slayerLevel": 50
  },
  // "Celestial dragons": { // One of a Kind
  //   "weight": 16,
  //   "slayerLevel": 1
  // },
  "Dagannoth": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Dark beast": { // Mourning's End?
    "weight": 15,
    "slayerLevel": 90
  },
  "Desert strykewyrm": {
    "weight": 11,
    "slayerLevel": 77
  },
  "Dust devil": {
    "weight": 10,
    "slayerLevel": 65
  },
  "Fire giant": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Fungal mage": {
    "weight": 8,
    "slayerLevel": 1
  },
  "Ganodermic creatures": {
    "weight": 6,
    "slayerLevel": 95
  },
  "Gargoyle": {
    "weight": 10,
    "slayerLevel": 75
  },
  "Gorak": {
    "weight": 5,
    "slayerLevel": 1
  },
  "Greater demon": {
    "weight": 11,
    "slayerLevel": 1
  },
  "Grifolapine": {
    "weight": 10,
    "slayerLevel": 88
  },
  "Grifolaroo": {
    "weight": 10,
    "slayerLevel": 82
  },
  "Grotworm": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Hellhound": {
    "weight": 9,
    "slayerLevel": 1
  },
  "Ice strykewyrm": {
    "weight": 8,
    "slayerLevel": 93
  },
  "Iron dragon": {
    "weight": 9,
    "slayerLevel": 1
  },
  "Jungle strykewyrm": {
    "weight": 10,
    "slayerLevel": 73
  },
  "Kalphites": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Mithril dragon": {
    "weight": 7,
    "slayerLevel": 1
  },
  "Mutated jadinko": {
    "weight": 8,
    "slayerLevel": 80
  },
  "Nechryael": {
    "weight": 10,
    "slayerLevel": 80
  },
  "Scabarites": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Skeletal Wyvern": {
    "weight": 5,
    "slayerLevel": 72
  },
  "Spiritual Mage": {
    "weight": 10,
    "slayerLevel": 83
  },
  "Steel dragon": {
    "weight": 7,
    "slayerLevel": 1
  },
  "Suqah": { // Lunar Diplomacy
    "weight": 5,
    "slayerLevel": 1
  },
  // "Vyrewatch": { // Branches of Darkmeyer
  //   "weight": 8,
  //   "slayerLevel": 1
  // },
  // "Warped terrorbird": { // Path of Glouphrie
  //   "weight": 9,
  //   "slayerLevel": 56
  // },
  "Waterfiend": {
    "weight": 10,
    "slayerLevel": 1
  }
};

var sumonaTasks = {
  "Aberrant spectres": {
    "weight": 15,
    "slayerLevel": 60
  },
  "Abyssal demons": {
    "weight": 10,
    "slayerLevel": 85
  },
  "Aquanites": {
    "weight": 10,
    "slayerLevel": 78
  },
  // "Automatons": {
  //   "weight": 8,
  //   "slayerLevel": 67
  // },
  // "Aviansie": {
  //   "weight": 8,
  //   "slayerLevel": 1
  // },
  "Banshees": {
    "weight": 15,
    "slayerLevel": 15
  },
  "Basilisks": {
    "weight": 15,
    "slayerLevel": 40
  },
  "Black demons": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Bloodveld": {
    "weight": 10,
    "slayerLevel": 50
  },
  "Blue dragons": {
    "weight": 8,
    "slayerLevel": 1
  },
  "Cave crawlers": {
    "weight": 15,
    "slayerLevel": 10
  },
  "Cave horrors": {
    "weight": 15,
    "slayerLevel": 58
  },
  // "Corrupted Creatures": {
  //   "weight": 15,
  //   "slayerLevel": null
  // },
  "Dagannoth": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Desert strykewyrms": {
    "weight": 14,
    "slayerLevel": 77
  },
  "Dust devils": {
    "weight": 15,
    "slayerLevel": 65
  },
  "Elves": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Fire giants": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Fungal mages": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Gargoyles": {
    "weight": 10,
    "slayerLevel": 75
  },
  "Greater demons": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Grifolapines": {
    "weight": 8,
    "slayerLevel": 88
  },
  "Grifolaroos": {
    "weight": 8,
    "slayerLevel": 82
  },
  "Grotworms": {
    "weight": 15,
    "slayerLevel": 1
  },
  "Hellhounds": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Iron dragons": {
    "weight": 7,
    "slayerLevel": 1
  },
  "Jungle strykewyrm": {
    "weight": 12,
    "slayerLevel": 73
  },
  "Kalphites": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Kurasks": {
    "weight": 15,
    "slayerLevel": 70
  },
  "Mutated jadinko": {
    "weight": 10,
    "slayerLevel": 80
  },
  "Nechryaels": {
    "weight": 10,
    "slayerLevel": 80
  },
  "Red dragons": {
    "weight": 5,
    "slayerLevel": 1
  },
  "Scabarites": {
    "weight": 5,
    "slayerLevel": 1
  },
  // "Soul devourers": {
  //   "weight": 15,
  //   "slayerLevel": null
  // },
  "Spiritual mages": {
    "weight": 10,
    "slayerLevel": 83
  },
  // "Spiritual rangers": {
  //   "weight": 0,
  //   "slayerLevel": 63
  // },
  // "Spiritual warriors": {
  //   "weight": 10,
  //   "slayerLevel": 68
  // },
  "Terror dogs": {
    "weight": 10,
    "slayerLevel": 40
  },
  "Trolls": {
    "weight": 10,
    "slayerLevel": 1
  },
  "Turoth": {
    "weight": 15,
    "slayerLevel": 55
  }
  // "Vyrewatch": {
  //   "weight": 10,
  //   "slayerLevel": 1
  // },
  // "Warped tortoises": {
  //   "weight": 10,
  //   "slayerLevel": 56
  // }
};

// gets the chance of receiving a monster as a task
function taskChance(monster, tasks, slayerLevel, blocked, preferred, tickets) {
  tasks = getTasks(tasks, slayerLevel, blocked, preferred);

  var totalWeight = getWeight(tasks);

  var averageWeight = totalWeight / Object.keys(tasks).length;

  if (!tickets)
    return tasks[monster].weight / totalWeight;
  else
    return 1 - ((totalWeight - tasks[monster].weight) / totalWeight) * ((totalWeight - tasks[monster].weight - averageWeight) / (totalWeight - averageWeight));
}

console.log(taskChance('Jungle strykewyrm', tasks, 73, ['Bloodveld'], ['Jungle strykewyrm'], true));