import java.util.Locale;
import java.util.Map;

public class print {
  public static void main(String[] args) {
    //system is a class which contains system related utility methods(that interact with systems runtime environment)

      // below is one of the methods of system class
      Map<String, String> getenv = System.getenv();
      System.out.println(getenv);
      System.out.println(1);
      System.out.println("a");
      System.out.println("hello");
      // "out" is static member of system class connected to the console
      // ln - one of the methods

      int a=1,b=2;
      String c="Sum";
      System.out.println(a+b+c); //3Sum
      System.out.println(c+a+b); //Sum12
      System.out.println(c+(a+b)); //Sum3
      System.out.println("Hi \n");
      System.out.println("this is in next line due to usage of \n");

      // //print vs println vs printf
      System.out.println(c+ " of "+a +" and "+ b + " is : "+ (a+b)); // bad and hassle way of writing
      //better way for the same
      System.out.printf("%s of %d & %d: %d \n", c,a,b,a+b);

      //Locale
      double number=1234.56789;
      System.out.println("Default locale: "+ number);
      System.out.printf(Locale.US , "US locale: %,.2f%n ", number);
  }
  }

