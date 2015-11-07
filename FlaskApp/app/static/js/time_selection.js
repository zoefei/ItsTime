function AddPerson(start, end, id) {
    content = document.getElementById('content').innerHTML + '<div class="row">' + '<div class="col-md-3">' + '<p id="Name"> Name </p>';
    content = content + '<input type="text" id="peopleName" style="border: 0; background-color: #fff;" value="Name"/>';
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
    content = content + ' <input id="To" class="form-control input-group-lg reg_name" type="text" name="To"'
    content = content + 'title="Enter time To" placeholder="To"/>' + ' </div>';
    content = content + '<div class="form-group col-xs-4 col-xs-push-2">' + '<button type="button" class="btn btn-success" style="magin-left:100px">+ Add</button>';
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
    });
}




