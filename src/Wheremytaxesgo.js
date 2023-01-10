let grossIncome = document.getElementById("grossIncome");
let provinceSelected = document.getElementById("provinceForm");

let program = "";
let programValues = "";
provinceSelected.addEventListener("change", main);

async function main() {
  console.log("before grabJSON");
  let program = await grabJSON();
  console.log("THIS IS JARED", program);
  console.log("JARED2", programValues);
  //Event listener waiting for the province value to change
  googleChart(program);
}

// grab json file
async function grabJSON() {
  const taxJSON = "Wheremytaxesgo.json";
  const request = new Request(taxJSON);
  const response = await fetch(request);
  const data = await response.json();

  // console.log("Province Sleected", provinceSelected.value);
  let provinceSelection = provinceSelected.value;

  //loop through each element in the json file
  for (let i = 0; i < data.length; i++) {
    //if provinceSelected equals the province in the json file, console log the the data in object
    if (provinceSelected.value === data[i].province) {
      let values = [];
      console.log("datai", data[i]);
      //set the value of the program to the value of the program in the json file
      Object.keys(data[i].program).forEach(function (key) {
        let program = data[i].program;
        values.push([key, program[key]]);
      });
      console.log("HERSE MY ARRAY", values);
      //set the value of the program to the value of the program in the json file

      //here you are making separate arrays we dont need this
      // programValues = Object.values(data[i].program);

      console.log("program", program);
      console.log("programValues", programValues);

      //get tax rates
      // let taxRate = Object.keys(data[i].income)
      // // console.log(taxRate);
      // let taxableIncome = Object.values(data[i].income);
      // console.log(taxableIncome);
      return values;
    }
  }
  //function to take earnings and calculate taxes using JSON results
  calculateTaxes();
}

//function to calculate taxes TODO: Calculate income using rate and gross income using modulo
function calculateTaxes() {
  console.log("HERES MY PROGRAM", program);
}

// Visualize Google Pie Chart
async function googleChart(values) {
  // Load the Visualization API and the corechart package.
  await google.charts.load("current", { packages: ["corechart"] });

  // Set a callback to run when the Google Visualization API is loaded.
  await google.charts.setOnLoadCallback(drawChart(values));
}

// Callback that creates and populates a data table,
//   instantiates the pie chart, passes in the data and
//   draws it.
function drawChart(programs) {
  console.log("PLS?", program);
  console.log(programValues);
  //Create the data table.
  let data = new google.visualization.DataTable();
  data.addColumn("string", "Program");
  data.addColumn("number", "budget");
  data.addRows(programs);

  // ['Healthcare', 39],
  // ['Education', 25.3],
  // ['Welfare', 12.3],
  // ['Debt Payments', 5.9],
  // ['Community Safety', 3.9],
  // ['Roads & Infrastructure', 3],
  // ['Investing in Farms & Food', 2.9],
  // ['Supporting Communities', 1.2],
  // ['Sports, Culture & Heritage', 1.2],
  // ['Procurement of Capital Assets', 1.1],
  // ['Parks', 0.9],
  // ['Building the Economy', 0.6],
  // ['Emergencies', 0.2],
  // ['Running Government', 1.3]
  //   ]);

  //Set chart options
  var options = { title: "Where your Taxes Go", width: 800, height: 600 };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
