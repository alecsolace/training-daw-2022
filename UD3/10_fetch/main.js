window.onload = function () {
  console.log("document loaded");
  let content = document.getElementById("content");
  fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => response.json())
    .then((response) => {
      const data = response.data;
      data.forEach((item) => {
        let {
          id,
          employee_name,
          employee_age,
          employee_salary,
          profile_image,
        } = item;
        let div = document.createElement("div");
        div.innerHTML = `${id} -  ${employee_name} -  ${employee_age} -  ${employee_salary}`;
        content.appendChild(div);
      });
    });
};
