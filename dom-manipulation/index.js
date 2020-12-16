const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//p element with red text "Hey I'm red
const p = document.createElement('p');
p.style.color = "red"
p.textContent = "Hey I'm red";
container.appendChild(p);

//h3 with blue "I'm a blue h3!
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "Hey I'm blue";
container.appendChild(h3);

//div with black border and pink background color with:
const div2 = document.createElement('div');

div2.style.backgroundColor = "pink";
 
//	h1 that says I'm a div
const h1 = document.createElement("h1");
h1.textContent = "I'm a div";
div2.appendChild(h1);

//	p that says ME TOO!
const p2 = document.createElement("p");
p2.textContent="ME TOO!"

div2.appendChild(p2);

container.appendChild(div2);
