const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield")
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
    return cats;
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;   
}
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;   
}
function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
}
function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}