import Regions from "../Database/Regions.json" with { type: "json" };

let regions = Regions;

function create_regions(n_regions = 10) {

    for (let i = 0; i < n_regions; i++) {
        let Region =  {...Regions[0], "id" : Regions.length};
        Regions.push(Region);
    }

    console.log(Regions);
}

export {create_regions, regions };
