package com.udemy.dsa_learning.cciProblems.array;

public class CheckPermutation2 {
    public boolean checkPermutation(String s, String t){
        if(s.length() != t.length())
            return false;
        
        int[] char_count = new int[128];
        char[] s_arr = s.toCharArray();
        for(char c : s_arr){
            char_count[c]++;
        }

        for(int i=0; i<t.length(); i++){
            char c = t.charAt(i);
            char_count[c]--;
            if(char_count[c] < 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args){
        String s = "toxic";
        String t = "cixot";
        CheckPermutation1 obj = new CheckPermutation1();
        System.out.println(obj.checkPermutation(s, t));
    }
}
