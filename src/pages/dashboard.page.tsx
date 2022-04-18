import { useEffect, useState } from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import { Chart, Layout } from '../components'

const series = [
  {
    name: 'series 1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
]

export default function Dashboard() {
  const [chartState, setChartState] = useState<boolean>(false)

  useEffect(() => {
    setChartState(true)
  }, [])

  return (
    <Layout>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
        <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
          <Text fontSize="lg" mb="4">
            Inscritos da Semana
          </Text>
          {chartState && <Chart series={series} />}
        </Box>
        <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
          <Text fontSize="lg" mb="4">
            Taxa de Abertura
          </Text>
          {chartState && <Chart series={series} />}
        </Box>
      </SimpleGrid>
    </Layout>
  )
}
