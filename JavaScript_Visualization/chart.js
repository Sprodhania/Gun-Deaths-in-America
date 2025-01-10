console.log(gunshotRaceData); // Log the race data for debugging

if (!gunshotRaceData || gunshotRaceData.length === 0) {
    console.error("No data available for plotting.");
} else {
    // Prepare trace for the first chart (deaths by intent)
    let trace1 = {
        x: gunshotIntentData.map(row => row.year),
        y: gunshotIntentData.map(row => row.count),
        type: "bar",
        marker: {
            color: gunshotIntentData.map(row => {
                if (row.intent === "Accidental") return "blue";
                if (row.intent === "Homicide") return "red";
                if (row.intent === "Suicide") return "green";
                return "gray"; // Default color for others
            })
        },
        text: gunshotIntentData.map(row => row.intent), // Display intent as text on hover
        hovertemplate: '%{x}: %{y} deaths<br>Intent: %{text}', // Custom hover text
        hoverinfo: 'x+y+text' // Show year, count, and intent on hover
    };

    // Data trace array for the first chart
    let chartData1 = [trace1];

    // Layout for the first chart
    let layout1 = {
        title: "Deaths in America by Intent",
        xaxis: { title: "Year" },
        yaxis: { title: "Count" },
        barmode: 'stack' // Stack the bars
    };

    // Render the first plot
    Plotly.newPlot("plot1", chartData1, layout1);

    // Aggregating gunshotRaceData by year for each race
    const aggregatedData = {};
    gunshotRaceData.forEach(row => {
        if (!aggregatedData[row.race]) {
            aggregatedData[row.race] = Array(15).fill(0); // 15 years from 2006 to 2020
        }
        const yearIndex = row.year - 2006; // Index for the year
        aggregatedData[row.race][yearIndex] += row.count;
    });

    // Calculate the "All Races" data (sum of counts across all races for each year)
    const allRacesData = Array(15).fill(0);
    Object.values(aggregatedData).forEach(raceData => {
        raceData.forEach((count, index) => {
            allRacesData[index] += count; // Sum counts for all races
        });
    });

    // Prepare trace for the second chart (deaths by race)
    let trace2 = {
        x: Array.from({ length: 15 }, (_, i) => 2006 + i), // Year from 2006 to 2020
        y: aggregatedData["White"], // Default to showing "White" race data
        type: "bar",
        marker: { color: 'orange' }, // Default color for White
        text: Array.from({ length: 15 }, () => "White"), // Set text for hover
        hovertemplate: '%{x}: %{y} deaths<br>Race: %{text}', // Adjusted hover text
        hoverinfo: 'x+y+text'
    };

    // Data trace array for the second chart
    let chartData2 = [trace2];

    // Layout for the second chart
    let layout2 = {
        title: "Deaths in America by Race",
        xaxis: { title: "Year" },
        yaxis: { title: "Count" },
        updatemenus: [
            {
                buttons: [
                    {
                        method: 'restyle',
                        args: [
                            {
                                y: [aggregatedData["Asian/Pacific Islander"]],
                                'marker.color': ['blue'],
                                'text': Array.from({ length: 15 }, () => "Asian/Pacific Islander"),
                                'hovertemplate': '%{x}: %{y} deaths<br>Race: Asian/Pacific Islander' // Update hover template
                            }
                        ],
                        label: "Asian/Pacific Islander"
                    },
                    {
                        method: 'restyle',
                        args: [
                            {
                                y: [aggregatedData["Black"]],
                                'marker.color': ['red'],
                                'text': Array.from({ length: 15 }, () => "Black"),
                                'hovertemplate': '%{x}: %{y} deaths<br>Race: Black' // Update hover template
                            }
                        ],
                        label: "Black"
                    },
                    {
                        method: 'restyle',
                        args: [
                            {
                                y: [aggregatedData["Hispanic"]],
                                'marker.color': ['green'],
                                'text': Array.from({ length: 15 }, () => "Hispanic"),
                                'hovertemplate': '%{x}: %{y} deaths<br>Race: Hispanic' // Update hover template
                            }
                        ],
                        label: "Hispanic"
                    },
                    {
                        method: 'restyle',
                        args: [
                            {
                                y: [aggregatedData["White"]],
                                'marker.color': ['orange'],
                                'text': Array.from({ length: 15 }, () => "White"),
                                'hovertemplate': '%{x}: %{y} deaths<br>Race: White' // Update hover template
                            }
                        ],
                        label: "White"
                    },
                    {
                        method: 'restyle',
                        args: [
                            {
                                y: [aggregatedData["Native American/Native Alaskan"]],
                                'marker.color': ['purple'],
                                'text': Array.from({ length: 15 }, () => "Native American/Native Alaskan"),
                                'hovertemplate': '%{x}: %{y} deaths<br>Race: Native American/Native Alaskan' // Update hover template
                            }
                        ],
                        label: "Native American/Native Alaskan"
                    },
                    {
                        method: 'restyle',
                        args: [
                            {
                                y: [allRacesData],
                                'marker.color': ['gray'],
                                'text': Array.from({ length: 15 }, () => "All Races"),
                                'hovertemplate': '%{x}: %{y} deaths<br>Race: All Races' // Update hover template
                            }
                        ],
                        label: "All Races"
                    }
                ]
            }
        ]
    };

    // Render the second plot
    Plotly.newPlot("plot2", chartData2, layout2);
}