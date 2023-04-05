const playersData = {
  "Aliyah Boston": { Scoring: 100, '3pt': 10.7, Facilitating: 21.4, 'At The Rim': 96.4, Defense: 46.4 },
  "Lou Lopez-Senechal": { Scoring: 89.2, '3pt': 100, Facilitating: 85.7, 'At The Rim': 53.5, Defense: 100 },
  "Elizabeth Kitley": { Scoring: 85.7, '3pt': 10.7, Facilitating: 21.4, 'At The Rim': 100, Defense: 46.4 },
  "Stephanie Soares": { Scoring: 82.1, '3pt': 42.8, Facilitating: 50, 'At The Rim': 85.7, Defense: 39.2 },
  "Diamond Miller": { Scoring: 78.5, '3pt': 32.1, Facilitating: 67.8, 'At The Rim': 82.1, Defense: 75 },
  "Ashley Joens": { Scoring: 92.8, '3pt': 92.8, Facilitating: 96.4, 'At The Rim': 67.8, Defense: 42.8 },
  "Jordan Horston": { Scoring: 75, '3pt': 35.7, Facilitating: 64.2, 'At The Rim': 64.2, Defense: 78.5 },
  "Madi Williams": { Scoring: 46.4, '3pt': 10.7, Facilitating: 21.4, 'At The Rim': 92.8, Defense: 46.4 },
  "Alexis Morris": { Scoring: 96.4, '3pt': 82.1, Facilitating: 100, 'At The Rim': 50, Defense: 96.4 },
  "Maddy Siegrist": { Scoring: 53.5, '3pt': 64.2, Facilitating: 57.1, 'At The Rim': 78.5, Defense: 85.7 },
  "Georgia Amoore": { Scoring: 67.8, '3pt': 96.4, Facilitating: 82.1, 'At The Rim': 28.5, Defense: 67.8 },
  "Zia Cooke": { Scoring: 64.2, '3pt': 89.2, Facilitating: 75, 'At The Rim': 42.8, Defense: 89.2 },
  "Monika Czinano": { Scoring: 60.7, '3pt': 39.2, Facilitating: 17.8, 'At The Rim': 89.2, Defense: 10.7 },
  "Taylor Mikesell": { Scoring: 71.4, '3pt': 85.7, Facilitating: 71.4, 'At The Rim': 21.4, Defense: 92.8 },
  "Leigha Brown": { Scoring: 50, '3pt': 67.8, Facilitating: 92.8, 'At The Rim': 39.2, Defense: 82.1 },
  "Abby Meyers": { Scoring: 57.1, '3pt': 78.5, Facilitating: 53.5, 'At The Rim': 46.4, Defense: 71.4 },
  "Jessika Carter": { Scoring: 39.2, '3pt': 0, Facilitating: 7.1, 'At The Rim': 57.1, Defense: 21.4 },
  "Laeticia Amihere": { Scoring: 28.5, '3pt': 21.4, Facilitating: 3.5, 'At The Rim': 75, Defense: 28.5 },
  "Dorka Juhasz": { Scoring: 42.8, '3pt': 7.1, Facilitating: 14.2, 'At The Rim': 71.4, Defense: 17.8 },
  "Diamond Battles": { Scoring: 35.7, '3pt': 53.5, Facilitating: 78.5, 'At The Rim': 17.8, Defense: 60.7 },
  "Francesca Belibi": { Scoring: 32.1, '3pt': 25, Facilitating: 0, 'At The Rim': 60.7, Defense: 14.2 },
  "Haley Jones": { Scoring: 25, '3pt': 28.5, Facilitating: 42.8, 'At The Rim': 35.7, Defense: 32.1 },
  "Celeste Taylor": { Scoring: 21.4, '3pt': 57.1, Facilitating: 46.4, 'At The Rim': 14.2, Defense: 35.7 },
  "Grace Berger": { Scoring: 7.1, '3pt': 50, Facilitating: 89.2, 'At The Rim': 3.5, Defense: 57.1 },
  "Charisma Osborne": { Scoring: 14.2, '3pt': 71.4, Facilitating: 32.1, 'At The Rim': 10.7, Defense: 3.5 },
  "Jacy Sheldon": { Scoring: 3.5, '3pt': 46.4, Facilitating: 39.2, 'At The Rim': 7.1, Defense: 64.2 },
  "Brea Beal": { Scoring: 17.8, '3pt': 60.7, Facilitating: 35.7, 'At The Rim': 25, Defense: 7.1 },
  "Victaria Saxton": { Scoring: 0, '3pt': 3.5, Facilitating: 10.7, 'At The Rim': 32.1, Defense: 25 },
  "Dara Mabrey": { Scoring: 10.7, '3pt': 75, Facilitating: 60.7, 'At The Rim': 0, Defense: 0 }
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
