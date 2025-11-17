public class bitwise {
  public static void main(String[] args) {
    int a=-5;
    System.out.println(Integer.toBinaryString(a));
    int b=~a;
    
    System.out.println(b);
    System.out.println(Integer.toBinaryString(b)); 
    int c= a >>>  1; // unsigned right shift
    System.out.println(c); // -3
    System.out.println(Integer.toBinaryString(c));
// 11111111111111111111111111111101

  }
}
