const jsArray = ['A Smarter Way to Learn JavaScript', ' Eloquent JavaScript', ' JavaScript & JQuery', 'JavaScript: The Good Parts', 'Learn JavaScript VISUALLY', ' JavaScript: The Definitive Guide', 'Programming JavaScript Applications'];
let emt = [];
for (const book of jsArray) {
    if (book.toLocaleLowerCase().includes('javascript')) {
        emt.push(book);
    }
}
console.log(emt);

//Array sort
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => { return b - a });
console.log(points);