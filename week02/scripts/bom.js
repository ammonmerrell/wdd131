const input = document.querySelector('#favchap');
const buttton = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

input.value = '';

buttonElement.addEventListener('click', () => {
    if (input.value.trim() != '')
    {
        input.focus();
        li.textContent = input.value;
    }
});

deleteButton.addEventListener('click',() => {
    list.removeChild(li);
    input.focus();
});