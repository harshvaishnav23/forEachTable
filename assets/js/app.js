let cl = console.log;

const info1 = document.getElementById("info1")

const cricketers = [
    {
        name: "Virat Kohli",
        age: 33,
        country: "India",
        description: "One of the best batsmen in the world known for his aggressive playing style."
    },
    {
        name: "Kane Williamson",
        age: 31,
        country: "New Zealand",
        description: "A technically sound batsman and a great leader, known for his calm and composed approach."
    },
    {
        name: "Steve Smith",
        age: 32,
        country: "Australia",
        description: "An unorthodox batsman with a unique style, known for his exceptional concentration and shot selection."
    },
    {
        name: "Joe Root",
        age: 30,
        country: "England",
        description: "A reliable batsman and captain, known for his elegant stroke play and ability to score big centuries."
    },
    {
        name: "Kagiso Rabada",
        age: 26,
        country: "South Africa",
        description: "A fast bowler with excellent pace and skill, known for his ability to take wickets in crucial moments."
    },
    {
        name: "Jasprit Bumrah",
        age: 28,
        country: "India",
        description: "A deadly fast bowler with a unique bowling action, known for his accuracy and ability to bowl yorkers."
    },
    {
        name: "Shakib Al Hasan",
        age: 34,
        country: "Bangladesh",
        description: "An all-rounder who excels in both batting and bowling, known for his consistency and match-winning performances."
    },
    {
        name: "David Warner",
        age: 34,
        country: "Australia",
        description: "An aggressive left-handed batsman, known for his explosive batting and ability to dominate bowlers."
    },
    {
        name: "Ross Taylor",
        age: 37,
        country: "New Zealand",
        description: "An experienced batsman with a wide range of shots, known for his adaptability and game-changing innings."
    }

];

let res1 = '';

cricketers.forEach((obj, i) => {
    res1 += `
            <tr>
                <td>${i + 1}</td>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
                <td>${obj.country}</td>
                <td>${obj.description}</td>
            </tr>
            `
})

info1.innerHTML = res1;

// ##########################################################################################################

const info2 = document.getElementById("info2")

const indianKings = [
    {
      name: "Chandragupta Maurya",
      kingdom: "Maurya Empire",
      description: "The founder of the Maurya Empire, known for his military conquests and administrative skills.",
      wars: ["Conquest of Magadha", "Battle of the Hydaspes", "War against Seleucus"],
      image: "https://example.com/chandragupta-maurya.jpg"
    },
    {
      name: "Ashoka the Great",
      kingdom: "Maurya Empire",
      description: "A Mauryan emperor, known for his conversion to Buddhism and efforts towards spreading peace and harmony.",
      wars: ["Kalinga War", "Conquests in the Deccan", "Campaign against the Greeks"],
      image: "https://example.com/ashoka-the-great.jpg"
    },
    {
      name: "Krishna Deva Raya",
      kingdom: "Vijayanagara Empire",
      description: "One of the greatest emperors of the Vijayanagara Empire, known for his military victories and patronage of arts and literature.",
      wars: ["Battle of Raichur", "Battle of Diu", "Battle of Talikota"],
      image: "https://example.com/krishna-deva-raya.jpg"
    },
    {
      name: "chhatrapati shivaji maharaj",
      kingdom: "Maratha Empire",
      description: "The founder of the Maratha Empire, known for his guerrilla warfare tactics and establishing a strong naval presence.",
      wars: ["Deccan Sultanates", "Mughal Empire", "Portuguese"],
      image: "https://example.com/shivaji.jpg"
    },
    {
      name: "Akbar the Great",
      kingdom: "Mughal Empire",
      description: "One of the most influential Mughal emperors, known for his military campaigns, religious tolerance, and administrative reforms.",
      wars: ["Siege of Chittorgarh", "Battle of Haldighati", "Conquest of Gujarat"],
      image: "https://example.com/akbar-the-great.jpg"
    },
    {
      name: "Tipu Sultan",
      kingdom: "Kingdom of Mysore",
      description: "A valiant ruler of Mysore, known for his resistance against British colonialism and technological innovations.",
      wars: ["Anglo-Mysore Wars", "Siege of Srirangapatna", "Battle of Pollilur"],
      image: "https://example.com/tipu-sultan.jpg"
    },
    {
      name: "Raja Raja Chola I",
      kingdom: "Chola Empire",
      description: "A prominent ruler of the Chola Empire, known for his extensive building projects and naval expeditions.",
      wars: ["Conquest of Sri Lanka", "Invasions of Kerala", "Campaigns against the Pandyas"],
      image: "https://example.com/raja-raja-chola-i.jpg"
    },
    {
      name: "Samudragupta",
      kingdom: "Gupta Empire",
      description: "An influential emperor of the Gupta Empire, known for his military prowess and patronage of arts and culture.",
      wars: ["Conquest of Magadha", "Invasions of the Deccan", "Defeat of the Saka Satraps"],
      image: "https://example.com/samudragupta.jpg"
    },
    {
      name: "Harsha",
      kingdom: "Vardhana Empire",
      description: "A Buddhist emperor of the Vardhana Empire, known for his military campaigns and patronage of scholars and artists.",
      wars: ["Conquest of Kannauj", "Defeat of the Pulakeshin II", "Campaigns in the Himalayas"],
      image: "https://example.com/harsha.jpg"
    },
    {
      name: "Raja Bhoja",
      kingdom: "Paramara Dynasty",
      description: "A renowned king of the Paramara dynasty, known for his patronage of scholars, artists, and architects.",
      wars: ["Consolidation of Malwa", "Campaigns against the Chandelas", "Defenses against the Ghaznavids"],
      image: "https://example.com/raja-bhoja.jpg"
    }
  ];

  let res2 = '';

  indianKings.forEach((ele, j) => {
    res2 += `
                <tr>
                    <td>${j + 1}</td>
                    <td>${ele.name}</td>
                    <td>${ele.kingdom}</td>
                    <td>${ele.description}</td>
                    <td>${ele.wars}</td>
                </tr>   
            `
  });

  info2.innerHTML = res2;

  // ############################################################################################

  const info3 = document.getElementById("info3")

  let lappyBrands = [
    {
      name: "Smartphone",
      price: 999,
      description: "A high-quality smartphone with advanced features.",
      image: "https://example.com/smartphone.jpg"
    },
    {
      name: "Laptop",
      price: 1499,
      description: "A powerful laptop for professional use.",
      image: "https://example.com/laptop.jpg"
    },
    {
      name: "Headphones",
      price: 199,
      description: "Wireless headphones with excellent sound quality.",
      image: "https://example.com/headphones.jpg"
    },
    {
      name: "Smart Watch",
      price: 299,
      description: "A stylish smartwatch with fitness tracking features.",
      image: "https://example.com/smartwatch.jpg"
    },
    {
      name: "Camera",
      price: 899,
      description: "A high-resolution camera for capturing professional-quality photos.",
      image: "https://example.com/camera.jpg"
    },
    {
      name: "Television",
      price: 1299,
      description: "A large-screen television with 4K resolution.",
      image: "https://example.com/television.jpg"
    },
    {
      name: "Gaming Console",
      price: 399,
      description: "A gaming console for immersive gaming experiences.",
      image: "https://example.com/gaming-console.jpg"
    },
    {
      name: "Wireless Speaker",
      price: 149,
      description: "A portable wireless speaker with excellent audio performance.",
      image: "https://example.com/wireless-speaker.jpg"
    },
    {
      name: "Tablet",
      price: 599,
      description: "A versatile tablet for work and entertainment.",
      image: "https://example.com/tablet.jpg"
    },
    {
      name: "Fitness Tracker",
      price: 79,
      description: "A wearable device for monitoring fitness activities.",
      image: "https://example.com/fitness-tracker.jpg"
    }
  ];
  let res3 = '';

  lappyBrands.forEach((ele, i) => {
    res3 += `
                <tr>
                  <td>${i + 1}</td>
                  <td>${ele.name}</td>
                  <td>${ele.price}</td>
                  <td>${ele.description}</td>
                </tr>
           `
  });

  info3.innerHTML = res3;