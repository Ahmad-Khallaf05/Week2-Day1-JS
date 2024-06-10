// ----- task 1 ----- 
localStorage.setItem("hello", "Hello, World!");
console.log(localStorage.getItem("hello")) ;

// ----- task 2 ----- 
localStorage.setItem("myNumber", JSON.stringify(123));
console.log(localStorage.getItem("myNumber")) 

// ----- task 3 ----- 
localStorage.setItem("boolean", JSON.stringify(true));
console.log(localStorage.getItem("boolean")) 

// ----- task 4 -----  
localStorage.setItem("aa ", "aa");
localStorage.removeItem("aa");

// ----- task 5 -----
localStorage.clear();

// ----- task 6 -----
localStorage.setItem("myItem", "Ahmad");
let item = localStorage.getItem("myItem");
if (item !== null) {
    console.log("Item exists in local storage.");
} else {
    console.log("Item does not exist in local storage.");
}

// ----- task 7 -----
const numbersArray = [1, 2, 3];
localStorage.setItem("myItem", JSON.stringify(numbersArray));
console.log(localStorage.getItem("myItem"))

// ----- task 8 -----
const numbersOpjects = {"name":"ahmad"};
localStorage.setItem("myItem", JSON.stringify(numbersOpjects));
console.log(localStorage.getItem("myItem"))

// ----- task 9 -----
localStorage.setItem("Firstname", "Ahmad")
localStorage.setItem("secondname", "Majed")
localStorage.setItem("lastname", "khallaf")
console.log(localStorage.getItem("Firstname"))
console.log(localStorage.getItem("secondname"))
console.log(localStorage.getItem("lastname"))

// ----- task 10 -----
localStorage.setItem("item1", "item1")
console.log("item1:", localStorage.getItem("item1"))
localStorage.setItem("item1", "item2")
console.log("item2:", localStorage.getItem("item1"))

//-----------------------------------------------------------------------

// ----- task 1 ----- 
sessionstorage.setItem("hello", "Hello, World!");
console.log(sessionstorage.getItem("hello")) ;

// ----- task 2 ----- 
sessionstorage.setItem("myNumber", JSON.stringify(123));
console.log(sessionstorage.getItem("myNumber")) 

// ----- task 3 ----- 
sessionstorage.setItem("boolean", JSON.stringify(true));
console.log(sessionstorage.getItem("boolean")) 

// ----- task 4 -----  
sessionstorage.setItem("aa ", "aa");
sessionstorage.removeItem("aa");

// ----- task 5 -----
sessionstorage.clear();

// ----- task 6 -----
sessionstorage.setItem("myItem", "Ahmad");
let item1 = sessionstorage.getItem("myItem");
if (item1 !== null) {
    console.log("Item exists in local storage.");
} else {
    console.log("Item does not exist in local storage.");
}

// ----- task 7 -----
const numbersArray2 = [1, 2, 3];
sessionstorage.setItem("myItem", JSON.stringify(numbersArray2));
console.log(sessionstorage.getItem("myItem"))

// ----- task 8 -----
const numbersOpjects2 = {"name":"ahmad"};
sessionstorage.setItem("myItem", JSON.stringify(numbersOpjects2));
console.log(sessionstorage.getItem("myItem"))

// ----- task 9 -----
sessionstorage.setItem("Firstname", "Ahmad")
sessionstorage.setItem("secondname", "Majed")
sessionstorage.setItem("lastname", "khallaf")
console.log(sessionstorage.getItem("Firstname"))
console.log(sessionstorage.getItem("secondname"))
console.log(sessionstorage.getItem("lastname"))

// ----- task 10 -----
sessionstorage.setItem("item1", "item1")
console.log("item1:", sessionstorage.getItem("item1"))
sessionstorage.setItem("item1", "item2")
console.log("item2:", sessionstorage.getItem("item1"))
