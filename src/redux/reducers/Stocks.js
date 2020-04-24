let inicialState = {
    isStocks: false,
    isCharts: false,
    isNews: false,
    isCalculator: false,
}

module.exports = (state = inicialState, actions) => {
    switch (actions.type) {
        case "isStocks":
            return Object.assign({}, state, {window: 'Stocks', isStocks: true})
        case "isCharts":
            return Object.assign({}, state, {window: 'Charts', isCharts: true})
        case "isNews":
            return Object.assign({}, state, {window: 'News', isCharts: true})
        case "isCalculator":
            return Object.assign({}, state, {window: 'Calculator', isCharts: true})
        default:
            return Object.assign({}, state, {window: 'Stocks', isStocks: true})
    }
}