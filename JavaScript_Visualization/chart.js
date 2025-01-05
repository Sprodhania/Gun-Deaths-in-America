console.log(data);

// Prepare trace for the data
let trace1 = {
  x: data.map(row => row.year),
  y: data.map(row => row.count),
  type: "bar",
  marker: {
    color: data.map(row => {
      // Assign colors based on intent
      if (row.intent === "Accidental") return "blue";
      if (row.intent === "Homicide") return "red";
      if (row.intent === "Suicide") return "green";
      return "gray"; // Default color for others
    })
  },
  text: data.map(row => row.intent), // Display intent as text on hover
  hovertemplate: '%{x}: %{y} deaths<br>Intent: %{text}', // Custom hover text
  hoverinfo: 'x+y+text' // Show year, count, and intent on hover
};

// Data trace array
let chartData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Death in America by Intent",
  xaxis: {
    title: "Year"
  },
  yaxis: {
    title: "Count"
  },
  barmode: 'stack' // Stack the bars if you want to see combined counts by year
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", chartData, layout);