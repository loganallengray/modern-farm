const field = [];

// adds seed to field array
export const addPlant = (seed) => {
    // check if seed is an array
    if (Array.isArray(seed)) {
        // iterate through array, push all seeds within into field
        for (const seeds of seed) {
            field.push(seeds);
        }
    } else {
        // if not array, push to field
        field.push(seed);
    }
}

// returns field array
export const usePlants = () => {
    return field;
}