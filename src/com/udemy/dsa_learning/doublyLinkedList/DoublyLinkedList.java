package com.udemy.dsa_learning.doublyLinkedList;

public class DoublyLinkedList {
    
    private Node head;
    private Node tail;
    private int length;

    public DoublyLinkedList(int value){
        Node theNode = new Node(value);
        head = theNode;
        tail = theNode;
        length++;
    }

    class Node{
        int value;
        Node next;
        Node prev;

        Node(int value){
            this.value = value;
        }
    }

    //to print the list
    public void printList(){
        Node temp = head;
        System.out.print("PRINTING : ");
        for(int i=0; i<length; i++){
            System.out.print(temp.value+" ");
            temp = temp.next;
        }
        System.out.println();
    }

    //to append a node to the list
    public void append(int value){
        Node theNode = new Node(value);
        if(length == 0){
            head = theNode;
            tail = theNode;
        }
        else{
            tail.next = theNode;
            theNode.prev = tail;
            tail = theNode;
        }
        length++;
    }

    //to remove the last node
    public Node removeLast(){
        if(length==0) return null;
        else{
            Node temp = tail;
            temp.prev.next = null;
            tail = temp.prev;
            temp.prev = null;
            length--;
            if(length == 0){
                head = null;
                tail = null;
            }
            return temp;
        }
    }

    //to add a node at the start of the list
    public void prepend(int value){
        Node theNode = new Node(value);
        if(length == 0){
            head = theNode;
            tail = theNode;
        }
        else{
            theNode.next = head;
            head.prev = theNode;
            head = theNode;
        }
        length++;
    }

    //to remove the first element of the list
    public Node removeFirst(){
        Node temp = head;
        if(length == 0) return null;
        if(length == 1){
            head = null;
            tail = null;
            return temp;
        }
        temp.next.prev = null;
        head = temp.next;
        temp.next = null;
        length--;
        return temp;
    }

    //to get a node by index
    public Node get(int index){
        if(index < 0 || index >= length) return null;
        Node temp = head;
        if(index < length/2){
            for(int i=0; i<index; i++){
                temp = temp.next;
            }
        }
        else{
            temp = tail;
            for(int i=length-1; i>index; i--){
                temp = temp.prev;
            }
        }
        return temp;
    }

    //to set a different value to the node
    public boolean set(int index, int value){
        Node temp = get(index);
        if (temp == null) {
            return false;
        }
        temp.value = value;
        return true;
    }

    //to insert a new node at a particular index
    public boolean insert(int index, int value){
        Node theNode = new Node(value);
        if(index == 0){
            prepend(value);
            return true;
        }
        if(index == length){
            append(value);
            return true;
        }
        Node before = get(index-1);
        if(before == null) return false;
        Node after = before.next;
        before.next = theNode;
        theNode.prev = before;
        theNode.next = after;
        after.prev = theNode;
        length++;
        return true;
    }

    //to remove a node from a particular index
    public Node remove(int index){
        if(index < 0 || index >= length) return null;
        if(index == 0) return removeFirst();
        if(index == length -1) return removeLast();
        Node temp = get(index);
        temp.next.prev = temp.prev;
        temp.prev.next = temp.next;
        temp.prev = temp.next = null;
        length--;
        return temp;
    }

    public void getLength(){
        System.out.println(length);
    }

    public void getHead(){
        System.out.println(head.value);
    }

    public void getTail(){
        System.out.println(tail.value);
    }
}