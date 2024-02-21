const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  createIncompleteTodo(inputText);
}

const createIncompleteTodo = (todo) => {
  const li = document.createElement('li');
  
  const div = document.createElement('div');
  div.className = 'list-row';

  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todo;

  const completeBtutton = document.createElement('button');
  completeBtutton.innerText = '完了';
  completeBtutton.addEventListener('click', () => {
    const moveTarget = completeBtutton.closest('li');
    completeBtutton.nextElementSibling.remove();
    completeBtutton.remove();

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest('li').remove();
    })
    moveTarget.firstElementChild.appendChild(backButton);

    document.getElementById('complete-list').appendChild(moveTarget);
  })

  const deleteBtutton = document.createElement('button');
  deleteBtutton.innerText = '削除';
  deleteBtutton.addEventListener('click', () => {
    const deleteTarget = deleteBtutton.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  })
  
  div.appendChild(p);
  div.appendChild(completeBtutton);
  div.appendChild(deleteBtutton);
  li.appendChild(div);

  document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', onClickAdd);