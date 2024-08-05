public class pascalsTriangle1{
  public static void main(String[] args) {
    System.out.println(getValue(5, 3));
  }
  public static int getValue(int row, int col){
    int n = row - 1;
    int r = col - 1;
    int res = 1;
    for(int i = 0; i < r; i++){
      res *= n - i;
      res /= i + 1;
    }
    return res;
  }
}
