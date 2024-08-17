const mainNode = document.querySelector('main#main');
if (mainNode) {
  mainNode.remove();
}
const newHeader = document.createElement('h1');
newHeader.textContent = 'New Header Text';
newHeader.id = 'victory'; // Set the id of the h1 element to 'victory'
document.body.appendChild(newHeader);
newHeader.innerHTML = "Isaiah is the champion";