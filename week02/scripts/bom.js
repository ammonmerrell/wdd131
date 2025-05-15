const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const unlist = document.querySelector('ul');

// const list = document.querySelector('list');


// li.textContent = input.value;

// li.append(deleteButton);
// list.append(li);

// input.value = '';

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const myItem = input.value;
        input.value = '';
        const li = document.createElement('li');
        const text = document.createElement('span');
        const deleteButton = document.createElement('button');

        li.appendChild(text);
        text.textContent = myItem;
        li.appendChild(deleteButton);
        deleteButton.textContent = '❌';
        unlist.appendChild(li);

        deleteButton.addEventListener('click', () => {
            unlist.removeChild(li);
            input.focus();
        });


    }
});