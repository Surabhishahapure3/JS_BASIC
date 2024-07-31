var fistname = "john";

let mydetails = {
    fistname : "Surabhi",
    printName: function(){
        console.log(`hi ${this.fistname}`);
    },

    greet: ()=>{
        console.log(this)
        console.log(`hi sir ${this.fistname}`);
    },
};

// mydetails.printName();
mydetails.greet();


// Regular Function:
// 1. Has its own this context.
// 2. The value of this is dynamic, depending on how the function is called (e.g., as a method, as a constructor, etc.).

// Arrow Function:
// 1. Does not have its own this context.
// 2. Inherits this from the surrounding lexical context (the enclosing function or global context).


// otherrr difference **********************
