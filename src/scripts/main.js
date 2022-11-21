import { createPlan } from "./plan.js";
// import { createAsparagus } from "./seeds/asparagus.js"
// import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

const yearlyPlan = createPlan();
// console.log(yearlyPlan);

// addPlant(asparagusSeed);
const field = usePlants();
// console.log(field);

plantSeeds(yearlyPlan);
// console.log(field);

const harvestedPlants = harvestPlants(field);
// console.log(harvestedPlants);

const foodCatalog = catalog(harvestedPlants);
// console.log(foodCatalog);

const parentHTMLElement = document.querySelector(".container");

parentHTMLElement.innerHTML = foodCatalog;