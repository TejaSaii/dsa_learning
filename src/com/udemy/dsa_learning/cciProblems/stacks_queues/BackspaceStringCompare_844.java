package com.udemy.dsa_learning.cciProblems.stacks_queues;

import java.util.Stack;

public class BackspaceStringCompare_844 {
    public boolean backspaceCompare(String s, String t) {
        if(s==null || t==null){
            return false;
        }
        else{
            return performBackspace(s).equals(performBackspace(t));
        }
    }

    public Stack<Character> performBackspace(String input){
        Stack<Character> s = new Stack<>();
        for(Character c : input.toCharArray()){
            s.push(c);
            if(c == '#'){
                s.pop();
                s.pop();
            }
        }
        return s;
    }
}
