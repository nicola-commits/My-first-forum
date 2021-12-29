var threads = [
    {
        id:1,
        title: "This thread is a test",
        author: 'Ilaria',
        date : Date.now(),
        content : "Thread content",
        comments : [
            {
            author : 'commentauth1',
            date : Date.now(),
            content : 'very interesting thoughts!'
            }
        ]
    },
    {
        id:2,
        title: "Thread 2",
        author: 'Ronan',
        date : Date.now(),
        content : "Thread content 2",
        comments : ["ciao, ciao, ciao", '', '']
    }
]

var threads;
if(localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(dafaultThreads))
}