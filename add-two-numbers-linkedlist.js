/*
Runtime: 201 ms, faster than 26.97% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 44.4 MB, less than 34.88% of JavaScript online submissions for Add Two Numbers.

const addTwoNumbers = (l1, l2) => {
    if (!l1 && !l2) return null;
    let next,
        tmp = 0,
        newHead;
    while (l1 || l2 || tmp > 0) {
      if (!l1 && l2) sum = tmp + l2.val;
      else if (l1 && !l2) sum = tmp + l1.val;
      else if (l1 && l2) sum = tmp + l1.val + l2.val;
      else if (!l1 && !l2) sum = tmp;
      tmp = Math.floor(sum / 10);
      newNode = new ListNode(sum % 10);
      if (!newHead) newHead = newNode;
      if (next) next.next = newNode;
      next = newNode;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return newHead;
  }
*/

/*
01/25/2022 11:42	Accepted	190 ms	44.1 MB	javascript
*/
  const addTwoNumbers = (l1, l2) => {
    if (!l1 && !l2) return null;
    let next,
        tmp = 0,
        newHead;
    while (l1 || l2) {
      if (!l1 && l2) sum = tmp + l2.val;
      else if (l1 && !l2) sum = tmp + l1.val;
      else if (l1 && l2) sum = tmp + l1.val + l2.val;
      tmp = Math.floor(sum / 10);
      newNode = new ListNode(sum % 10);
      if (!newHead) newHead = newNode;
      if (next) next.next = newNode;
      next = newNode;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    if (tmp > 0) {
        let tail = new ListNode(tmp);
        next.next = tail;
    }
    return newHead;
  }

  /* Does not work on assymetrical length lists
  const addTwoNumbers = (l1, l2) => {
    if (!l1 && !l2) return null;
    let next,
        tmp = 0,
        newHead;
    while (l1 || l2 || tmp > 0) {
      if (!l1 && l2) sum = tmp + l2.val;
      else if (l1 && !l2) sum = tmp + l1.val;
      else if (l1 && l2) sum = tmp + l1.val + l2.val;
      else if (!l1 && !l2) sum = tmp;
      tmp = Math.floor(sum / 10);
      newNode = new ListNode(sum % 10); // we don't need to pass next
      if (!newHead) newHead = newNode;
      if (next) next.next = newNode;
      next = newNode;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return newHead;
  }
  */

  /*
  const addTwoNumbers = (l1, l2) => {
    if (!l1 && !l2) return null;
    let next,
        tmp = 0,
        newHead;
    while (l1 || l2 || tmp > 0) {
      if (!l1 && l2) sum = tmp + l2.val;
      else if (l1 && !l2) sum = tmp + l1.val;
      else if (l1 && l2) sum = tmp + l1.val + l2.val;
      else if (!l1 && !l2) sum = tmp;
      tmp = Math.floor(sum / 10);
      newNode = new ListNode(sum % 10, next);
      if (!newHead) newHead = newNode;
      if (next) next.next = newNode;
      next = newNode;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    next.next = null; // if we pass next in newNode instantiation, we have to do this to stop circular referencing.
    return newHead;
  }
*/
