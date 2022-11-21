<script>
function overFunction(ev) {
    ev.preventDefault();
}

function startFunction(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropFunction(ev) {
    ev.preventDefault();
    var data = 
    ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
}
</script>
