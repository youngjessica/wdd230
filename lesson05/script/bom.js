const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');


button.addEventListener('click', function() { 'Add Chapter' });

if (input.value != '') { 'Add Chapter' }

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append (li);

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.focus();

InputEvent.value= '';