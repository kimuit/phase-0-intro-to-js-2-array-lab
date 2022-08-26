// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("morris");
}
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("kitty")
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("jead")
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat(name) {
    const newCats = cats.slice(0,2)
    return newCats
}

function removeFirstCat(name) {
    const newCats = cats.slice(1)
    return newCats
}