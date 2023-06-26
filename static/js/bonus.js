// start of bonus.js
console.log("test of connection with bonus");

// view plotly.js gallery for guages
function buildGauge(wfreq) {

let gaugeData = [
    {
        domain: { x: [0,1], y: [0,1] },
        value: wfreq,
        title: { text: "Belly Button Washing Frequency <br> Scrubs Per Week"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null, 10] },
            steps: [
                { range: [0, 2], color: "red" },
                { range: [2, 4], color: "orange" },
                { range: [4, 6], color: "yellow" },
                { range: [6, 8], color: "limegreen" },
                { range: [8, 10], color: "green" },
            ],
            bar: { color: "black" },
        },
}];

var gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

// <div id="gauge"></div>
Plotly.newPlot('gauge', gaugeData, gaugeLayout);

};