const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');





// console.log('bom');

button.addEventListener('click', function() { 
    // console.log(input.value);

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.textContent = input.value;
    li.append(deleteButton);
    list.append(li);
    console.log(list);
    deleteButton.addEventListener('click', function () {
        // console.log('asdf');
        list.removeChild(li);
        input.focus();
    });
    
 });

if (input.value != '') { 'Add Chapter' }

li.textContent = input.value;



li.append(deleteButton);

// list.append (li);


input.focus();

InputEvent.value= '';