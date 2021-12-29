var threads = [
    {
        id:1,
        title: "This thread is a test",
        author: 'Nicola',
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

var def = {
    'Ilaria':'3141',
    'Ronan':'Iliketrains',
    'Nicola':'1234'
}

userpw = JSON.parse(localStorage.getItem('userpw'))
if(userpw == null){
    userpw = def;
}

var threads;
if(localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(dafaultThreads))
}