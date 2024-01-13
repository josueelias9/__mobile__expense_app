import React from 'react'
import { View, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit'

const MyPieChart = () => {
  const screenWidth = Dimensions.get('window').width
  const data = [
    {
      name: 'Sección 1',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Sección 2',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Sección 3',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Sección 4',
      population: 8538000,
      color: '#a9d4b4',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    }
  ]

  const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor='population'
        backgroundColor='transparent'
        paddingLeft='15'
      />
    </View>
  )
}

export default MyPieChart
