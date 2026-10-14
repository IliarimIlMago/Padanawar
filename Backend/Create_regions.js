import Regions from "../Database/Regions.json" with { type: "json" };


const Region =  Regions[0];

for (let i = 0; i < 10; i++) {
    
    Region.id = i;
    Regions.push(Region);
}

console.log(Regions);