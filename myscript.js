$(document).ready(function() {
  $("#searchInput").on("change paste keyup", function() {
    $('#searchInput').search($(".food"));
  });

  var chart1 = new Chart($("#chart1"), {
    type: 'doughnut',
    data : {
      datasets: [{
        label:"Nutrition",
        data: [9.6, 1, 0.5, 27, 13.5],
        backgroundColor: ["#3367cc", "#dd380f", "#ff9a00", "#119614", "#990099"],
        borderWidth: 2,
        borderColor: "#2c2c2c",
        hoverBorderWidth:2
      }],
      labels: ["Fett", "Kohlenhydrate", "Ballaststoffe", "Eiweiß", "Salz"]
    },
    options : {
      cutoutPercentage: 30,
      title : {
        display: false,
        text: "Kantabrische Sardellenfilets",
        fontSize: 24
      },
      legend: {
        display: true,
        position: "right",
        labels : {
          fontColor: "#fff"
        }
      },
      layout:{
        padding:{
          left:20,
          right:20,
          top:20,
          bottom:20
        }
      }
    }
  });
});