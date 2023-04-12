package com.udemy.dsa_learning.cciProblems.stacks_queues;

public class QueueArray {
    int[] arr;
    int first;
    int last;
    public QueueArray(int size){
        arr = new int[size];
        last = -1;
        first = -1;
    }

    public void enqueue(int data){
        if(last == -1){
            first++;
            last++;
            arr[first] = data;
        }
        else if(isFull()){
            System.out.println("can't update the queue is full");
        }
        else{
            last++;
            arr[last] = data;
        }
    }

    public boolean isFull(){
        if(last == arr.length-1){
            return true;
        }
        return false;
    }

    public boolean isEmpty(){
        if(last==-1){
            return true;
        }
        return false;
    }

    public int dequeue(){
        if(isEmpty()){
            return -1;
        }
        else if(first != last){
            int temp = arr[first];
            first++;
            return temp;
        }
        else{
            int temp = arr[first];
            first = last = -1;
            return temp;
        }
    }

    public int peek(){
        if(isEmpty()){
            return -1;
        }
        else{
            return arr[first];
        }
    }

    public void delete(){
        arr = null;
    }

    public void printQueue(){
        if(isEmpty()){
            System.out.println("queue is empty");
            return;
        }
        for(int i=first; i<=last; i++){
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args){
        QueueArray queue = new QueueArray(4);
        queue.enqueue(4);
        queue.dequeue();
        queue.printQueue();
        queue.enqueue(7);
        queue.enqueue(10);
        queue.enqueue(90);
        queue.printQueue();
        queue.enqueue(0);
        queue.printQueue();
        queue.enqueue(80);
    }
}
