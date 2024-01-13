import React from 'react'
import { View, Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const MyBarChart = () => {
  const screenWidth = Dimensions.get('window').width
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  }

  const chartConfig = {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    barPercentage: 0.5
  }

  return (
    <View>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel='$'
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  )
}

export default MyBarChart
