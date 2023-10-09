

/* function addInfo(){
    var inputName = document.getElementsByClassName('input-name')[0]
    window.location.href = inputName.value
    var inputId = document.getElementsByClassName('input-Id')[0]
    window.location.href = inputId.value
} */




/* function addLine() {
    var inputElement = document.getElementById('my-table')
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var text = document.createTextNode("1");
    var text2 = document.createTextNode("value 1");
    td.appendChild(text)
    td2.appendChild(text2)
    tr.appendChild(td)
    tr.appendChild(td2)
    inputElement.appendChild(tr)
} */




        function add() {
            var id = document.getElementById("idInput").value;
            var name = document.getElementById("nameInput").value;

            if (id.trim() !== "" && name.trim() !== "") {
                var table = document.getElementById("dataTable");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = id;
                cell2.innerHTML = name;

                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                deleteButton.onclick = function() {
                    table.deleteRow(row.rowIndex);
                };
                cell3.appendChild(deleteButton);

                document.getElementById("idInput").value = "";
                document.getElementById("nameInput").value = "";
            } else {
                alert("Vui lòng nhập đầy đủ ID và Name");
            }
        }