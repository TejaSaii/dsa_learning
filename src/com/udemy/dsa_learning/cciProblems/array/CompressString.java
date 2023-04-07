package com.udemy.dsa_learning.cciProblems.array;

public class CompressString {
    public String compressString(String str){
        StringBuilder builder = new StringBuilder();
        int count = 1;
        for(int i=0; i < str.length()-1; i++){
            if(str.charAt(i) == str.charAt(i+1)){
                count++;
            }
            else{
                builder.append(str.charAt(i)+""+count);
                count = 1;
            }
        }
        builder.append(str.charAt(str.length()-1)+""+count);
        return str.length() < builder.toString().length() ? str : builder.toString();
    }

    public static void main(String[] args){
        CompressString obj = new CompressString();
        System.out.println(obj.compressString("aabccccddde"));
        System.out.println(obj.compressString("rawta"));
        System.out.println(obj.compressString("reeeebookkcc"));
    }
}
