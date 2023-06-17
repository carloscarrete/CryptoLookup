import moment from "moment";

export const options = {
    responsive: false,
    maintainAspectRatio: false
}


export const getData = (coinChart, currentCrypto ) => {
    return {
        labels: coinChart.map((value) => moment(value.x).format('MMMDD')),
        datasets: [
            {
                data: coinChart.map((value) => value.y),
                label: currentCrypto.id.toUpperCase(),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    }
}