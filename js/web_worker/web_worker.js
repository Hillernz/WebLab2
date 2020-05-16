
onmessage = function (e) {
    can_add = true;
    console.log(e.data);
    this.postMessage(can_add);
}