package org.example;

public class Student {
    private Course course; // this is null
    // Fix: Dependency Injection


    // Constructor DI
    

    public Student(Course course) {
        this.course = course;
    }

    // // Setter DI

    public void setCourse(Course course) {
        this.course = course;
    }

    public void study(){
        int start = course.enroll(); // we are calling method of reference and reference right now is pointing to null
        if(start>=1){
            System.out.println("Course started");
        }
        else System.out.println("Payment failed");
    }


}

