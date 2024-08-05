public class pascalsTriangle2{
  public static void main(String[] args) {
    for(int item: getRow(5)){
      System.out.println(item);
    }
  }

  public static int[] getRow(int row){
    //since same no. of values in the row
    int col = row;
    int prev = 1;
    int[] res = new int[col];
    res[0] = 1;
    for(int i = 1; i < col; i++){
      prev *= row - i;
      prev /= i;
      res[i] = prev;
    }
    return res;
  }
}
