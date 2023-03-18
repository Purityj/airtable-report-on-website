var Airtable = require('airtable');
let dates = new Date().toDateString();
document.getElementById("dateId").innerHTML = dates;
let tableData ="";
var base = new Airtable({apiKey: 'keyUBfnP9dXEa8sEB'}).base('appUibYuzXhf3Zk2t');


base('Invoicing').select({
    maxRecords: 50,
    view: "Grid view"
     
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        tableData += `<tr>
         <td>${record.get('Name')}</td>
            <td>${record.get('Payment Date')}</td>
            <td>${record.get('Amount Paid')}</td>
            <td>${record.get('Validation')}</td>
        </tr>`;

        // console.log('Retrieved', record);
        // console.log('Retrieved', record.get('Payment Date'));
        
    });
    fetchNextPage();

    document.getElementById("table_body").innerHTML = tableData;
}, function done(err) {
    if (err) { console.error(err); return; }
});