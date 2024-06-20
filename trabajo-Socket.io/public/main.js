let socket = io.connect();
socket.on('messages', (data) => {
    console.log(data);
})

const username = prompt('ingrese su nombre:')

function render(data) {
    var html = data.map( (elem, index) =>{
    return(`<div>
    <strong>${elem.author}</strong>:
    <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
    }
    socket.on('messages', (data) => { render(data); });

    function addMessage(e) {
        var mensaje = {
        author: username,
        text: document.getElementById('texto').value
        };
        socket.emit('new-message', mensaje);
        return false;
        }