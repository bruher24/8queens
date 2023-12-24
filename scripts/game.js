
let field = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30, 31],
    [32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47],
    [48, 49, 50, 51, 52, 53, 54, 55],
    [56, 57, 58, 59, 60, 61, 62, 63]
];

let queenCount = 0;

function checkField(id) {
    for (let i = 0; i < field.length; i++) {
        if (field[i]) {
            for (let j = 0; j < field[i].length; j++) {
                if (field[i][j] == id) var result = true;
            }
        }
    }
    return result;
}

function setQueen(id) {
    if (queenCount < 8) {
        if (checkField(id)) {
            var img = document.createElement('img');
            img.src = './src/queen.png';
            img.style.width = '80px';
            img.style.height = '80px';
            img.style.margin = 'auto';
            img.style.padding = 'auto';
            var div = document.getElementById(id);
            if (div) div.append(img);

            for (let i = 0; i < field.length; i++) {
                if (Array.isArray(field[i])) {
                    for (let j = 0; j < field[i].length; j++) {
                        if (field[i][j] == id) {
                            var index = j;
                            var arrayNumber = i;
                        }
                    }
                }
            }

            for (let i = 0; i < field.length; i++) {
                if (field[i]) field[i][index] = 999;//delete (field[i][index]);
            }

            field[arrayNumber] = 999;//delete (field[arrayNumber]);

            if (arrayNumber >= 0) {
                let shift;
                let a;

                shift = 1;
                a = arrayNumber + 1;
                while (field[a]) {
                    if (index - shift >= 0 && index - shift <= 7) field[a][index - shift] = 999;//delete (field[a][index - shift]);
                    if (index + shift >= 0 && index + shift <= 7) field[a][index + shift] = 999;//delete (field[a][index + shift]);
                    a++;
                    shift++;
                }

                shift = 1;
                a = arrayNumber - 1;
                while (field[a]) {
                    if (index - shift >= 0 && index - shift <= 7) field[a][index - shift] = 999;//delete (field[a][index - shift]);
                    if (index + shift >= 0 && index + shift <= 7) field[a][index + shift] = 999;//delete (field[a][index + shift]);
                    a--;
                    shift++;
                }
            }
            queenCount++;
            document.getElementById('info').innerText = 'Поставлено фигур: ' + queenCount;
            checkGame();
            console.log(field);
        } else alert('Эта клетка под ударом!');
    } else gameOver();
}

function checkGame() {
    var nullCount = 0;
    for (let i = 0; i < 8; i++) {
        if (Array.isArray(field[i])) {
            if(field[i].every( (val, i, arr) => val === arr[0] )) nullCount++;
        } else nullCount++;
    }
    if (nullCount == 8) gameOver();
}

function gameOver() {
    localStorage.setItem("amount", queenCount);
    window.location.href = 'gameOver.html';
}

document.getElementById('finish-button').onclick = function () {
    gameOver();
};

var chessWrap = document.querySelector('.ch-wrap');

var i = 0, count = 0;

while (count < 8 * 8) {
    var item = document.createElement('div');
    chessWrap.appendChild(item);

    item.classList.add('ch-item');
    item.id = count;
    item.onclick = function () {
        const id = this.id;
        setQueen(id);
    };
    if (i && i % 2) item.classList.add('ch-black');

    i += ((i + 2) % 9) ? 1 : 2;
    count++;
}
