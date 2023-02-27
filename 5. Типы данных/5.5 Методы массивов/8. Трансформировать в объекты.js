const users = [
    {name: 'Вася', surname: 'Пупкин', id: 1},
    {name: 'Петя', surname: 'Иванов', id: 2},
    {name: 'Маша', surname: 'Петрова', id: 3}
];
const fullNames = users.map(user => ({id: user.id, fullName: `${user.name} ${user.surname}`}));

console.log(fullNames[0].id);
console.log(fullNames[0].fullName);