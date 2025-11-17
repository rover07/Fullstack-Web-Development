package org.example;

public class App {
    public static void main(String[] args) {
        Student s = new Student();

        // Setter DI
        // The below 2 lines are dependency Injection(Manual)
        Course course = new DSA();
        s.setCourse(course);
        // Student needs/buys X course and we are manually supplying them the course via dependency Injection

        s.study();
    }
}
