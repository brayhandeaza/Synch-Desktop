import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import '../css/Charts.scss'
import axios from 'axios'
export default class Charts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            option: {}
        }
        
    }
    ChartData = (data, index) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0.00001, 'green');
        gradient.addColorStop(0.9,  'rgba(78, 248, 135, 0.001)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.001)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.002)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.004)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.006)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.007)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.008)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.005)');
        gradient.addColorStop(1,    'rgba(78, 248, 135, 0.005)');
        return {
          labels: index,
          datasets: [{
            label: 'Chart',
            data: data,
            backgroundColor: gradient,
            borderColor: '#05deb3',
            borderWidth: 1
          }]
        }
    }

    ChartOption = () => {
        let option = {
            responsive: true,
            scales: {
                xAxes: [{
                    display: false,
                }],
                yAxes: [{
                    display: false,  
                }]
            },
            tooltip: {
                mode: 'label'
            }
        }
        return option
    }
    Fetch = async () => {
        let data = [], index = [], i = 0
        await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=fb&apikey=OYCO9ZZ10MYM6E0R").then((res) => {
            let object = res.data['Time Series (Daily)']
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    data.push(object[key]['1. open'])
                    index.push(i++)
                }
            }
        })
        return {
            data,
            index
        }
    }
    componentDidMount() {
        this.Fetch().then((res) => {
            this.setState({
                data: this.ChartData(res.data, res.index),
                option: this.ChartOption()
            })
        })
    }
    render() { 
        return ( 
            <div className="Charts">
                <Line data={this.state.data} options={this.state.option}/>
            </div>
        )
    }
}