import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import '../css/Charts.scss'
import axios from 'axios'
import {connect} from 'react-redux';
const FinnURL = "https://finnhub.io/api/v1/quote?symbol=FB&token=bp6k727rh5rbd0i31l50"
const AlphaURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=FB&apikey=OYCO9ZZ10MYM6E0R"

class Charts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            index: [0],
            option: {}
        }
        
    }
    FetchFinn =  async () => {
        let data = [], index = [], i = 0
        await axios.get(FinnURL).then((res)=> {
            data.push(res.data)
            index.push(i++)
        })
        this.setState({
            data,
            index 
        })
    }
    FetchAlpha = async () => {
        let data = [], index = [], i = 0
        await axios.get(FinnURL).then((res) => {
            // let object = res.data['Time Series (Daily)']
            setInterval( async () => {
                let random = (Math.random() * 10).toFixed(3).toString()
           
                data.push(eval(`${res.data.c} + ${random}`))
                index.push(i++)
            }, 1000)
        })
        return {
            data,
            index
        }
    }
    ChartData = (data, index, stock = "Twitter") => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        for (let i = 0; i < 1; i++) {
            index.push([data.length + i])
        }
        // console.log(this.state.index); 
        gradient.addColorStop(0.00001, 'red');
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
            label: stock,
            data: data,
            backgroundColor: gradient,
            borderColor: '#de3105',
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
    
    componentDidMount() {
        this.FetchAlpha().then((res) => {
            setInterval(() => {
                this.setState({
                    data: this.ChartData(res.data, res.index),
                    option: this.ChartOption()
                })
                console.log(this.state);
            },3000)
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

function mapStateToProps(state) {
    return { state }
  }
export default connect(mapStateToProps)(Charts)
