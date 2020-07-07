import React, { useContext } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';

export default function Graphs() {
    const { globalStatsSummary, selectedCountry } = useContext(GlobalContext);

    const countryData = selectedCountry ? selectedCountry : globalStatsSummary;

    const dataBar = {
        labels: ['Active', 'Recovered', 'Fatal', 'Critical'],
        datasets: [
            {
                label: 'Cases',
                backgroundColor: ['rgba(236,147,47,1)', 'rgba(113,179,124,1)', 'rgba(135,135,135,1)', 'rgba(255,99,132,1)'],
                borderColor: ['rgba(236,147,47,1)', 'rgba(113,179,124,1)', 'rgba(135,135,135,1)', 'rgba(255,99,132,1)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(236,147,47,0.8)', 'rgba(113,179,124,0.8)', 'rgba(135,135,135,0.8)', 'rgba(255,99,132,0.8)'],
                hoverBorderColor: ['rgba(236,147,47,0.8)', 'rgba(113,179,124,0.8)', 'rgba(135,135,135,0.8)', 'rgba(255,99,132,0.8)'],
                data: [countryData.active, countryData.recovered, countryData.deaths, countryData.critical]
            }
        ]
    };

    const dataDoughnut = {
        labels: ['New', 'Recovered', 'Fatal'],
        datasets: [{
            data: [countryData.todayCases, countryData.todayRecovered, countryData.todayDeaths],
            backgroundColor: ['rgba(236,147,47,1)', 'rgba(113,179,124,1)', 'rgba(135,135,135,1)'],
            hoverBackgroundColor: ['rgba(236,147,47,0.8)', 'rgba(113,179,124,0.8)', 'rgba(135,135,135,0.8)'],
        }]
    };

    return (
        <div style={{ width: '75vw', height: '70vh', padding: '0', backgroundColor: '#f7f7f7' }}>
            <div style={{ height: '20px', backgroundColor: '#f7f7f7' }} />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Bar
                        data={dataBar}
                        height={400}
                        options={{
                            legend: { display: false },
                            title: { display: true, text: 'From the start', fontSize: '22' },
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        callback: function (value, index, values) {
                                            return value.toLocaleString();
                                        }
                                    }
                                }]
                            },
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItem, data) {
                                        var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                        return parseInt(tooltipValue).toLocaleString();
                                    }
                                }
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Doughnut
                        data={dataDoughnut}
                        options={{
                            legend: { display: true, position: 'bottom' },
                            title: { display: true, text: 'Last 24 hours', fontSize: '22' },
                            maintainAspectRatio: false,
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItem, data) {
                                        var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                        return data.labels[tooltipItem.index] + ': ' + parseInt(tooltipValue).toLocaleString();
                                    }
                                }
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}