class Node{
    constructor(el){
        this.element=el;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.countel=1;
    }
    add(el){
     let node=new Node(el);
     if(this.head==null){
        this.head=node;
     } 
     else{
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=node;
        this.countel++; 
     }       
    }
    print(){
        let curr=this.head;
        let res="";
        while(curr){
            res=res+curr.element+" ";
            curr=curr.next;
        }
        console.log(res);
    }
    reverse(){
        let curr=this.head;
        let prev=null;
        let next=null;
        while(curr){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }
    rotateLinkList(n){
        let count=1;
        let curr=this.head;
        while(count<n){
            curr=curr.next;
            count++;
        }
        
        let nthnode=curr;
        while(curr.next!=null){
            curr=curr.next;
        }
        curr.next=this.head;
       this.head=nthnode.next;
        nthnode.next=null;
    }
    size(){
        console.log(this.countel);
    }
    detectLoop(n){
        // let m=self.size();
        let m=this.countel;
        if(n<m){
            console.log("Yes");
        }
        else {
            console.log("No");
        }
        // console.log(this.countel);
    }
}
let ll=new linkedList();
// ll.add(21);
// ll.add(23);
// ll.add(43);
// ll.add(43);
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.print();
ll.rotateLinkList(4);
ll.print();
ll.size();
ll.detectLoop(4);