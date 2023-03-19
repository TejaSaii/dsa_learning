package com.udemy.dsa_learning.stack;

public class Main {
    public static void main(String[] args){

        Stack stack = new Stack(7);
        stack.push(5);
        stack.push(6);
        stack.push(101);

        stack.printStack();
        stack.getHeight();
        stack.getTop();
        stack.pop();
        System.out.println();
        stack.printStack();
        stack.getTop();
        stack.getHeight();

    }
}
