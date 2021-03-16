document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div');
    const resetBtn = document.querySelector('#resetBtn');
    const para = document.querySelector('.messagePara');
    let currentPlayer = 'playerX';

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome);
    });

    resetBtn.addEventListener('click', resetgame);

    function resetgame() {
        squares.forEach(s => {
            if (s.className !== "")
                s.classList.remove(s.className);
        });
        currentPlayer = 'playerX';
        setTimeout(() => {
            para.textContent = 'Resetting the game! Wait for the message to disappear';
            setTimeout(() => {
                para.textContent = '';
            }, 1000);
        }, 0);
    }

    function horizontalCheck(choices) {
        choices.forEach(row => {
            let resultX = row.every(e => e === 'playerX');
            if (resultX) {
                para.textContent = 'Player X won the game!';
                setTimeout(() => {
                    resetgame();
                }, 2000);
            }
            let resultY = row.every(e => e === 'playerO');
            if (resultY) {
                para.textContent = 'Player O won the game!';
                setTimeout(() => {
                    resetgame();
                }, 2000);
            }
        });
    }

    function verticalCheck(choices) {
        choices.forEach(row => {
            let resultX = row.every(e => e === 'playerX');
            if (resultX) {
                para.textContent = 'Player X won the game!';
                setTimeout(() => {
                    resetgame();
                }, 2000);
            }
            let resultY = row.every(e => e === 'playerO');
            if (resultY) {
                para.textContent = 'Player O won the game!';
                setTimeout(() => {
                    resetgame();
                }, 2000);
            }
        });
        
    }

    function diagonalCheck(choices) {
        choices.forEach(row => {
            let resultX = row.every(e => e === 'playerX');
            if (resultX) {
                para.textContent = 'Player X won the game!';
                setTimeout(() => {
                    resetgame();
                }, 2000);
            }
            let resultY = row.every(e => e === 'playerO');
            if (resultY) {
                para.textContent = 'Player O won the game!';
                setTimeout(() => {
                    resetgame();
                }, 2000);
            }
        });
    }

    function clickOutcome(e) {
        const squaresArray = Array.from(squares);
        const index = squaresArray.indexOf(e.target);

        if (squares[index].className === "") {
            if (currentPlayer === 'playerX') {
                squares[index].classList.add('playerX');
                currentPlayer = 'playerO';
            } else {
                squares[index].classList.add('playerO');
                currentPlayer = 'playerX';
            }
        }

        const dummy = squaresArray.map(s => s.className);
        const choices = [[...dummy.slice(0, 3)], [...dummy.slice(3, 6)], [...dummy.slice(6, 9)]];
        
        horizontalCheck(choices);
        
        // vertical checkinng
        const vchoices = [...choices];
        const [frow, srow, trow] = vchoices;
        const [frow1, frow2, frow3] = frow;
        const [srow1, srow2, srow3] = srow;
        const [trow1, trow2, trow3] = trow;

        const modifiedChoices = [[frow1, srow1, trow1], [frow2, srow2, trow2], [frow3, srow3, trow3]]

        verticalCheck(modifiedChoices);

        // diangonal chekcing
        const diagonalChoices = [[frow1, srow2, trow3], [trow1, srow2, frow3]];

        diagonalCheck(diagonalChoices); 
    }
})
