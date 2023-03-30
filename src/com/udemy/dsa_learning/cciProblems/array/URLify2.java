package com.udemy.dsa_learning.cciProblems.array;

// Adding %2$ using string inbuilt methods
public class URLify2 {
    String urlify(String str){
        return str.replace(" ", "%2$");
    }

    public static void main(String[] args){
        URLify obj = new URLify();
        String s1 = "Mr John Smith";
        String s2 = "The world of new possibilities, so can't do shit";
        System.out.println("s1 urlified: "+obj.urlify(s1));
        System.out.println("s2 urlified: "+obj.urlify(s2));
    }
}
