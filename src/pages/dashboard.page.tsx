import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Chart, Layout } from "../components";

const series = [
  {
    name: "series 1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

export default function Dashboard() {
  return (
    <Box>
      <Layout>
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart series={series} />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart series={series} />
          </Box>
        </SimpleGrid>
      </Layout>
    </Box>
  );
}
