console.log("//========================= Sınıflar ve Nesneler ==============================")

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Merhaba, benim adım  ${this.name} ven ${this.age} yaşındayım`)
    }
}

//sınıfı kullanarak bir örnek nesne oluşturalım
const person1 = new Person("Ayhan", "31")

person1.sayHello();

// Bu basit örnekte Person adında bir sınıf oluşturduk. 
// Sınıf, constructor fonksiyonu 
// ile başlatılır ve sınıfa ait özellikleri (name ve age) içerir. 
// Ayrıca sayHello adında bir metot ekledik. 
// Daha sonra bu sınıfı kullanarak bir örnek nesne (person1) 
// oluşturduk ve sayHello metoduyla bir şeyler yazdırdık.


console.log("//========================= Encapsulation (Kapsülleme) ==============================")

class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
    }

    getMake() {
        return this._make;
    }

    setMake(newMake) {
        this._make = newMake;
    }

    getModel() {
        return this._model;
    }

    setModel(newModel) {
        this._model = newModel;
    }
}

const myCar = new Car("Audi", "A4");

console.log(myCar.getMake());//Audi

myCar.setModel("R8")
console.log(myCar.getModel());//R8


// Bu örnekte, _make ve _model değişkenleri sınıf içinde private olarak tanımlanmıştır. 
// getMake, setMake, getModel, ve setModel gibi public metotlar aracılığıyla bu private 
// değişkenlere erişim ve güncelleme sağlanır.



console.log("//========================= Inheritance (Kalıtım) ==============================")

class Shapee {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log(`Drawing a shape with color ${this.color}`);
    }
}

class Circle extends Shapee {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a circle with color ${this.color} and radius ${this.radius}`);
    }
}

const myCircle = new Circle("Blue", 5);
myCircle.draw();
//Drawing a circle with color Blue and radius 5

// Bu örnekte, Shape sınıfı temel bir şekil tanımlar ve Circle sınıfı Shape sınıfından türetilmiştir. 
// super anahtar kelimesi ile üst sınıfın constructor'ı çağrılır ve kalıtım alınan sınıfın özellikleri 
// eklenir. draw metodu override edilerek, Circle sınıfının kendi çizim mantığı eklenir.



console.log("//========================= Polymorphism (Çok Biçimlilik) ==============================")

class Bird {
    sing() {
        console.log("Bird is singing");
    }
}

class Dog {
    sing() {
        console.log("Dog is barking")
    }
}

function makeSing(animal) {
    animal.sing();
}

const bird = new Bird();
const dog = new Dog();

makeSing(bird);
makeSing(dog);

// Bird is singing
// Dog is barking

// Bu örnekte, Bird ve Dog sınıfları aynı sing metotunu içerir. 
// makeSing fonksiyonu, herhangi bir hayvan nesnesini alabilir ve 
// sing metotunu çağırarak çok biçimlilik ilkesini uygular. 
// Bu sayede, aynı metot adıyla farklı davranışlar elde edilir.





console.log("//========================= Abstraction (Soyutlama) ==============================")

// Abstraction (Soyutlama), sınıfların ve nesnelerin karmaşıklığını gizlemek ve 
// yalnızca gerekli olan özellik ve metotlara odaklanmak anlamına gelir. 
// JavaScript'te, soyutlama genellikle bir sınıfın içinde soyut (abstract) 
// metotların tanımlanmasıyla gerçekleştirilir. Bu soyut 
// metotlar alt sınıflar tarafından uygulanmalıdır. 
// Ancak, JavaScript'ta doğrudan soyut sınıflar tanımlamak 
// yerine soyutlama kavramını anlatan bir örnek yapabiliriz

//soyut bir sınıf
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Shape class cannot be instantiated directly.");
        }
    }

    //soyut metot
    calculateArea() {
        throw new Error("calculateArea method must be implemented by subclasses.");
    }
}

//alt sınıflar
class Circle2 extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    //soyut metodu uygulama
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    //soyut metodu uygulama
    calculateArea() {
        return this.sideLength ** 2;
    }
}


//kullanım
const circle = new Circle2(5);
console.log("Circle Area:", circle.calculateArea());

const square = new Square(4);
console.log("Square Area:", square.calculateArea());


// Circle Area: 78.53981633974483
// Square Area: 16


// Bu örnekte, Shape sınıfı soyut bir sınıf olarak tanımlanmıştır. Soyut bir sınıf, 
// doğrudan örneklenemez ve soyut metotları içerir. Circle ve Square sınıfları, 
// Shape sınıfından türetilmiştir ve soyut metodu (calculateArea) uygulamışlardır. 
// Shape sınıfının doğrudan örneklenmesini engellemek için constructor içinde kontrol eklenmiştir.

// Bu örnek, soyutlama prensiplerini anlatan bir yapıdır. 
// Gerçek soyut sınıfların ve soyut metotların desteklendiği 
// programlama dillerinde, soyut sınıflar doğrudan örneklenemez ve 
// alt sınıflar soyut metotları uygulamak zorundadır. Ancak, JavaScript'te 
// doğrudan soyut sınıflar oluşturulamadığı için bu tarz bir kontrol kendi 
// başına yeterlidir.



console.log("//========================= Proje ==============================")

// Bu projede Animal sınıfı soyut bir sınıf olarak tanımlanmıştır ve makeSound 
// ve move metotları soyut metotlardır. Lion ve Penguin sınıfları, Animal sınıfından 
// türetilmiştir ve soyut metotları uygulamıştır.

// Zoo sınıfı, hayvanları içeren bir dizi tutar ve addAnimal metodu ile sadece Animal 
// sınıfından türetilmiş nesnelerin eklenmesine izin verir. makeAllSounds ve moveAll 
// metotları, sırasıyla tüm hayvanların seslerini çıkarmasını ve hareket etmesini sağlar.
// performRandomAction fonksiyonu, parametre olarak verilen hayvanın rastgele olarak
// ses çıkarmasını veya hareket etmesini sağlar, bu da çok biçimliliği gösterir.


// soyut sınıf (abstract class)
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Animal class cannot be instantiated directly.");
        }

        this.name = name;
    }

    //soyut metotlar
    makeSound() {
        throw new Error("makeSound method must be implemented by subclasses.")
    }

    move() {
        throw new Error("move method must be implemented by subclasses.");
    }
}


// alt sınıflar (inheritance)

class Lion extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Roar!";
    }

    move() {
        return "Lion is running"
    }
}

class Penguin extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        return "Honk!";
    }

    move() {
        return "Penguin is sliding";
    }
}

//kapsülleme(encapsulation )

class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        if (animal instanceof Animal) { //Animal class ından türemiş olacak
            this.animals.push(animal)
        } else {
            throw new Error("Only instances of Animal can be added to the zoo")
        }
    }

    makeAllSounds() {
        this.animals.forEach(animal => {
            console.log(`${animal.name} : ${animal.makeSound()} `);
        })
    }

    moveAll() {
        this.animals.forEach(animal => {
            console.log(`${animal.name}: ${animal.move()}`)
        })
    }
}

//çok biçimlilik(Polymorphism)

function performRandomAction(animal) {
    if (Math.random() < 0.5) {
        console.log(`${animal.name} is making a sound: ${animal.makeSound()}`);
    } else {
        console.log(`${animal.name} is moving: ${animal.move()}`);
    }
}

//Kullanım

const lion = new Lion("Simba");
const penguin= new Penguin("Skipper");

const zoo = new Zoo();

zoo.addAnimal(lion);
zoo.addAnimal(penguin);

zoo.makeAllSounds();
console.log("----------------------------------")
zoo.moveAll();
console.log("----------------------------------")
performRandomAction(lion);
performRandomAction(penguin);

// Simba : Roar!
// Skipper : Honk!
// ----------------------------------
// Simba: Lion is running
// Skipper: Penguin is sliding
// ----------------------------------
// Simba is moving: Lion is running
// Skipper is making a sound: Honk!