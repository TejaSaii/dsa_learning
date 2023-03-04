package com.udemy.dsa_learning.LinkedList;

public class Main {
	
	public static void main(String[] args) {
		LinkedList myList = new LinkedList(1);
		myList.printList();
		myList.getHead();
		myList.getTail();
		myList.getLength();
		
		myList.prepend(2);
		myList.append(3);
		myList.getLength();
		myList.printList();
		myList.getHead();
		myList.getTail();
	}
}
