// Sample data representing intent per year
let data = [
  { year: 2006, intent: "Accidental", count: 606 },
  { year: 2006, intent: "Homicide", count: 12082 },
  { year: 2006, intent: "Suicide", count: 16049 },
  { year: 2006, intent: "Undetermined", count: 209 },
  { year: 2007, intent: "Accidental", count: 571 },
  { year: 2007, intent: "Homicide", count: 11691 },
  { year: 2007, intent: "Suicide", count: 16384 },
  { year: 2007, intent: "Undetermined", count: 259 },
  {year: 2008, intent: "Accidental", count: 536 },
  {year: 2008, intent: "Homicide", count: 11176 },
  {year: 2008, intent: "Suicide", count: 17177 },
  {year: 2008, intent: "Undetermined", count: 252 },
  {year: 2009, intent: "Accidental", count: 514 },
  {year: 2009, intent: "Homicide", count: 10793 },
  {year: 2009, intent: "Suicide", count: 17723 },
  {year: 2009, intent: "Undetermined", count: 215 },
  {year: 2010, intent: "Accidental", count: 583 },
  {year: 2010, intent: "Homicide", count: 10858 },
  {year: 2010, intent: "Suicide", count: 19047 },
  {year: 2010, intent: "Undetermined", count: 243 },
  {year: 2011, intent: "Accidental", count: 578 },
  {year: 2011, intent: "Homicide", count: 10911 },
  {year: 2011, intent: "Suicide", count: 19710 },
  {year: 2011, intent: "Undetermined", count: 244 },
  {year: 2012, intent: "Accidental", count: 533 },
  {year: 2012, intent: "Homicide", count: 11467 },
  {year: 2012, intent: "Suicide", count: 20360 },
  {year: 2012, intent: "Undetermined", count: 255 },
  {year: 2013, intent: "Accidental", count: 490 },
  {year: 2013, intent: "Homicide", count: 11073 },
  {year: 2013, intent: "Suicide", count: 20892 },
  {year: 2013, intent: "Undetermined", count: 275 },
  {year: 2014, intent: "Accidental", count: 575 },
  {year: 2014, intent: "Homicide", count: 10789 },
  {year: 2014, intent: "Suicide", count: 21039 },
  {year: 2014, intent: "Undetermined", count: 267 },
  {year: 2015, intent: "Accidental", count: 482 },
  {year: 2015, intent: "Homicide", count: 12784 },
  {year: 2015, intent: "Suicide", count: 21587 },
  {year: 2015, intent: "Undetermined", count: 273 },
  {year: 2016, intent: "Accidental", count: 489 },
  {year: 2016, intent: "Homicide", count: 14248 },
  {year: 2016, intent: "Suicide", count: 22680 },
  {year: 2016, intent: "Undetermined", count: 293 },
  {year: 2017, intent: "Accidental", count: 482 },
  {year: 2017, intent: "Homicide", count: 14388 },
  {year: 2017, intent: "Suicide", count: 23566 },
  {year: 2017, intent: "Undetermined", count: 331 },
  {year: 2018, intent: "Accidental", count: 453 },
  {year: 2018, intent: "Homicide", count: 13813 },
  {year: 2018, intent: "Suicide", count: 24119 },
  {year: 2018, intent: "Undetermined", count: 348 },
  {year: 2019, intent: "Accidental", count: 476 },
  {year: 2019, intent: "Homicide", count: 14238 },
  {year: 2019, intent: "Suicide", count: 23625 },
  {year: 2019, intent: "Undetermined", count: 341 },
  {year: 2020, intent: "Accidental", count: 529 },
  {year: 2020, intent: "Homicide", count: 19173 },
  {year: 2020, intent: "Suicide", count: 24001 },
  {year: 2020, intent: "Undetermined", count: 394 }
];

// Extract unique years and intents
let years = [...new Set(data.map(d => d.year))];
let intents = [...new Set(data.map(d => d.intent))];

// Prepare data for the chart.js plot
let plotData = intents.map(intent => {
  return {
    x: years,
    y: years.map(year => {
      let record = data.find(d => d.year === year && d.intent === intent);
      return record ? record.count : 0;  // Return 0 if no record is found
    }),
    type: 'scatter',
    mode: 'lines+markers',
    name: intent
  };
});

// Export the plot data for use in chart.js
window.plotData = plotData;