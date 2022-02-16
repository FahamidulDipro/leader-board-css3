const topPlayers = document.getElementById('top-players');
topPlayers.style.color = 'gray';

document.getElementById('top-blog').style.color = 'chocolate';
const box = document.getElementsByClassName('box');
for (const i of box) {
    i.style.backgroundColor = 'rgba(255, 99, 71, 0.5)';
}

let count = 3;
document.getElementById('add-list').addEventListener('click', () => {
    count++;
    const ul = document.getElementById('new-list');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('item -' +
        count));
    ul.appendChild(li);
})


window.onload = () => {
    document.getElementById('input-box').value = '0';
}
let countInput = parseInt(document.getElementById('input-box').value);
document.getElementById('increase-btn').addEventListener('click', () => {
    if (countInput < 5) {
        countInput++;
        document.getElementById('input-box').value = countInput;

    } else {
        document.getElementById('increase-btn').disabled = true;
    }

})