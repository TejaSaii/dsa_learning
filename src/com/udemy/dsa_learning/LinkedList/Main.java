package com.udemy.dsa_learning.LinkedList;

public class Main {
	
	public static void main(String[] args) {
		LinkedList myList = new LinkedList(1);
		myList.append(2);
		myList.prepend(3);
		myList.append(4);
		
		myList.printList();
		myList.getHead();
		myList.getTail();
		
		//1 - removing 4
		System.out.println(myList.removeLast().value);
		//2 - removing 2
		System.out.println(myList.removeLast().value);
		//3 - removing 1
		System.out.println(myList.removeLast().value);
		//4 - removing last element
		System.out.println(myList.removeLast().value);
		System.out.println(myList.removeLast());
		
		
	}
}
