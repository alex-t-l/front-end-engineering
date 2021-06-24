const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },

    //Setters and getters
    set appetizers(obj) {
        if (typeof obj === "object") {
            this.appetizers = obj;
        } else {
            console.log("Invalid object setting appetizers");
        }
    },

    get mains() {
        return this._courses.mains();
    },

    set mains(obj) {
        if (typeof obj === "object") {
            this.mains = obj;
        } else {
            console.log("Invalid object setting mains");
        }
    },

    get desserts() {
        return this._courses.desserts();
    },

    set desserts(obj) {
        if (typeof obj === "object") {
            this.desserts = obj;
        } else {
            console.log("Invalid object setting desserts");
        }
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },

    //Add items to menu
    //Preconditions: course name is valid
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name : dishName,
            price : dishPrice
        };
        this._courses[courseName].push(dish); //Add dish to menu
    },

    //retrieve a random dish from the menu
    //Preconditions: courseName is valid
    getRandomDishFromCourse(courseName){
        const dishes = this.courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)] //Generate random dish
    },

    //automatically generates a three course meal for us
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal consists of  ${appetizer.name} , ${main.name}, ${dessert.name}, The total price is $${totalPrice}.}`
    }
};

function main() {
    menu.addDishToCourse("mains", "Chik Fil A Grilled Chicken Sandwich", 7.5)
    menu.addDishToCourse("mains", "Chipotle Chicken Bowl", 9)
    menu.addDishToCourse("mains", "Big Mac", 5)
    menu.addDishToCourse("mains", "Mr Beast Burger Chandler Style", 5)
    menu.addDishToCourse("appetizers", "Chick Fil A Waffle Fries", 4)
    menu.addDishToCourse("appetizers", "Doritos", 1.5)
    menu.addDishToCourse("appetizers", "McDonald's French Fries", 2.5)
    menu.addDishToCourse("desserts", "Banana", 0.5)
    menu.addDishToCourse("desserts", "Chocolate Cake", 3)
    menu.addDishToCourse("desserts", "Milk", 1.5)

   console.log(menu.generateRandomMeal());


}

main();