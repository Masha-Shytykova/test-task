import { Benchmarks } from "./Types";

const BenchmarksData: Benchmarks[] = [
  {
    id: "Total Performance 1",
    title: "Dow Jones Industrial Average",
    allocations: [
      { value: 100, title: "Dow Jones Industrial Average", security: false },
    ],
    indices: [
      { period: "1 YR", value: "+27.71" },
      { period: "5 YR", value: "+27.71" },
      { period: "10 YR", value: "+27.71" },
    ],
  },
  {
    id: "Total Performance 2",
    title: "Private Label Domestic Growth",
    allocations: [
      { value: 20, title: "APPL", security: true },
      { value: 20, title: "CTXS", security: true },
      { value: 20, title: "DELL", security: true },
      { value: 20, title: "Dow Jones Industrial Average", security: false },
      { value: 20, title: "NASDAQ", security: false },
    ],
    indices: [
      { period: "1 YR", value: "+27.71" },
      { period: "5 YR", value: "+27.71" },
      { period: "10 YR", value: "+27.71" },
    ],
  },
  {
    id: "Total Performance 3",
    title: "Private Label Value",
    allocations: [
      { value: 10, title: "APPL", security: true },
      { value: 10, title: "CTXS", security: true },
      { value: 10, title: "DELL", security: true },
      { value: 10, title: "GOOGL", security: true },
      { value: 10, title: "IBM", security: true },
      { value: 10, title: "Dow Jones Industrial Average", security: false },
      { value: 10, title: "FTSE 100 Index", security: false },
      { value: 10, title: "FTSE 250 Index", security: false },
      { value: 20, title: "NASDAQ", security: false },
    ],
    indices: [
      { period: "1 YR", value: "+27.71" },
      { period: "5 YR", value: "+27.71" },
      { period: "10 YR", value: "+27.71" },
    ],
  },
];

export default BenchmarksData;
