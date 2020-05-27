const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const log = console.log;

//task - 1

//Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name);
log(getUserNames(users));

//task -2

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter(users => users.eyeColor === color);

log(getUsersWithEyeColor(users, 'blue'));

//task - 3

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(x => x.name);

log(getUsersWithGender(users, 'male'));

//task - 4

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users =>
  users.filter(users => users.isActive === false);

log(getInactiveUsers(users));

//task - 5

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//task - 6

// Получить массив пользователей
//  попадающих в возрастную категорию
//  от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

log(getUsersWithAge(users, 20, 30));
log(getUsersWithAge(users, 30, 40));

// task-7

const calculateTotalBalance = users =>
  users.reduce((sum, user) => sum + user.balance, 0);

log(calculateTotalBalance(users));

// task - 8

// Массив имен всех пользователей у которых есть друг
//  с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));

log(getUsersWithFriend(users, 'Briana Decker'));
log(getUsersWithFriend(users, 'Goldie Gentry'));

//task - 9

// Массив имен (поле name) людей,
//  отсортированных в зависимости
//  от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users =>
  users
    .sort(function (a, b) {
      return a.friends.length - b.friends.length;
    })
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));

// task - 10

// Получить массив всех умений
//  всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений
//  и они должны быть отсортированы в алфавитном порядке

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      let uniqueSkills = [...new Set(allSkills)];
      return uniqueSkills;
    }, [])
    .sort();

log(getSortedUniqueSkills(users));
