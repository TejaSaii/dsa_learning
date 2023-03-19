package com.udemy.dsa_learning.queue;

public class Main {
    public static void main(String[] args){

        Queue queue = new Queue(7);
        queue.enqueue(0);
        queue.enqueue(8);
        queue.enqueue(12);
        queue.printList();
        queue.getFirst();
        queue.getLast();

        System.out.println();
        System.out.println("Dequeued value: "+queue.dequeue().value);
        queue.printList();
        queue.getFirst();
        queue.getLast();
    }
}
