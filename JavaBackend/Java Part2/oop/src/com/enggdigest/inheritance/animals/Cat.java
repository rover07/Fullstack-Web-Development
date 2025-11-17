package com.enggdigest.inheritance.animals;

public class Cat extends Animal {
//
//public Cat(String name) {
////    this.name=name;
//}

public Cat(){
    super();
    System.out.println("Cat constructor called");
}

public void catMethod(){
    System.out.println("cat method called");
    super.sayHello();
}
//@Override
    public void sayHello() {
        System.out.println("Meow Meow");
    }

}
