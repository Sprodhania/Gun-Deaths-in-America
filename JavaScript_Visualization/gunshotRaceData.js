// Sample data representing intent per year
let gunshotRaceData = [
  {year: 2006, race: "Asian/Pacific Islander", count: 416 },
  {year: 2006, race: "Black", count: 7722 },
  {year: 2006, race: "Hispanic", count: 3255 },
  {year: 2006, race: "Native American/Native Alaskan", count: 251 },
  {year: 2006, race: "White", count: 17302 },
  {year: 2007, race: "Asian/Pacific Islander", count: 395 },
  {year: 2007, race: "Black", count: 7468 },
  {year: 2007, race: "Hispanic", count: 3262 },
  {year: 2007, race: "Native American/Native Alaskan", count: 220 },
  {year: 2007, race: "White", count: 17560 },
  {year: 2008, race: "Asian/Pacific Islander", count: 351 },
  {year: 2008, race: "Black", count: 7131 },
  {year: 2008, race: "Hispanic", count: 3068 },
  {year: 2008, race: "Native American/Native Alaskan", count: 242 },
  {year: 2008, race: "White", count: 18349 },
  {year: 2009, race: "Asian/Pacific Islander", count: 380 },
  {year: 2009, race: "Black", count: 6809 },
  {year: 2009, race: "Hispanic", count: 3012 },
  {year: 2009, race: "Native American/Native Alaskan", count: 259 },
  {year: 2009, race: "White", count: 18785 },
  {year: 2010, race: "Asian/Pacific Islander", count: 363 },
  {year: 2010, race: "Black", count: 7183 },
  {year: 2010, race: "Hispanic", count: 2873 },
  {year: 2010, race: "Native American/Native Alaskan", count: 281 },
  {year: 2010, race: "White", count: 20031 },
  {year: 2011, race: "Asian/Pacific Islander", count: 397 },
  {year: 2011, race: "Black", count: 7252 },
  {year: 2011, race: "Hispanic", count: 2797 },
  {year: 2011, race: "Native American/Native Alaskan", count: 264 },
  {year: 2011, race: "White", count: 20733 },
  {year: 2012, race: "Asian/Pacific Islander", count: 431 },
  {year: 2012, race: "Black", count: 7734 },
  {year: 2012, race: "Hispanic", count: 2914 },
  {year: 2012, race: "Native American/Native Alaskan", count: 293 },
  {year: 2012, race: "White", count: 21243 },
  {year: 2013, race: "Asian/Pacific Islander", count: 426 },
  {year: 2013, race: "Black", count: 7506 },
  {year: 2013, race: "Hispanic", count: 2813 },
  {year: 2013, race: "Native American/Native Alaskan", count: 287 },
  {year: 2013, race: "White", count: 21698 },
  {year: 2014, race: "Asian/Pacific Islander", count: 404 },
  {year: 2014, race: "Black", count: 7435 },
  {year: 2014, race: "Hispanic", count: 2876 },
  {year: 2014, race: "Native American/Native Alaskan", count: 298 },
  {year: 2014, race: "White", count: 21657 },
  {year: 2015, race: "Asian/Pacific Islander", count: 486 },
  {year: 2015, race: "Black", count: 8692 },
  {year: 2015, race: "Hispanic", count: 3203 },
  {year: 2015, race: "Native American/Native Alaskan", count: 341 },
  {year: 2015, race: "White", count: 22404 },
  {year: 2016, race: "Asian/Pacific Islander", count: 570 },
  {year: 2016, race: "Black", count: 9774 },
  {year: 2016, race: "Hispanic", count: 3632 },
  {year: 2016, race: "Native American/Native Alaskan", count: 370 },
  {year: 2016, race: "White", count: 23364 },
  {year: 2017, race: "Asian/Pacific Islander", count: 571 },
  {year: 2017, race: "Black", count: 9910 },
  {year: 2017, race: "Hispanic", count: 3727 },
  {year: 2017, race: "Native American/Native Alaskan", count: 376 },
  {year: 2017, race: "White", count: 24183 },
  {year: 2018, race: "Asian/Pacific Islander", count: 594 },
  {year: 2018, race: "Black", count: 9606 },
  {year: 2018, race: "Hispanic", count: 3843 },
  {year: 2018, race: "Native American/Native Alaskan", count: 412 },
  {year: 2018, race: "White", count: 24278 },
  {year: 2019, race: "Asian/Pacific Islander", count: 611 },
  {year: 2019, race: "Black", count: 10205 },
  {year: 2019, race: "Hispanic", count: 3874 },
  {year: 2019, race: "Native American/Native Alaskan", count: 363 },
  {year: 2019, race: "White", count: 23627 },
  {year: 2020, race: "Asian/Pacific Islander", count: 606 },
  {year: 2020, race: "Black", count: 13886 },
  {year: 2020, race: "Hispanic", count: 4804 },
  {year: 2020, race: "Native American/Native Alaskan", count: 499 },
  {year: 2020, race: "White", count: 24302 },
];

if (!gunshotRaceData || gunshotRaceData.length === 0) {
    console.error("No data available for plotting.");
} else {
    // Prepare data for plotting
    let traces = [];
    let races = [...new Set(gunshotRaceData.map(d => d.race))]; // Get unique races

    races.forEach(race => {
        let raceData = gunshotRaceData.filter(d => d.race === race); // Filter by race
        traces.push({
            x: raceData.map(d => d.year),
            y: raceData.map(d => d.count),
            name: race,
            type: 'bar',
            marker: { color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)` } // Random bar colors
        });
    });

    // Layout configuration
    let layout = {
        title: 'Gun Deaths Distribution by Race',
        barmode: 'group',
        xaxis: { title: 'Year' },
        yaxis: { title: 'Count' },
        margin: { t: 50, b: 50, l: 50, r: 50 },
    };

    // Export the plot data and layout for use in chart.js
    window.plotData1 = traces; // Export traces for use in the chart
    window.layout1 = layout; // Export layout for use in the chart
}