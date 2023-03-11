package com.udemy.dsa_learning.doublyLinkedList;

public class Main {
    public static void main(String[] args){

        DoublyLinkedList ddl = new DoublyLinkedList(7);
        
        ddl.getHead();
        ddl.getTail();
        ddl.getLength();
        ddl.printList();
        ddl.append(4);
        ddl.append(10);
        ddl.append(30);
        ddl.printList();
        ddl.getHead();
        ddl.getTail();
        ddl.getLength();
        System.out.println("Removed last "+ddl.removeLast().value);
        ddl.printList();
        ddl.getLength();
        ddl.getTail();
        ddl.prepend(28);
        ddl.printList();
        ddl.getLength();
        ddl.getTail();
        ddl.getHead();
        System.out.println("Removed first "+ddl.removeFirst().value);
        ddl.printList();
        ddl.getLength();
        ddl.getHead();
        System.out.println("get at 0 "+ddl.get(0).value);
        System.out.println("get at 2 "+ddl.get(2).value);
        System.out.println(ddl.set(0, 45));
        ddl.printList();
        System.out.println(ddl.insert(6, 88));
        ddl.printList();
        ddl.getHead();
        ddl.getTail();
        ddl.getLength();
        System.out.println(ddl.remove(1).value);
        ddl.printList();
        ddl.getHead();
        ddl.getTail();
        ddl.getLength();
    }
}
