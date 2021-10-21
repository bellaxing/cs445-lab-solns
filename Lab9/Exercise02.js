class Subject {
    constructor() {
        this.observers = {};
    }

    on(event, fn) {
        if (this.observers[event]) {
            this.observers[event].push(fn);
        } else {
            this.observers[event] = [fn];
        }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }
}

const subject = new Subject();
subject.on('eat', console.log); //{ 'eat': [console.log] }
subject.on('study', console.log); // { 'eat': [console.log], 'study': [console.log] }

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo); //{ 'eat': [console.log, function foo(msg){...}], 'study': [console.log] }
subject.on('study', foo); //{ 'eat': [console.log, function foo(msg){...}], 'study': [console.log, function foo(msg){...}] }

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445