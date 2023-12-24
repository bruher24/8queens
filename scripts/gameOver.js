const amount = localStorage.getItem('amount');
const msg = document.getElementById('message');
switch (amount) {
    case 0:
        msg.innerText = 'Вы даже не старались!';
        break;
    case 7:
        msg.innerText = 'Вы были близки!';
        break;
    case 8:
        msg.innerText = 'Вы справились!';
        break;
    default:
        msg.innerText = 'Вы старались!';
        break;
}

document.getElementById('info').innerText = 'Количество поставленных вами фигур: ' + localStorage.getItem('amount') + '.';

document.getElementById('restart-button').onclick = function () {window.location.href = 'game.html';};
document.getElementById('back-button').onclick = function () {window.location.href = 'index.html';};