<<<<<<< HEAD
var id= 0;

function AddPerson() {
    id = id+ 1;
    console.log(id);
    content = document.getElementById('content').innerHTML + '<div class="row">' + '<div class="col-md-3">' + '<p id="Name"> Name </p>';
    content = content + '<input type="text" id="peopleName" style="border: 0; background-color: #fff;"/>';
=======
function AddPerson(start, end, id) {
    content = document.getElementById('content').innerHTML + '<div class="row">' + '<div class="col-md-3">' + '<p id="Name"> Name </p>';
    content = content + '<input type="text" id="peopleName" style="border: 0; background-color: #fff;" value="Name"/>';
>>>>>>> origin/master
    content = content + ' <hr></hr>';
    content = content + '</div>';
    content = content + '<div class="col-md-6">' + '<div id="container' + id + '" style="max-width: 650px; height: 180px; margin: 0 auto"></div>';
    content = content + '</div>';
    content = content + '<div class="col-md-3">' + '<button type="button" class="btn btn-secondary" id="editButton">Edit</button>';
    content = content + '<button type="button" class="btn btn-primary" id="submitButton">Submit</button>';
    content = content + '</div>';
    content = content + '<div class="row">' + '<div class="form-group col-xs-4 col-xs-push-2">';
    content = content + '<input id="from" class="form-control input-group-lg reg_name" type="text" name="from"'
    content = content + 'title="Enter time From" placeholder="From"/>'+ '</div>';
    content = content + ' <div class="form-group col-xs-4 col-xs-push-2">';
    content = content + ' <input id="to" class="form-control input-group-lg reg_name" type="text" name="to"'
    content = content + 'title="Enter time To" placeholder="To"/>' + ' </div>';
<<<<<<< HEAD
    content = content + '<div class="form-group col-xs-4 col-xs-push-2">' + '<button onclick="addTime()" id="add" type="button" class="btn btn-success" style="magin-left:100px">+ Add</button>';
=======
    content = content + '<div class="form-group col-xs-4 col-xs-push-2">' + '<button onclick="click()" id="add" type="button" class="btn btn-success" style="magin-left:100px">+ Add</button>';
>>>>>>> origin/master
    content = content + '</div>'
    content = content + '</div>';
    document.getElementById('content').innerHTML = content;

    $('#container' + id).highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Please Select Your Time Available'
        },
        xAxis: {
            categories: [
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
            ],
            plotBands: [{ // visualize the weekend
                from: 0,
                to: 0,
                color: 'rgba(68, 170, 213, .6)'
            }]
        },
        yAxis: {
            title: {
                text: 'Time'
            },
            labels: {
                enabled: false
            },
            enabled:false
        },
        legend: {
            itemStyle:{ "color": "rgba(255, 255, 255, .4)", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold" }
        },
        tooltip: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.0
            }
        },
        series: [{
            name: 'John',
            data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            color: 'rgba(255, 255, 255, .4)'
        }]
<<<<<<< HEAD
    }, function (chart) { // on complete

        var x1 = chart.xAxis[0].toPixels(7),
            x2 = chart.xAxis[0].toPixels(9),
            y1 = chart.yAxis[0].toPixels(0),
            y2 = chart.yAxis[0].toPixels(20);

        //chart.renderer.rect(100,45,100,63,0)

        chart.renderer.rect(x1, y2, x2 - x1, y1 - y2)
            .attr({
                'stroke-width': 2,
                stroke: 'rgba(255, 255, 255, .4)',
                fill: 'rgba(243, 66, 66, .2)',
                zIndex: 3
            })
            .add();

    });
}

function addTime() {
  var name = $('#peopleName').val();
  var time_from = $('#from').val();
  var time_to = $('#to').val();
  var msg = name + " " + time_from + " " + time_to;
  $.ajax({
        method: "GET",
        url: "http://127.0.0.1:5000/time/" + name + "/" + time_from + "/" + time_to,
=======
    });
}

function click() {
  console.log("clicked");
  var a = $('#from').val();
  var b = $('#to').val();
  var msg = a + " " + b;
  $.ajax({
        method: "GET",
        url: "http://127.0.0.1:5000/time/" + a + "/" + b,
>>>>>>> origin/master
        dataType: "json"
    })
     .done(function( msg ) {
        console.log( "Data Saved: " + msg );
<<<<<<< HEAD
        console.log(msg);
=======
>>>>>>> origin/master
     });
}


