const array1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const array2 = [
    { city: 'New York' },
    { city: 'Los Angeles' },
    { city: 'Chicago' }
];

const combinedArray = array1.map((item, index) => {
    return { ...item, ...array2[index] };
});

console.log(combinedArray);
