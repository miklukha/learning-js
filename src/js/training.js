const arr = [
  {
    name: 'test',
    value: 1,
    children: [
      {
        name: 'test2',
        value: 2,
        children: [
          { name: 'test3', value: 3, children: [{ name: 'test4', value: 4 }] },
        ],
      },
    ],
  },
];
// {test: 1, test2: 2, test3: 3}

function changeArr(array) {
  return array.reduce((acc, { name, value, children }) => {
    acc[name] = value;

    if (children) {
      acc = { ...acc, ...changeArr(children) };
    }

    return acc;
  }, {});
}

console.log(changeArr(arr));

/**
 * const one = () => Promise.resolve('One!')
async function myFunc () {
  console.log('In Function');
  
  const res = await one()

  console.log(res);
}

console.log('Before function');
myFunc()
console.log('After function');

 */
