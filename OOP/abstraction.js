class Restaurant {
    #prepareStew(){
        // code logic
        return 'Tomato stew has been made';
    }

    #cookRice(){
        // code logic
        return 'Rice has been prepared'
    }

    prepareJollof(){
        this.#cookRice();
        this.#prepareStew();
        return 'Jollof has been prepared'
    }

}

const pizzaMan = new Restaurant;

console.log(pizzaMan.prepareJollof())