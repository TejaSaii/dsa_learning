package com.udemy.dsa_learning.cciProblems.array;

public class OneAway {
    public boolean oneAwayEdit(String s1, String s2){
        int length1 = s1.length();
        int length2 = s2.length();
        if(s1 == null || s2 == null) return false;
        else if(length1 == length2) return oneReplace(s1,s2);
        else if(length1 + 1 == length2) return oneAdd(s1, s2);
        else if(length1 == length2 + 1) return oneAdd(s2, s1);
        else return false;
    }

    public boolean oneReplace(String s1, String s2){
        boolean foundChar = false;
        for(int i=0; i<s1.length(); i++){
            if(s1.charAt(i) != s2.charAt(i)){
                if(foundChar){
                    return false;
                }
                foundChar = true;
            }
        }
        return true;
    }

    public boolean oneAdd(String s1, String s2){
        int index1 = 0;
        int index2 = 0;
        while(index1 < s1.length() && index2 < s2.length()){
            if(s1.charAt(index1) != s2.charAt(index2)){
                if(index1 != index2){
                    return false;
                }
                index2++;
            }
            else{
                index1++;
                index2++;
            }
        }
        return true;
    }
    public static void main(String[] args){
        OneAway obj = new OneAway();
        System.out.println(obj.oneAwayEdit("apple", "abple"));
        System.out.println(obj.oneAwayEdit("aple", "apple"));
        System.out.println(obj.oneAwayEdit("swing", "swng"));
        System.out.println(obj.oneAwayEdit("", "e"));
        System.out.println(obj.oneAwayEdit("s", ""));
        System.out.println(obj.oneAwayEdit("apple", "see"));
        System.out.println(obj.oneAwayEdit(null, null));
    }
}
