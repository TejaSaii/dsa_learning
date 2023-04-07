package com.udemy.dsa_learning.cciProblems.array;

public class PalindromePermutation {
    public boolean checkPalindromePermutation(String phrase){
        int[] table = buildCharFreqArray(phrase);
        return checkOneOdd(table);
    }
    public boolean checkOneOdd(int[] countArr){
        boolean oneOdd = false;
        for(int x : countArr){
            if(x % 2 == 1){
                if(oneOdd){
                    return false;
                }
                oneOdd = true;
            }
        }
        return true;
    }
    public int[] buildCharFreqArray(String phrase){
        int[] countArr = new int[Character.getNumericValue('z')-
                                Character.getNumericValue('a') + 1];

        for(char c : phrase.toCharArray()){
            int x = getCharNumber(c);
            if(x != -1){
                countArr[x]++;
            }
        }
        return countArr;
    }
    public int getCharNumber(char c){
        int a = Character.getNumericValue('a');
        int z = Character.getNumericValue('z');
        int val = Character.getNumericValue(c);

        if(a <= val && val <= z){
            return val-a;
        }
        else{
            return -1;
        }
    }
}
