public class MultiDimArrays {

  public static void main(String[] args) {
    int arr[][]=new int[3][2]; // this cpp style syntax works too
//    int[][] arr=new int[3][3]; //java syntax
    
    // System.out.println(arr[1]);
    for (int i = 0; i < arr.length; i++) {
      // for (int j = 0; j < arr.length; j++) { // using this way will loop outside the memory
      for (int j = 0; j < arr[i].length; j++) { // this way ensures that the loop will run till the length of row 
        System.out.print(arr[i][j]);
      }
      System.out.println();
    }

    // // Jagged array
    char arr1[][]=new char[3][];
    arr1[0]= new char[2]; // length of each row is different here
    arr1[1]= new char[3];
    arr1[2]= new char[2];
    arr1[0][0]='a';
    arr1[0][1]='b';
    arr1[1][0]='c';
    arr1[1][1]='d';
    arr1[1][2]='e';
    arr1[2][0]='f';
    arr1[2][1]='g';
    for (int i = 0; i < arr1.length; i++) {
      for (int j = 0; j < arr1[i].length; j++) {   System.out.print(arr1[i][j]);
      }
      System.err.println();
    }
  }
}