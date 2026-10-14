import Players from "../Database/Players.json" with { type: "json" };
import {create_regions, regions}  from "./Create_regions.js";


function create_player(n_players = 2) {

    for (let i = 0; i < n_players; i++) {
        let player = { ...Players[0], "id": Players.length };
        Players.push(player);
    }

}

function assign_start_region(n_regions = 3) {

    let y = 0;
    for(let i=0; i < Players.length; i++){
        
        for (let c = 0; c < n_regions; c++) {
            
            Players[i].regions.push(y);
            y++;
        }
    }
}


create_regions();
create_player();
assign_start_region();
console.log(Players);