// alert("hello")
var currentpage = 1;
const loadpage = (page) => {
    currentpage = page;
    $.ajax({
        url: "/Account?page=" + page,
        type: 'GET'
    })
        .then(data => {
            $('#content').html('');
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                var item = $(`<h1> ${element.username} : ${element.password}</h1>`);
                $('#content').append(item);
            }
        })
        .catch(err => {
            console.log("fall");
        })
}
const nextpage = () => {
    currentpage++;
    $.ajax({
        url: "/Account?page=" + currentpage,
        type: 'GET'
    })
        .then(data => {
            $('#content').html('');
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                var item = $(`<h1> ${element.username} : ${element.password}</h1>`);
                $('#content').append(item);
            }
        })
        .catch(err => {
            console.log("fall");
        })
}
const Previouspage = () => {
    currentpage--;
    $.ajax({
        url: "/Account?page=" + currentpage,
        type: 'GET'
    })
        .then(data => {
            $('#content').html('');
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                var item = $(`<h1> ${element.username} : ${element.password}</h1>`);
                $('#content').append(item);
            }
        })
        .catch(err => {
            console.log("fall");
        })
}
