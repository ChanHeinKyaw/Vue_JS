let tags = [
    "web dev",
    "vuejs",
    "vuejs",
    "laravel",
    "news",
    "laravel",
    "coding",
];

let uniqueTags = tags.filter((tag,index,array) => {
    return array.indexOf(tag) === index;
})

console.log(uniqueTags);