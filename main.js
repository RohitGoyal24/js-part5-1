class Rectangle{
    constructor(length,breadth) {
        this.length = length;
        this.breadth = breadth;
      }
    calculateArea(){
       return this.length * this.breadth;
      }
}
const user = new Rectangle(23,45);
console.log(user);