/*
 * You are given two non-empty linked lists represeting two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list
 * 
 * Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
 * Output: [7, 0, 8]
 * as
 * 342 + 465 = 807
 * 
 */
class ListNode
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}


var addTwoNumbers = function(l1, l2)
{
    let sum = 0;
    let current = new ListNode(0);
    let result = current;

    while (l1 || l2)
    {
        if (l1)
        {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2)
        {
            sum += l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(sum % 10);
        current = current.next;

        sum = sum > 9 ? 1 : 0
    }

    if (sum)
    {
        current.next = new ListNode(sum);
    }
    return result.next;
};

results = addTwoNumbers([2, 4, 3], [5, 6, 4])

console.log(results)