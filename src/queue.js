class Queue {
    constructor() {
        this.queue = [];
      }
    
      enqueue(element) {
        this.queue.push(element);
      }
    
      dequeue() {
        return this.queue.shift();
      }
    
      front() {
        return this.queue[0];
      }
    
      isEmpty() {
        return this.queue.length === 0;
      }
    
      size() {
        return this.items.length;
      }
}

module.exports = Queue