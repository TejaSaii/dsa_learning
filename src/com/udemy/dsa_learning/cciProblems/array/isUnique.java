package com.udemy.dsa_learning.cciProblems.array;

public class isUnique {
    public static void main(String[] args){
        String s1 = "Tejasingfry";
        String s2 = "Reverseit";
        System.out.println("Is Unique check for s1: "+checkUnique(s1));
        System.out.println("Is Unique check for s2: "+checkUnique(s2));
    }
    public static boolean checkUnique(String str){
        //considering the string to be ASCII
        if(str.length() > 128)
            return false;
        
        boolean[] char_set = new boolean[128];
        for(int i=0; i < str.length(); i++){
            int val = str.charAt(i);
            if(char_set[val]){
                return false;
            }
            char_set[val] = true;
        }
        return true;
    }
}
