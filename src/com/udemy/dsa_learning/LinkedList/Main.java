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
		
		//testing removeFirst()
		myList.append(2);
		myList.prepend(3);
		myList.append(4);
		myList.printList();
		myList.getLength();
		System.out.println("removed item : "+myList.removeFirst().value);
		myList.printList();
		myList.getHead();
		myList.getTail();
		myList.getLength();
		System.out.println("removed item : "+myList.removeFirst().value);
		myList.printList();
		myList.getHead();
		myList.getTail();
		myList.getLength();
		System.out.println("removed item : "+myList.removeFirst().value);
		myList.printList();
		myList.getLength();
		
		LinkedList list2 = new LinkedList(1);
		list2.append(4);
		list2.append(49);
		list2.append(30);
		list2.printList();
		System.out.println("Element at index 2: "+list2.get(2).value);
		System.out.println("Replaced element at index 3: "+list2.set(3, 55));
		list2.printList();
		list2.insert(4, 31);
		list2.printList();
		
		System.out.println(list2.remove(4).value);
		System.out.println(list2.remove(0).value);
		list2.printList();
		list2.getLength();
	}
}
