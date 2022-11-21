import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

/* 
    Iterate through plan, add the plants it specifies to the field array.
    Use plant constructor functions, and the addplant field function.

    Switch case because it makes me feel better :)
*/

export const plantSeeds = (plan) => {
    for (const plants of plan) {
        for (const plant of plants) {
            switch (plant) {
                case "Asparagus":
                    addPlant(createAsparagus());
                    break;
                case "Corn":
                    addPlant(createCorn());
                    break;
                case "Potato":
                    addPlant(createPotato());
                    break;
                case "Soybean":
                    addPlant(createSoybean());
                    break;
                case "Sunflower":
                    addPlant(createSunflower());
                    break;
                case "Wheat":
                    addPlant(createWheat());
                    break;
            }
        }
    }
}