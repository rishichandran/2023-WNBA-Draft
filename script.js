const playersData = {
  "Aliyah Boston": { Scoring: 68.6, '3pt': 16.9, Facilitating: 45.00666667, 'At The Rim': 72.3, Defense: 66.74 },
  "Lou Lopez-Senechal": { Scoring: 65.055, '3pt': 85.7, Facilitating: 61.4, 'At The Rim': 58.9, Defense: 77.43607143 },
  "Elizabeth Kitley": { Scoring: 64.3, '3pt': 16.9, Facilitating: 45.00666667, 'At The Rim': 72.6, Defense: 66.74 },
  "Stephanie Soares": { Scoring: 60.139736, '3pt': 41.57828858, Facilitating: 51.19602842, 'At The Rim': 66.2618159, Defense: 65.20890002 },
  "Diamond Miller": { Scoring: 58.0330888, '3pt': 31.67815444, Facilitating: 55.51178121, 'At The Rim': 65.15969112, Defense: 69.25158301 },
  "Ashley Joens": { Scoring: 65.53042839, '3pt': 73.66546135, Facilitating: 64.42680798, 'At The Rim': 61.78063769, Defense: 66.27511445 },
  "Jordan Horston": { Scoring: 57.03548634, '3pt': 33.52242181, Facilitating: 55.38767607, 'At The Rim': 61.08593541, Defense: 70.14132493 },
  "Madi Williams": { Scoring: 48.6, '3pt': 16.9, Facilitating: 45.00666667, 'At The Rim': 67.6, Defense: 66.74 },
  "Alexis Morris": { Scoring: 66.06703239, '3pt': 67.01657534, Facilitating: 65.15825469, 'At The Rim': 58.33140538, Defense: 73.73165933 },
  "Maddy Siegrist": { Scoring: 50.97444089, '3pt': 46.23769968, Facilitating: 53.28890309, 'At The Rim': 63.55029667, Defense: 71.08060703 },
  "Georgia Amoore": { Scoring: 55.25003739, '3pt': 75.89358974, Facilitating: 60.405814, 'At The Rim': 48.48888889, Defense: 68.53418129 },
  "Zia Cooke": { Scoring: 53.71239674, '3pt': 71.34509552, Facilitating: 56.25989261, 'At The Rim': 52.53007022, Defense: 71.17946355 },
  "Monika Czinano": { Scoring: 53.27859442, '3pt': 33.92701574, Facilitating: 44.18343858, 'At The Rim': 66.52074578, Defense: 62.00004697 },
  "Taylor Mikesell": { Scoring: 56.32291964, '3pt': 70.0278925, Facilitating: 55.65461524, 'At The Rim': 46.09720344, Defense: 72.18544155 },
  "Leigha Brown": { Scoring: 48.97666876, '3pt': 46.84775545, Facilitating: 63.25506675, 'At The Rim': 52.05917033, Defense: 70.4310922 },
  "Abby Meyers": { Scoring: 52.40934125, '3pt': 64.26136927, Facilitating: 51.44309171, 'At The Rim': 54.28484206, Defense: 68.62729158 },
  "Jessika Carter": { Scoring: 44.3338757, '3pt': 9.25240064, Facilitating: 42.4695341, 'At The Rim': 59.39429181, Defense: 62.93882635 },
  "Laeticia Amihere": { Scoring: 41.06357185, '3pt': 17.92909521, Facilitating: 42.00577502, 'At The Rim': 61.92655891, Defense: 63.25087719 },
  "Dorka Juhasz": { Scoring: 44.93247835, '3pt': 16.15512171, Facilitating: 43.33872352, 'At The Rim': 61.9019768, Defense: 62.7001307 },
  "Diamond Battles": { Scoring: 44.00785677, '3pt': 44.68285957, Facilitating: 58.33992272, 'At The Rim': 45.79799073, Defense: 67.46902112 },
  "Francesca Belibi": { Scoring: 42.95823127, '3pt': 18.04039986, Facilitating: 41.85337056, 'At The Rim': 60.0375, Defense: 62.40648055 },
  "Haley Jones": { Scoring: 36.85621735, '3pt': 24.96783699, Facilitating: 47.79985371, 'At The Rim': 50.45096946, Defense: 63.9504737 },
  "Celeste Taylor": { Scoring: 35.92294199, '3pt': 46.13241462, Facilitating: 47.94041632, 'At The Rim': 45.69597558, Defense: 64.934351 },
  "Grace Berger": { Scoring: 32.6, '3pt': 44.15988095, Facilitating: 63, 'At The Rim': 39.9, Defense: 67.4 },
  "Charisma Osborne": { Scoring: 35.4869746, '3pt': 49.29510411, Facilitating: 45.87443675, 'At The Rim': 45.40590198, Defense: 60.87148234 },
  "Jacy Sheldon": { Scoring: 29.6, '3pt': 42.85654762, Facilitating: 46.6, 'At The Rim': 41.7, Defense: 67.6 },
  "Brea Beal": { Scoring: 35.59375485, '3pt': 46.16340999, Facilitating: 45.97829407, 'At The Rim': 47.39191769, Defense: 61.44724128 },
  "Victaria Saxton": { Scoring: 24.4, '3pt': 15.2, Facilitating: 42.8, 'At The Rim': 49.46666667, Defense: 63.08 },
  "Dara Mabrey": { Scoring: 33.4148653, '3pt': 53.51911086, Facilitating: 54.30066076, 'At The Rim': 35.87162514, Defense: 58.89912319 },
};

function populatePlayersDropdown() {
  const playerSelect1 = document.getElementById("player1");
  const playerSelect2 = document.getElementById("player2");

  for (const playerName in playersData) {
    const option1 = document.createElement("option");
    option1.value = playerName;
    option1.textContent = playerName;
    playerSelect1.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = playerName;
    option2.textContent = playerName;
    playerSelect2.appendChild(option2);
  }
}

function getPlayerData(playerName) {
  return Object.entries(playersData[playerName]).map(([key, value]) => ({
    axis: key,
    value: value,
  }));
}

function renderCharts() {
  const player1Name = document.getElementById("player1").value;
  const player2Name = document.getElementById("player2").value;

  const data = [
    {
      type: "scatterpolar",
      r: getPlayerData(player1Name).map((d) => d.value),
      theta: getPlayerData(player1Name).map((d) => d.axis),
      fill: "toself",
      name: player1Name,
      line: { color: "blue" },
    },
    {
      type: "scatterpolar",
      r: getPlayerData(player2Name).map((d) => d.value),
      theta: getPlayerData(player2Name).map((d) => d.axis),
      fill: "toself",
      name: player2Name,
      line: { color: "red" },
    },
  ];

  const layout = {
    polar: {
      radialaxis: { visible: false, range: [0, 100] },
    },
    showlegend: true,
  };

  Plotly.newPlot("chart", data, layout);
}

populatePlayersDropdown();
