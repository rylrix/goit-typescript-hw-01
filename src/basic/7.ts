// У вас є два об'єкти:
interface Details {
  createAt: Date;
  updateAt: Date;
}
interface NewType {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: Details;
}
const page1: NewType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: NewType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

// Створіть новий тип даних, який підходить для цих двох об'єктів.
