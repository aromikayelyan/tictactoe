'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const tictac = {
		gamex: [],
		gameo: [],
	}

	let player = 0
	let wins = [
		[3, 4, 5],
		[0, 1, 2],
		[0, 4, 8],
		[2, 4, 6],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[6, 7, 8],
	]

	document.querySelectorAll('.block').forEach((btn, i) => {
		btn.addEventListener('click', event => {
			event.preventDefault()
			if (player == 0) {
				tictac.gamex.push(i)
				btn.innerHTML = 'x'
				if (tictac.gamex.length >= 3) {
					whowins(tictac.gamex, player)
				}
				player = 1
				if (tictac.gamex.length >= 5) gameover()
			} else {
				tictac.gameo.push(i)

				btn.innerHTML = 'o'
				if (tictac.gameo.length >= 3) {
					whowins(tictac.gameo, player)
				}
				player = 0
				if (tictac.gameo.length >= 5) gameover()
			}

			function whowins(winner, player) {
				wins.map(win => {
					let temp = 0
					win.filter(item => {
						if (winner.includes(item)) {
							temp++
						}
						if (temp === 3) {
							alert(`Win ${player === 0 ? 'X' : 'O'}`)
						}
					})
				})
			}
		})
	})

	function gameover() {
		player = 0
		tictac.gameo = []
		tictac.gamex = []
		document.querySelectorAll('.block').forEach(btn => {
			btn.innerHTML = ''
		})
		alert('Ничья')
	}
})
