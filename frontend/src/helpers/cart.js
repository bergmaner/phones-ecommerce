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
            return JSON.parse(localStorage.getItem("cart")).length;
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