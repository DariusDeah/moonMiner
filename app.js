let bolts = 0;
let img = document.querySelector('img');
let pokeballBtn = document.getElementById('pokeballBtn')

let clickUpgrades = {
  pokeball: {
    price: [150, 250, 350, 450, 550, 650],
    quantity: 0,
    multiplier: [3,6,9,12,18,24]
  },
  lightningRod: {
    price: [300,600,900,1200,1500,2000],
    quantity: 0,
    multiplier:[10,20,30,40,50,60]
  }

};
let autoUpgrades = {
  trainer: {
    price: [600,1200,1800,2400,3000],
    quantity: 0,
    multiplier: [20,40,60,80,100]
  },
  evolution: {
    price: [800,1600,2400,3200],
    quantity: 0,
    multiplier: [80,130,200,300]

  }

};


(function showItemsBasePrice() {
  
  document.getElementById('pokeballCost').innerText = clickUpgrades.pokeball.price[0].toString()

 

  document.getElementById('trainerCost').innerText = autoUpgrades.trainer.price[0].toString()

  document.getElementById('lightningRodCost').innerText = clickUpgrades.lightningRod.price[0].toString()

  document.getElementById('evolutionCost').innerText = autoUpgrades.evolution.price[0].toString()

}());
(function showItemsBaseMultiplier() {
  document.getElementById('pokeballMultiplyAmount').innerText = clickUpgrades.pokeball.multiplier[0].toString()

  document.getElementById('lightningrodMultiplyAmount').innerText = clickUpgrades.lightningRod.multiplier[0].toString()
  document.getElementById('evolutionMultiplyAmount').innerText = autoUpgrades.evolution.multiplier[0].toString()
  document.getElementById('trainerMultiplyAmount').innerText = autoUpgrades.trainer.multiplier[0].toString()
  
}());

//#region 
function mine() {
 clickUpgrades.pokeball.quantity === 0?
    bolts++ :activatePokeballMultiply()

  clickUpgrades.lightningRod.quantity !== 0 ?
    activateLightingrodMultiply() : ''
  
  autoUpgrades.trainer.quantity !== 0 ?
   activateTrainerMultiply():''
  
  autoUpgrades.evolution.quantity !== 0 ?
    activateEvolutionMultiply():''


 update();


}
function update() {
  document.getElementById('boltsAmount').innerText = bolts.toString();

  document.getElementById('lightingRodAmount').innerText = clickUpgrades.lightningRod.quantity.toString();

  document.getElementById('pokeballAmount').innerText = clickUpgrades.pokeball.quantity.toString();

  document.getElementById('evolutionAmount').innerText = autoUpgrades.evolution.quantity.toString();

  document.getElementById('trainerAmount').innerText = autoUpgrades.trainer.quantity.toString();
  
};


function buyPokeball() {
  if (bolts >= clickUpgrades.pokeball.price[0] && clickUpgrades.pokeball.quantity == 0) {
    bolts -= clickUpgrades.pokeball.price[0]
    clickUpgrades.pokeball.quantity++
  } else if  (bolts >= clickUpgrades.pokeball.price[1] &&
    clickUpgrades.pokeball.quantity === 1) {
     bolts -= clickUpgrades.pokeball.price[1]
    clickUpgrades.pokeball.quantity++
  } else if (bolts >= clickUpgrades.pokeball.price[2] &&
    clickUpgrades.pokeball.quantity === 2) {
     bolts -= clickUpgrades.pokeball.price[2]
    clickUpgrades.pokeball.quantity++
  }
  else if (bolts >= clickUpgrades.pokeball.price[3] &&
    clickUpgrades.pokeball.quantity === 3) {
     bolts -= clickUpgrades.pokeball.price[3]
    clickUpgrades.pokeball.quantity++
  }
  else if (bolts >= clickUpgrades.pokeball.price[4] &&
    clickUpgrades.pokeball.quantity === 4) {
     bolts -= clickUpgrades.pokeball.price[4]
    clickUpgrades.pokeball.quantity++
  }
  else if  (bolts >= clickUpgrades.pokeball.price[5] &&
    clickUpgrades.pokeball.quantity === 5) {
     bolts -= clickUpgrades.pokeball.price[5]
    clickUpgrades.pokeball.quantity++
  }
  

  update();
  changePokeballPrice();
  changePokeballMultiplyAmount();

  
};
function changePokeballPrice() {
  clickUpgrades.pokeball.quantity === 1 ? document.getElementById('pokeballCost').innerText = clickUpgrades.pokeball.price[1].toString() :
    clickUpgrades.pokeball.quantity === 2 ? document.getElementById('pokeballCost').innerText = clickUpgrades.pokeball.price[2].toString() :
      clickUpgrades.pokeball.quantity === 3 ? document.getElementById('pokeballCost').innerText = clickUpgrades.pokeball.price[3].toString() :
        clickUpgrades.pokeball.quantity === 4 ? document.getElementById('pokeballCost').innerText = clickUpgrades.pokeball.price[4].toString() :
          clickUpgrades.pokeball.quantity === 5 ? document.getElementById('pokeballCost').innerText = clickUpgrades.pokeball.price[5].toString() : '';
  

  
}
function changePokeballMultiplyAmount() {
  clickUpgrades.pokeball.quantity === 1 ? document.getElementById('pokeballMultiplyAmount').innerText = clickUpgrades.pokeball.multiplier[1].toString() :
    clickUpgrades.pokeball.quantity === 2 ? document.getElementById('pokeballMultiplyAmount').innerText = clickUpgrades.pokeball.multiplier[2].toString() :
      clickUpgrades.pokeball.quantity === 3 ? document.getElementById('pokeballMultiplyAmount').innerText = clickUpgrades.pokeball.multiplier[3].toString() :
        clickUpgrades.pokeball.quantity === 4 ? document.getElementById('pokeballMultiplyAmount').innerText = clickUpgrades.pokeball.multiplier[4].toString() :
          clickUpgrades.pokeball.quantity === 5 ? document.getElementById('pokeballMultiplyAmount').innerText = clickUpgrades.pokeball.multiplier[5].toString() : '';
  
}
function activatePokeballMultiply() {
   clickUpgrades.pokeball.quantity === 1 ?
  bolts +=  clickUpgrades.pokeball.multiplier[0]:
   clickUpgrades.pokeball.quantity === 2 ?
  bolts +=  clickUpgrades.pokeball.multiplier[1]:
   clickUpgrades.pokeball.quantity === 3 ?
  bolts +=  clickUpgrades.pokeball.multiplier[2]:
   clickUpgrades.pokeball.quantity === 4 ?
  bolts +=  clickUpgrades.pokeball.multiplier[3]:
   clickUpgrades.pokeball.quantity === 5 ?
  bolts +=  clickUpgrades.pokeball.multiplier[4]:
   clickUpgrades.pokeball.quantity === 6 ?
  bolts +=  clickUpgrades.pokeball.multiplier[5]:''
  
  
}


function buyLightningRod() {
  if (bolts >= clickUpgrades.lightningRod.price[0] && clickUpgrades.lightningRod.quantity == 0) {
     bolts -= clickUpgrades.lightningRod.price[0]
    clickUpgrades.lightningRod.quantity++
  } else if (bolts >= clickUpgrades.lightningRod.price[1]) {
    bolts -= clickUpgrades.lightningRod.price[1]
    clickUpgrades.lightningRod.quantity++
  } else if (bolts >= clickUpgrades.lightningRod.price[2]){
    bolts -= clickUpgrades.lightningRod.price[2]
    clickUpgrades.lightningRod.quantity++
  } else if (bolts >= clickUpgrades.lightningRod.price[3]){
    bolts -= clickUpgrades.lightningRod.price[3]
    clickUpgrades.lightningRod.quantity++
  } else if (bolts >= clickUpgrades.lightningRod.price[4]){
    bolts -= clickUpgrades.lightningRod.price[4]
    clickUpgrades.lightningRod.quantity++
  } else if (bolts >= clickUpgrades.lightningRod.price[5]){
    bolts -= clickUpgrades.lightningRod.price[5]
    clickUpgrades.lightningRod.quantity++
  }


  
  update();
  changeLightingPrice();
  changelightingrodMultiplyAmount();

}
function changeLightingPrice() {
   clickUpgrades.lightningRod.quantity === 1 ? document.getElementById('lightningRodCost').innerText = clickUpgrades.lightningRod.price[1].toString() :
    clickUpgrades.lightningRod.quantity === 2 ? document.getElementById('lightningRodCost').innerText = clickUpgrades.lightningRod.price[2].toString() :
      clickUpgrades.lightningRod.quantity === 3 ? document.getElementById('lightningRodCost').innerText = clickUpgrades.lightningRod.price[3].toString() :
        clickUpgrades.lightningRod.quantity === 4 ? document.getElementById('lightningRodCost').innerText = clickUpgrades.lightningRod.price[4].toString() :
          clickUpgrades.lightningRod.quantity === 5 ? document.getElementById('lightningRodCost').innerText = clickUpgrades.lightningRod.price[5].toString() : '';
  
}
function changelightingrodMultiplyAmount() {
  clickUpgrades.lightningRod.quantity === 1 ? document.getElementById('lightningrodMultiplyAmount').innerText = clickUpgrades.lightningRod.multiplier[1].toString() :
    clickUpgrades.lightningRod.quantity === 2 ? document.getElementById('lightningrodMultiplyAmount').innerText = clickUpgrades.lightningRod.multiplier[2].toString() :
      clickUpgrades.lightningRod.quantity === 3 ? document.getElementById('lightningrodMultiplyAmount').innerText = clickUpgrades.lightningRod.multiplier[3].toString() :
        clickUpgrades.lightningRod.quantity === 4 ? document.getElementById('lightningrodMultiplyAmount').innerText = clickUpgrades.lightningRod.multiplier[4].toString() :
          clickUpgrades.lightningRod.quantity === 5 ? document.getElementById('lightningrodMultiplyAmount').innerText = clickUpgrades.lightningRod.multiplier[5].toString() : '';
}
function activateLightingrodMultiply() {
   clickUpgrades.lightningRod.quantity === 1 ?
  bolts +=  clickUpgrades.lightningRod.multiplier[0]:
   clickUpgrades.lightningRod.quantity === 2 ?
  bolts +=  clickUpgrades.lightningRod.multiplier[1]:
   clickUpgrades.lightningRod.quantity === 3 ?
  bolts +=  clickUpgrades.lightningRod.multiplier[2]:
   clickUpgrades.lightningRod.quantity === 4 ?
  bolts +=  clickUpgrades.lightningRod.multiplier[3]:
   clickUpgrades.lightningRod.quantity === 5 ?
  bolts +=  clickUpgrades.lightningRod.multiplier[4]:
   clickUpgrades.lightningRod.quantity === 6 ?
  bolts +=  clickUpgrades.lightningRod.multiplier[5]:''
}


function buyTrainer(){
  if (bolts >= autoUpgrades.trainer.price[0] && autoUpgrades.trainer.quantity == 0) {
    bolts -= autoUpgrades.trainer.price[0]
    autoUpgrades.trainer.quantity++
  } else if (bolts >= autoUpgrades.trainer.price[1]) {
    bolts -= autoUpgrades.trainer.price[1]
    autoUpgrades.trainer.quantity++
  } else if (bolts >= autoUpgrades.trainer.price[2]) {
    bolts -= autoUpgrades.trainer.price[2]
    autoUpgrades.trainer.quantity++
  } else if (bolts >= autoUpgrades.trainer.price[3]) {
    bolts -= autoUpgrades.trainer.price[3]
    autoUpgrades.trainer.quantity++
  } else if (bolts >= autoUpgrades.trainer.price[4]) {
    bolts -= autoUpgrades.trainer.price[4]
    autoUpgrades.trainer.quantity++
  } else if (bolts >= autoUpgrades.trainer.price[5]) {
    bolts -= autoUpgrades.trainer.price[5]
    autoUpgrades.trainer.quantity++
  } else {document.getElementById('trainerBtn').classList.add('shakey') }
  

  update();
  changetrainerPrice();
  changeTrainerMultiplyAmount();
}
function changetrainerPrice(){
   autoUpgrades.trainer.quantity === 1 ? document.getElementById('trainerCost').innerText = autoUpgrades.trainer.price[1].toString() :
    autoUpgrades.trainer.quantity === 2 ? document.getElementById('trainerCost').innerText = autoUpgrades.trainer.price[2].toString() :
      autoUpgrades.trainer.quantity === 3 ? document.getElementById('trainerCost').innerText = autoUpgrades.trainer.price[3].toString() :
        autoUpgrades.trainer.quantity === 4 ? document.getElementById('trainerCost').innerText = autoUpgrades.trainer.price[4].toString() :
         '';  
}
function changeTrainerMultiplyAmount() {
   autoUpgrades.trainer.quantity === 1 ? document.getElementById('trainerMultiplyAmount').innerText = autoUpgrades.trainer.multiplier[1].toString() :
    autoUpgrades.trainer.quantity === 2 ? document.getElementById('trainerMultiplyAmount').innerText = autoUpgrades.trainer.multiplier[2].toString() :
      autoUpgrades.trainer.quantity === 3 ? document.getElementById('trainerMultiplyAmount').innerText = autoUpgrades.trainer.multiplier[3].toString() :
        autoUpgrades.trainer.quantity === 4 ? document.getElementById('trainerMultiplyAmount').innerText = autoUpgrades.trainer.multiplier[4].toString() :
          autoUpgrades.trainer.quantity === 5 ? document.getElementById('trainerMultiplyAmount').innerText = autoUpgrades.trainer.multiplier[5].toString() : '';
}
function activateTrainerMultiply() {
  autoUpgrades.trainer.quantity === 1 ?
  bolts += autoUpgrades.trainer.multiplier[0]:
  autoUpgrades.trainer.quantity === 2 ?
  bolts += autoUpgrades.trainer.multiplier[1]:
  autoUpgrades.trainer.quantity === 3 ?
  bolts += autoUpgrades.trainer.multiplier[2]:
  autoUpgrades.trainer.quantity === 4 ?
  bolts += autoUpgrades.trainer.multiplier[3]:
  autoUpgrades.trainer.quantity === 5 ?
  bolts += autoUpgrades.trainer.multiplier[4]:
  autoUpgrades.trainer.quantity === 6 ?
  bolts += autoUpgrades.trainer.multiplier[5]:''
}



function buyEvolution() {
  if (bolts >= autoUpgrades.evolution.price[0] && autoUpgrades.evolution.quantity == 0) {
    bolts -= autoUpgrades.evolution.price[0]
    autoUpgrades.evolution.quantity++
  } else if (bolts >= autoUpgrades.evolution.price[1] &&
    autoUpgrades.evolution.quantity === 1) {
    bolts -= autoUpgrades.evolution.price[1]
    autoUpgrades.evolution.quantity++
  } else if (bolts >= autoUpgrades.evolution.price[2] &&
    autoUpgrades.evolution.quantity === 2) {
    bolts -= autoUpgrades.evolution.price[2]
    autoUpgrades.evolution.quantity++
  }
  else if (bolts >= autoUpgrades.evolution.price[3] &&
    autoUpgrades.evolution.quantity === 3) {
    bolts -= autoUpgrades.evolution.price[3]
    autoUpgrades.evolution.quantity++
  }
  else if (bolts >= autoUpgrades.evolution.price[4] &&
    autoUpgrades.evolution.quantity === 4) {
    bolts -= autoUpgrades.evolution.price[4]
    autoUpgrades.evolution.quantity++
  }
  else if (bolts >= autoUpgrades.evolution.price[5] &&
    autoUpgrades.evolution.quantity === 5) {
    bolts -= autoUpgrades.evolution.price[5]
    autoUpgrades.evolution.quantity++
  }
  

  update();
  changeEvolutionPrice();
  changeEvolutionMultiplyAmount();

}
function changeEvolutionPrice() {
   autoUpgrades.evolution.quantity === 1 ? document.getElementById('evolutionCost').innerText = autoUpgrades.evolution.price[1].toString() :
    autoUpgrades.evolution.quantity === 2 ? document.getElementById('evolutionCost').innerText = autoUpgrades.evolution.price[2].toString() :
      autoUpgrades.evolution.quantity === 3 ? document.getElementById('evolutionCost').innerText = autoUpgrades.evolution.price[3].toString() :
         '';  
}
function changeEvolutionMultiplyAmount() {
   autoUpgrades.evolution.quantity === 1 ? document.getElementById('evolutionMultiplyAmount').innerText = autoUpgrades.evolution.multiplier[1].toString() :
    autoUpgrades.evolution.quantity === 2 ? document.getElementById('evolutionMultiplyAmount').innerText = autoUpgrades.evolution.multiplier[2].toString() :
      autoUpgrades.evolution.quantity === 3 ? document.getElementById('evolutionMultiplyAmount').innerText = autoUpgrades.evolution.multiplier[3].toString() :
        autoUpgrades.evolution.quantity === 4 ? document.getElementById('evolutionMultiplyAmount').innerText = autoUpgrades.evolution.multiplier[4].toString() :
          autoUpgrades.evolution.quantity === 5 ? document.getElementById('evolutionMultiplyAmount').innerText = autoUpgrades.evolution.multiplier[5].toString() : '';
}
function activateEvolutionMultiply() {
  autoUpgrades.evolution.quantity === 1 ?
  bolts += autoUpgrades.evolution.multiplier[0]:
  autoUpgrades.evolution.quantity === 2 ?
  bolts += autoUpgrades.evolution.multiplier[1]:
  autoUpgrades.evolution.quantity === 3 ?
  bolts += autoUpgrades.evolution.multiplier[2]:
  autoUpgrades.evolution.quantity === 4 ?
  bolts += autoUpgrades.evolution.multiplier[3]:''
}









//#endregion










// function buyPickaxe() {

//   // eggs >= 4 ? eggs -= clickUpgrades.pickaxes.price :
//   //   eggs >= 4 ? pickaxeCount++:
//   if (bolts >= clickUpgrades.pickaxes.price) {
//     bolts -= clickUpgrades.pickaxes.price
//     clickUpgrades.pickaxes.quanity += 1
//   }
  

//   update();
//   pickaxeMultiplier();
//   displayPickaxe();
// }
// function displayPickaxe() {
//   document.getElementById('pickaxeBtnAmount').innerText = clickUpgrades.pickaxes.quanity.toString()
// }

// function pickaxeMultiplier() {
//   bolts * clickUpgrades.pickaxes.quanity;
// }


