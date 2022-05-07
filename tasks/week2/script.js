
document.querySelector('span').innerHTML = "Ignacio Villar";
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('img').setAttribute('src','./images/photo.png');

let food = ['Chicken Salad', 'Pastel de Choclo', 'Empanadas Tucumanas', 'Pizza']
document.querySelector('#food').textContent = food;
document.getElementById('food').innerHTML = food.join(" - ");
food.push('Hamburger');
document.getElementById('food').innerHTML = food.join(" - ");
food.shift();
document.getElementById('food').innerHTML = food.join(" - ");
food.pop();
document.getElementById('food').innerHTML = food.join(" - ");