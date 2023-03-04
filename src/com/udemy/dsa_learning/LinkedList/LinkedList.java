package com.udemy.dsa_learning.LinkedList;

public class LinkedList {

	private Node head;
	private Node tail;
	private int length;
	
	public LinkedList(int value) {
		Node newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		length = 1;
	}
	
	public class Node {
		int value;
		Node next;
		
		Node(int value){
			this.value = value;
		}
	}
	
	public void printList(){
		Node temp = head;
		while(temp != null){
			 System.out.println(temp.value);
			 temp = temp.next;
		}
	}
	
	public void prepend(int value) {
		Node newNode = new Node(value);
		newNode.next=head;
		head = newNode;
		length++;
	}
	
	public void append(int value) {
		Node newNode = new Node(value);
		if(length == 0) {
			tail = newNode;
			head = newNode;
		}
		else {
			tail.next = newNode;
			tail = newNode;
		}
		length++;
	}
	
	public void getHead() {
		System.out.println("Head: "+head.value);
	}
	
	public void getTail() {
		System.out.println("Tail: "+tail.value);
	}
	
	public void getLength() {
		System.out.println("Length: "+length);
	}
}
