export interface Allocation {
  value: number;
  title: string;
  security: boolean;
}

export interface Index {
  period: string;
  value: string;
}

export interface Benchmarks {
  id: string;
  title: string;
  allocations: Allocation[];
  indices: Index[];
}
