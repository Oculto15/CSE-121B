document.querySelector('.text').innerHTML =  '<h2>Subtitle</h2>';
let newpara = document.createElement('p');
newpara.textContent = 'This is my new parapraph text.';
document.querySelector('div').appendChild(newpara);

let classes = ['CSE121b', 'CIT111', 'WDD230']
console.log(classes);
document.querySelector('ul').innerHTML = classes.join(" - ");
classes.push('WDD130');
document.querySelector('ul').innerHTML = classes.join(" - ");
classes.pop('CIT111')

document.querySelector('img').setAttribute('src','./images/photo.png');
document.querySelector('img').setAttribute('width', '200px')