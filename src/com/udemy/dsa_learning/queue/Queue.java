package com.udemy.dsa_learning.queue;

public class Queue {
    
    private Node first;
    private Node last;
    private int length;

    class Node{
        int value;
        Node next;
        
        public Node(int value){
            this.value = value;
        }
    }

    public Queue(int value){
        Node theNode = new Node(value);
        first = theNode;
        last = theNode;
        length = 1;
    }

    public void enqueue(int value){
        Node theNode = new Node(value);
        if(length == 0){
            first = theNode;
            last = theNode;
            length = 1;
        }
        else{
            last.next = theNode;
            last = theNode;
            length++;
        }
    }

    public Node dequeue(){
        if(length == 0){
            return null;
        }
        Node temp = first;
        first = first.next;
        temp.next = null;
        length--;
        return temp;
    }

    public void getFirst(){
        System.out.println("First: "+first.value);
    }

    public void getLast(){
        System.out.println("Last: "+last.value);
    }

    public void getHeight(){
        System.out.println("Length: "+length);
    }

    public void printList(){
        Node temp = first;
        while(temp != null){
            System.out.println(temp.value);
            temp = temp.next;
        }
    }
}
