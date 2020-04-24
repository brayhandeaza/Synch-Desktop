import React, { Component } from 'react'
import {Line, defaults} from 'react-chartjs-2'
import Chart from 'chart.js'
import '../css/Charts.scss'
import axios from 'axios'
import {connect} from 'react-redux';
import { labels } from "../constants/Charts/Labels";

// const AlphaURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"
const AlphaURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"

class Charts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            index: [0],
            option: {},
            conanyName: "",
            cavasSize: 0
        }
    }
    
    FetchAlpha =  async () => {
        const index = labels
        const data = []
        
        await axios.get(AlphaURL).then( async (res)=> {
            let object = res.data["Time Series (5min)"]
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    data.push(object[key]['1. open'])
                }
            }
        })
        
        let last = data.slice(0,85)
        return {
            colors: this.handleChartColor(Math.min(...last),parseFloat(last.slice(-1)[0])),
            data: last,
            index
        }
    }    
    handleChartColor = (min,last) => {
     if (last > min || last !== min) {
        return true

        } else {
        console.log(min, last);
        return false
     }
    }

    UpdateChart = () => {
        let i = 0;
        this.FetchAlpha().then((res) => {
            this.handleChart(res.data.slice(0), res.index, res.colors)
                // console.log(res.data);  
        })
    }

    handleChart = (data, index, colors) => {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        const header =  document.querySelector('.Menus')
        
        gradient.addColorStop(0.1,  colors ? 'rgba(78, 248, 135, 0.3)' : 'rgba(211, 120, 120, 0.5)');
        gradient.addColorStop(1,   colors ? 'rgba(78, 248, 135, 0)' : 'rgba(211, 120, 120, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: index,
                datasets: [{
                    data: data,
                    backgroundColor: gradient,
                    borderColor: colors ? 'green' : 'red',
                    borderWidth: 1,
                }],
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{ 
                        ticks: {
                            fontSize: 10,
                        },                   
                        gridLines: {
                            display: false
                        },
                        position: 'right',
                    }],
                    xAxes: [{
                        // position: "top",
                        ticks: {
                            padding: 30,
                            autoSkip: false,
                            maxRotation: 0,
                            minRotation: 0,
                            fontSize: 10,
                            callback: (dta, idx) => {
                                return idx % 6 == 0 && idx !== 0 && idx !== 84 ? dta : ''
                            }
                        },
                        gridLines: {
                            display: false, 
                        }
                    }]
                }
            }
        })
    }


    componentDidMount() {  
        this.UpdateChart()   
        this.handleChart()
    }

    render() { 
        return ( 
            <div className="Charts">
                <canvas id="canvas" width={window.innerWidth - 10}></canvas>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
  }
export default connect(mapStateToProps)(Charts)
