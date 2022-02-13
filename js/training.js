let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName(); // ReferenceError: Cannot access 'name' before initialization
