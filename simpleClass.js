class Rectangle {
    constructor(_height,_weight,_color){
        this.height = _height;
        this.weight = _weight;
        this.color = _color;
        console.log("rectangle created");
        
    }

    getArea(){
        return (this.height * this.weight);
    }

    aboutMe(){
        return `this is rectangle
        It's height is ${this.height}
        Its weight is ${this.weight}
        It's color is ${this.color} `
    }
}

const newRectangle = new Rectangle(10,5,"red");

console.log(newRectangle.getArea());
console.log(newRectangle.aboutMe());

