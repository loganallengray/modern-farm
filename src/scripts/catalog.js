/* 
    take harvested plants array and turn it into usable HTML
    wrap the food type in section tags with a plant class
*/

export const catalog = (foods) => {
    let catalogHTML = '';

    for (const food of foods) {
        catalogHTML += `<section class="plant">${food.type}</section>\n`;
    }

    return catalogHTML;
}