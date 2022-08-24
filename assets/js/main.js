/*

querySelector()
addEventListener()
let counter = 0;
createElement()
createTextNode()
appendChild()
classList

*/

const btn = document.querySelector('button');
const divParentUmwickeln = document.querySelector('.umwickeln');

let i = 0;

console.log('button = ', btn)
console.log('divUmwickeln =', divParentUmwickeln);

btn.addEventListener('click', (e) => {
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent

    if (i === 0) {
        const divChildElement0 = document.createElement('div');
        divChildElement0.className = 'weiss';
        divChildElement0.textContent = i;
        divParentUmwickeln.appendChild(divChildElement0);
    }
    else if (i % 10 != 0) {
        const divChildElement = document.createElement('div');
        divChildElement.className = 'rechteck';
        divChildElement.textContent = i;
        divParentUmwickeln.appendChild(divChildElement);
    }
    else {
        const divChildElement1 = document.createElement('div');
        divChildElement1.className = 'weiss';
        divChildElement1.textContent = i;
        divParentUmwickeln.appendChild(divChildElement1);
    }
    i++;

}
);

