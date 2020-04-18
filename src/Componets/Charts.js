import React, { Component } from 'react'
import {Line } from 'react-chartjs-2'
import '../css/Charts.scss'

export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    fill: 'Red',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(133, 54, 54, 0.397)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
         }
    }

    
    componentDidMount() {
       
    }
    
    render() { 
        return ( 
            <div className="Charts">
                <Line data={this.state.data} width="600" height="400" options={this.state.options}/>
            </div>
        )
    }
}
 
