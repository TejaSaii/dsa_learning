package com.udemy.dsa_learning.cciProblems.array;

// Adding %2$
public class URLify {
    String urlify(String str){
        int spaceCount = 0;
        //to get the count of number of spaces
        for(int i=0; i < str.length(); i++){
            if(str.charAt(i) == ' '){
                spaceCount++;
            }
        }
        int index = str.length() + spaceCount*2;
        StringBuffer builder = new StringBuffer(index);
        for(int i=str.length()-1; i >= 0; i--){
            char curr = str.charAt(i);
            if(curr == ' '){
                builder.append('$');
                builder.append('2');
                builder.append('%');
                index = index-3;
            }
            else{
                builder.append(curr);
                index--;
            }
        }
        return builder.reverse().toString();
    }

    public static void main(String[] args){
        URLify obj = new URLify();
        String s1 = "Mr John Smith";
        String s2 = "The world of new possibilities, so can't do shit";
        System.out.println("s1 urlified: "+obj.urlify(s1));
        System.out.println("s2 urlified: "+obj.urlify(s2));
    }
}
