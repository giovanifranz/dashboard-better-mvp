import type ApexTypes from 'react-apexcharts/types/react-apexcharts'
import dynamic from 'next/dynamic'
const ApexChar = dynamic<ApexTypes['props']>(() => import('react-apexcharts'), {
  ssr: false,
})

import { options } from '.'

interface Props {
  series: ApexTypes['props']['series']
}

function Chart({ series }: Props) {
  return <ApexChar options={options} series={series} type="area" height={160} />
}

export { Chart }
export type { Props as ChartProps }
