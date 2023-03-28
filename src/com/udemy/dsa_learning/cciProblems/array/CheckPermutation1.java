package com.udemy.dsa_learning.cciProblems.array;

import java.util.Arrays;

public class CheckPermutation1 {
    public String sort(String input){
        char[] arr = input.toCharArray();
        Arrays.sort(arr);
        return new String(arr);
    }
    public boolean checkPermutation(String s, String t){
        if(s.length() != t.length()){
            return false;
        }
        return sort(s).equals(sort(t));
    }

    public static void main(String[] args){
        String s = "toxic";
        String t = "xicto";
        CheckPermutation1 obj = new CheckPermutation1();
        System.out.println(obj.checkPermutation(s, t));
    }
}
