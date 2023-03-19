package com.udemy.dsa_learning.stack;

public class Stack {
    private Node top;
    private int height;

    class Node{
        int val;
        Node next;

        public Node(){}
        public Node(int val){
            this.val = val;
        }
    }

    public Stack(int val){
        Node newNode = new Node(val);
        top = newNode;
        height = 1;
    }

    public void push(int value){
        Node theNode = new Node(value);
        if(height == 0){
            top = theNode;
        }
        else{
            theNode.next = top;
            top = theNode;
        }
        height++;
    }

    public Node pop(){
        if(height == 0) return null;
        Node temp = top;
        top = top.next;
        temp.next = null;
        height--;
        return temp;
    }

    public void printStack(){
        Node temp = top;
        while(temp != null){
            System.out.println(temp.val);
            temp = temp.next;
        }
    }

    public void getTop(){
        System.out.println("top value : "+top.val);
    }

    public void getHeight(){
        System.out.println("height : "+height);
    }
}
