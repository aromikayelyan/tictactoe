"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const tictac = {
        gamex: [],
        gameo: []
    };

    let player = 0;
    let wins = [[0, 1, 2], [3, 4, 5], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8], [6, 7, 8]];

    document.querySelectorAll('.block').forEach((btn, i) => {

        btn.addEventListener('click', (event) => {
            event.preventDefault();
            if (player == 0) {
                tictac.gamex.push(i);
                console.log(tictac.gamex);
                btn.innerHTML = 'x';
                player = 1;
                if (tictac.gamex.length >= 3)  whowins(tictac.gamex); 
                if (tictac.gamex.length >= 5) gameover();
            } else {
                tictac.gameo.push(i);
                console.log(tictac.gameo);
                btn.innerHTML = 'o';
                player = 0;
                if (tictac.gameo.length >= 3) whowins(tictac.gameo); 
                if (tictac.gameo.length >= 5) gameover();
            }

            function whowins(winner) {
                winner.sort();      
                for (let i = 0; i < wins.length; i++) {
                    let k = 0;
                    let j = 0;
                    let array = [];
                    if (winner.length > 3) {
                        for (let i = 0; i == 2; i++) {
                            array.push(winner[i]);
                        }
            if (array[j] == wins[i][j] && array[j + 1] == wins[i][j + 1] && array[j + 2] == wins[i][j + 2] ||
                array[j + 1] == wins[i][j] && array[j + 2] == wins[i][j + 1] && array[j + 3] == wins[i][j + 2] ||
                array[j] == wins[i][j] && array[j + 2] == wins[i][j + 1] && array[j + 3] == wins[i][j + 2]||
                array[j] == wins[i][j] && array[j + 3] == wins[i][j + 2] && array[j + 3] == wins[i][j + 2]) {
                           alert(`Win ${player === 1 ? 'X' : 'O'}`); player = 0;
                            if (alert) {
                                tictac.gameo = [];
                                tictac.gamex = [];
                                document.querySelectorAll('.block').forEach((btn) => {
                                    btn.innerHTML = "";
                                });
                            };
                            break;
                        };
                    }
            if (winner[j] == wins[i][j] && winner[j + 1] == wins[i][j + 1] && winner[j + 2] == wins[i][j + 2] ||
                winner[j + 1] == wins[i][j] && winner[j + 2] == wins[i][j + 1] && winner[j + 3] == wins[i][j + 2] ||
                winner[j] == wins[i][j] && winner[j + 2] == wins[i][j + 1] && winner[j + 3] == wins[i][j + 2]||
                winner[j] == wins[i][j] && winner[j + 3] == wins[i][j + 2]&& winner[j + 3] == wins[i][j + 2]) {
                    alert(`Win ${player === 1 ? 'X' : 'O'}`); player = 0;
                        if (alert) {
                            tictac.gameo = [];
                            tictac.gamex = [];
                            document.querySelectorAll('.block').forEach((btn) => {

                                btn.innerHTML = "";
                            });
                        };
                        break;
                    };
                    if (j == 2) { j = 0; i = 0; };
                };
                console.log(winner);
            };
        });
    });

    function gameover() {
        player = 0;
        tictac.gameo = [];
        tictac.gamex = [];
        document.querySelectorAll('.block').forEach((btn) => {

            btn.innerHTML = "";
        });
        alert('Ничья')
    };
});

