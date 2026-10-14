import Players from "../Database/Players.json" with { type: "json" };


function create_player(n_players = 2) {

    for (let i = 0; i < n_players; i++) {
        let player = { ...Players[0], "id": Players.length };
        Players.push(player);
    }

    console.log(Players);
}

create_player();