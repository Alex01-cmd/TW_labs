interface Person {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
  }

  interface Employee extends Person {
    employeeId: string;
    department: string;
  }

  const employee: Employee = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: "123 Main St",
    phone: "555-1234",
    employeeId: "E123",
    department: "IT",
  };
  