public class arrays {
  public static void main(String[] args) {
    int[] arr; //declaration
    int[] arr1=new int[10]; //initialization: arr1 refers to array of integers of size 10
    // the reference ie. arr1 is stored in heap and arr1 stores starting address
    arr1[1]=22;
    arr1[3]=52;
    arr1[4]=12;
    arr1[5]=-89;
    System.out.println(arr1);
    
    // for(int i=0;i<arr1.length;i++){
    //   System.out.println(arr1[i]);
    // }

    for (int i : arr1) {
      System.out.println(i);
    }

    // finding max value
// // INT_MIN in c++, in java we have Integer.MIN_VALUE
    int maxVal=Integer.MIN_VALUE;

    for(int i=0;i<arr1.length;i++){
      if(arr1[i] > maxVal){
        maxVal=arr1[i];
      }
    }
    System.out.println("Max Value is: "+maxVal);
  }
}
