package com.enggdigest.inheritance.test;


import com.enggdigest.inheritance.animals.Animal;
import com.enggdigest.inheritance.animals.Cat;

public class Test {
    public static void main(String[] args) {
        // LHS : Here reference (cat) is of Animal
// RHS : Here object is of Cat
        // therefore, subclass's object is treated as instance of its superclass
//        Animal animal = new Animal();
//        animal.setName("Bob");
//        System.out.println("hi");
//        System.out.println(animal.getName());

        Animal animal = new Cat();
        animal.sayHello();

        Animal animalObj = new Animal();
        animalObj.sayHello();

        Cat cat = new Cat();
        cat.sayHello();
        cat.catMethod();
    // o/p: //Meow Meow
            //Hello from Animal
            //Meow Meow
    }


}

