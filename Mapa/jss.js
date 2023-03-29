const urls = [
  "./data/equipment.json",
  "./data/equipmentModel.json",
  "./data/equipmentPositionHistory.json",
  "./data/equipmentState.json",
  "./data/equipmentStateHistory.json",
];

const requests = urls.map((url) => fetch(url));

Promise.all(requests)
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((data) => {
    const equipments = data[0];
    const equipmentModels = data[1];
    const positionHistorys = data[2];
    const equipmentStates = data[3];
    const stateHistorys = data[4];

    //Repeticao
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j <= 9; j++) {
        //   a354
        if (equipments[i].equipmentModelId === equipmentModels[0].id) {
          if (
            equipmentStates[0].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[0].name}</p>
        <div class="status1"></div>
`
              )
              .openPopup();
          } else if (
            equipmentStates[1].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[1].name}</p>
        <div class="status2"></div>


    `
              )
              .openPopup();
          } else if (
            equipmentStates[2].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[2].name}</p>
        <div class="status3"></div>


        `
              )
              .openPopup();
          }
        }

        //     a4b0
        if (equipments[i].equipmentModelId === equipmentModels[1].id) {
          if (
            equipmentStates[0].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[0].name}</p>
        <div class="status1"></div>

        `
              )
              .openPopup();
          } else if (
            equipmentStates[1].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[1].name}</p>
        <div class="status2"></div>
        
        `
              )
              .openPopup();
          } else if (
            equipmentStates[2].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[2].name}</p>
        <div class="status3"></div>

`
              )
              .openPopup();
          }
        }

        if (equipments[i].equipmentModelId === equipmentModels[2].id) {
          if (
            equipmentStates[0].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[0].name}</p>
        <div class="status1"></div>

`
              )
              .openPopup();
          } else if (
            equipmentStates[1].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[1].name}</p>
        <div class="status2"></div>

       `
              )
              .openPopup();
          } else if (
            equipmentStates[2].id ===
            stateHistorys[i].states[i].equipmentStateId
          ) {
            L.marker([
              positionHistorys[i].positions[0].lat,
              positionHistorys[i].positions[0].lon,
            ])
              .addTo(map)

              .bindPopup(
                `

        <p class="statusP2">${equipmentModels[2].name}</p>
        <p class="statusP1">Status :${equipmentStates[2].name}</p>
        <div class="status3"></div>

`
              )
              .openPopup();
          }
        }

        console.log(stateHistorys[0].states[i].equipmentStateId);
      }
    }
  });

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
