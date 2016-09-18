var student = {
  name:"",
  type:"student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById("name").addEventListener('keyup', keyup);
}

function keyup(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {

  student.name= document.getElementById('name').value;
  var total = 0;

  for(var i=0; i<student.name.length; i++) {
    total += student.name.charCodeAt(i);
  }

  var output = total;
  document.getElementById('count').innerText = output;

}
