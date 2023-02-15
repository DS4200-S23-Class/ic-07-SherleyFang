/*
ica07
Prof. Mosca 
Modified: 02/13/2023
*/

// build the data

const data = [
  { x: 0, y: 55000 },
  { x: 1, y: 48000 },
  { x: 2, y: 27000 },
  { x: 3, y: 66000 },
  { x: 4, y: 90000 }
];

const svg = d3.select("#chart")
  .attr("width", 500)
  .attr("height", 400);

const xScale = d3.scaleLinear()
  .domain([0, d3.max(data, (d) => d.x)])
  .range([50, 450]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, (d) => d.y)])
  .range([350, 50]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);


// Add 3 for the chart
svg.append("g")
  .attr("transform", "translate(0, 350)")
  .call(xAxis);

svg.append("g")
  .attr("transform", "translate(50, 0)")
  .call(yAxis);

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d.x))
  .attr("cy", (d) => yScale(d.y))
  .attr("r", 5);


