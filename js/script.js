function Phone(brand, price, color) {
    this.brand = brand;
	this.price = price;
    this.color = color;
};
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};
var Samsung = new Phone("Samsung",1958,"black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var OnePlusOne = new Phone("OnePlusOne",3300,"red");
iPhone6S.printInfo();
Samsung.printInfo();
OnePlusOne.printInfo();