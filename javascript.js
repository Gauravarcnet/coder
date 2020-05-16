 let cat = {
    name : "Fluffy",
    color : "White"
    }
    
    // let cat = new Cat()
    display(Object.getOwnPropertyDescriptor(cat,name))
    Object.defineProperty(cat, name, {writable:false})

    