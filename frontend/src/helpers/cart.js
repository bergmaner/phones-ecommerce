export const addItem = (item, next) => {
    let cart = [];
    if(typeof window !== "undefined" ){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        cart.push({
            ...item,
            count: 1
        })

        cart = Array.from(new Set(cart.map(product => product._id))).map((id) => {
            return cart.find(p => p._id === id);
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        next();
    }
}

export const getTotalItems = () => {
    if(typeof window !== "undefined" ){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart")).map(product => 
                product.count
            ).reduce((a,b) => {
                return a+b;
            },0);
        }
    }
    return 0;
}

export const getItems = () => {
    if(typeof window !== "undefined" ){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
    return [];
}

export const updateCount = (productId, count) => {
    let cart = [];

    if(typeof window !== "undefined"){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }

        cart.map((product,i) => {
            if(product._id === productId){
                cart[i].count = count;
            }
        })

        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export const deleteItem = (productId) => {
    let cart = [];

    if(typeof window !== "undefined"){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }

        cart.map((product,i) => {
            if(product._id === productId){
                console.log(i, "kkk");
                cart.splice(i,1);
            }
        })

        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
}

export const getTotalPrice = () => {
    if(typeof window !== "undefined" ){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart")).reduce((a,b) => {
               return a + b.count* b.price;
            },0);
        }
    }
    return 0;
}