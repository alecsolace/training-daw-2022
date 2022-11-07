var index = 0;

window.onload = function () {
  console.log("document loaded");
  let
};

function addRow() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.table(JSON.parse(this.responseText).data);
      let data = JSON.parse(this.responseText).data;
      let contentRow = document.getElementById("content");
      data.forEach((item) => {
        let {
          id,
          employee_name,
          employee_age,
          employee_salary,
          profile_image,
        } = item;
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdAge = document.createElement("td");
        let tdSalary = document.createElement("td");
        let tdImage = document.createElement("td");
        tdId.innerText = id;
        tdName.innerText = employee_name;
        tdAge.innerText = employee_age;
        tdSalary.innerText = employee_salary;
        tdImage.innerText = profile_image;
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdSalary);
        tr.appendChild(tdImage);
        contentRow.append(tr);
      });
    }
  };

  xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhttp.send();
}
//data[0]
