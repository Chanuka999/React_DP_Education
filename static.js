class Square{
    constructor(_width){
        this.width= _width;
        this.height = _width;

    }

    static cal(a,b){
          return a*b;
    }
}

console.log(Square.cal(5,6)) ;
