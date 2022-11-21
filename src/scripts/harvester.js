/* 
    take the field array of objects and make a new array with
    each object multiplied by the output property.
    corn will be split in half.
*/

export const harvestPlants = (plants) => {
    // define new array
    const harvestedPlants = [];

    // define function that will repeat the .push as many times as needed
    // before that, check if the plant is corn, half the output if so
    const harvestPlant = (plant) => {
        if (plant.type === "Corn") {
            for (let n = 0; n < plant.output / 2; n++) {
                harvestedPlants.push(plant);
            }
        } else {
            for (let n = 0; n < plant.output; n++) {
                harvestedPlants.push(plant);
            }
        }
    }

    // iterate through planted plants, run function above
    for (const plant of plants) {
        harvestPlant(plant);
    }

    // return completed array
    return harvestedPlants;
}