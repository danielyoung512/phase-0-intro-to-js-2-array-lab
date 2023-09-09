// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

  // cats.push("Ralph");
  // console.log(cats);

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    console.log(cats);
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    console.log(cats);
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
    console.log(cats)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
    console.log(cats)
}

function appendCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.push(name)
    console.log(copyOfCats)
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(name)
    console.log(copyOfCats)
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = cats.slice(0, 2)
    console.log(copyOfCats)
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = cats.slice(1)
    console.log(copyOfCats)
    return copyOfCats
}