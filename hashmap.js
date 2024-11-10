class Node {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.hd = null;
    this.tl = null;
  }
  
  append(key, val) {
    const node = new Node(key, val);
  
    if (!this.hd) {
      this.hd = node;
    } else {
      this.tl.nextNode = node;
    };
  
    this.tl = node;
  }
  
  prepend(key, val) {
    const node = new Node(key, val);
  
    if (!this.hd) {
      this.tl = node;
    } else {  
      node.nextNode = this.hd;
    };
  
    this.hd = node;
  
  } 
  
  size() {
    if (this.hd) {
      let sz = 1;
      let next = this.hd;
  
      while (next.nextNode) {
        next = next.nextNode;
        sz++;
      };
  
      return sz;
  
    } else {
      return 0;
    }
  }
  
  head() {
    if(this.hd) {
      return this.hd;
    } else {
      console.log("List is empty");
    };
  }
  
  tail() {
    if (this.tl) {
      return this.tl;
    } else {
      console.log("List is empty");
    };
  }
  
  at(index) {
    if (this.hd && index >= 0) {
          
      let nd = this.hd;
  
      for (let i = 0; i < index; i++) {
        nd = nd.nextNode;
      };
    
      if(!nd) {
        console.log("Node doesn't exist")
      } else {
        return nd;
      };
  
    } else if (index < 0) {
      console.log("Index must be equal or greater than 0");
    } else {
      console.log("List is empty");
    };
  }
  
  pop() {
    if (this.hd === this.tl) {
      this.hd = null;
      this.tl = null;
    } else if (this.hd) {
      let sz = 1;
      let next = this.hd;
      let secondLast = this.hd;
  
      while (next.nextNode) {
        next = next.nextNode;
        sz++;
      };
  
      for (let i = 0; i < sz - 2; i++) {
        secondLast = secondLast.nextNode;
      };
  
      secondLast.nextNode = null;
      this.tl = secondLast;
    };
  }
  
  contains(key) {
    let curr = this.hd;
  
    while (curr) {
      if (curr.key === key) {
        return true;
      } else {
        curr = curr.nextNode;
      };
    };
  
    return false;
  }
  
  find(key) {
  
    let curr = this.hd;
  
    if (curr) {
  
      let index = 0;
  
      while (curr) {
        if (curr.key === key) {
          return index;
        };
      
        index ++;
        curr = curr.nextNode;
  
      };
  
      return null;
  
    } else {
      return null;
    };
  }
  
  toString() {
    if (this.hd) {
      let str = `( ${this.hd.key}, ${this.hd.value} ) -> `;
      let next = this.hd;
  
      while (next.nextNode) {
        str += `( ${next.nextNode.key}, ${next.nextNode.value} ) -> `;
        next = next.nextNode;
      };
  
      str += "null";
  
      return str;
    } else {
      return "null";
    }
  }
  
}

class HashMap {
  constructor() {
    this.buckets = new Array(16);
    this.loadfactor = 0.75;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    
  }
}

