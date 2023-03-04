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
		if(length == 0) {
			head = newNode;
			tail = newNode;
		}
		else {
			newNode.next=head;
			head = newNode;
		}
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

	public Node removeLast() {
		//case 1: when list is empty
		if(length == 0) return null;
		
		//case 2: when list has elements
		Node temp = head;
		Node pre = head;
		while(temp.next != null) {
			pre = temp;
			temp = temp.next;
		}
		tail = pre;
		pre.next = null;
		length--;
		
		//case 3: when list has single element
		//covering the edge case where list has only one item
		//and when it goes through the above code it sets the length as 0 but the Node still exists
		if(length == 0) {
			head = null;
			tail = null;
		}
		//returning the removed element
		return temp;
	}
	
	public Node removeFirst() {
		if(length == 0) return null;
		Node temp = head;
		head = head.next;
		temp.next = null;
		length--;
		if(length == 0) tail = null;
		return temp;
	}
	
	public Node get(int n) {
		Node temp = head;
		if(n<0 || n >= length || length == 0) return null;
		for(int i=0; i<n; i++) {
			temp = temp.next;
		}
		return temp;
	}
	
	public boolean insert(int index, int value) {
		if(index < 0 || index > length) return false;
		if(index == 0) {
			prepend(value);
			return true;
		}
		if(index == length) {
			append(value);
			length++;
			return true;
		}
		Node temp = get(index-1);
		Node theNode = new Node(value);
		theNode.next = temp.next;
		temp.next = theNode;
		length++;
		return true;
	}
	
	public boolean set(int index, int value) {
		Node temp = get(index);
		if(temp != null) {
			temp.value = value;
			return true;
		}
		return false;
	}
	
	public Node remove(int index) {
		if(index < 0 || index >= length) return null;
		if(index == 0) {
			length--;
			return removeFirst();
		}
		Node pre = get(index-1);
		Node temp = pre.next;
		pre.next = temp.next;
		temp.next = null;
		length--;
		return temp;
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
