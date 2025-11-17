package oopLearn;

public class Test {
    //entry point of java program
    public static void main(String[] args) {
    Car car=new Car();
//    car.color="red";
//    car.speed=10;
//    car.brand="Nissan";
//    car.model="destiny";
//    car.accelerate(15);
//        System.out.println(car.speed);
//        System.out.println(car.brand );
//        car.accelerate(15);
//        System.out.println(car.speed);

        // // Made data private, now accessing them using getters and setters
    car.setBrand("BMW");
    System.out.println(car.getBrand());
    }
}
