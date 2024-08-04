import { BiSolidDish } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { PiHamburgerBold } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { TfiTarget } from "react-icons/tfi";

export const user = {
  id: 1,
  name: "Mohasin Attar",
  role: 1,
};

export const totalCardsInfo = [
  {
    id: 1,
    title: "Total Orders",
    count: 75,
    icon: <FaShoppingBasket />,
    countInRupees: false,
    profitPercentage: 3,
    inProfit: true,
    css: "text-blue-500 bg-blue-500/20",
  },
  {
    id: 2,
    title: "Total Delivered",
    count: 70,
    icon: <FaBagShopping />,
    countInRupees: false,
    profitPercentage: 3,
    inProfit: false,
    css: "text-green-500 bg-green-500/20",
  },
  {
    id: 3,
    title: "Total Cancelled",
    count: 5,
    icon: <FaBagShopping />,
    countInRupees: false,
    profitPercentage: 3,
    inProfit: true,
    css: "text-red-500 bg-red-500/20",
  },
  {
    id: 4,
    title: "Total Revenue",
    count: 120000,
    icon: <RiMoneyRupeeCircleFill />,
    countInRupees: true,
    profitPercentage: 3,
    inProfit: true,
    css: "text-pink-500 bg-pink-500/20",
  },
];

export const recentOrders = [
  {
    id: 1,
    customerName: "Virat K",
    orderNo: 14625478,
    amount: 564,
    status: 1,
  },
  {
    id: 2,
    customerName: "Rahul K",
    orderNo: 83415269,
    amount: 1500,
    status: 2,
  },
  {
    id: 3,
    customerName: "Mahendra D",
    orderNo: 54127896,
    amount: 555,
    status: 3,
  },
  {
    id: 4,
    customerName: "Rohit S",
    orderNo: 31792405,
    amount: 632,
    status: 1,
  },
  {
    id: 5,
    customerName: "Ravi J",
    orderNo: 63790415,
    amount: 745,
    status: 1,
  },
  {
    id: 6,
    customerName: "Karan M",
    orderNo: 70249614,
    amount: 465,
    status: 1,
  },
  {
    id: 7,
    customerName: "Sanju S",
    orderNo: 25415789,
    amount: 921,
    status: 1,
  },
  {
    id: 8,
    customerName: "Shivam D",
    orderNo: 11254586,
    amount: 547,
    status: 1,
  },
  {
    id: 9,
    customerName: "Rahul D",
    orderNo: 52448776,
    amount: 1002,
    status: 1,
  },
];

export const customerFeedback = [
  {
    id: 1,
    customerName: "Shubhman G",
    rating: 4,
    feedback:
      "The pizza was loaded with toppings and had a perfect crust. The cheesy goodness was irresistible. Highly recommend!",
  },
  {
    id: 2,
    customerName: "Hardik P",
    rating: 3,
    feedback:
      "The pasta was cooked to perfection, with a rich and creamy sauce. The garlic bread was a delightful addition. Excellent meal overall!",
  },
  {
    id: 3,
    customerName: "Axar P",
    rating: 2,
    feedback:
      "The sushi tasted far from fresh, and the rice was undercooked. Presentation was lackluster. Not worth the price.",
  },
  {
    id: 4,
    customerName: "Rishabh P",
    rating: 3,
    feedback:
      "The tacos were bland and lacked seasoning. The shells were soggy, and the fillings were minimal. Not satisfying at all.",
  },
  {
    id: 5,
    customerName: "Surya Y",
    rating: 4,
    feedback:
      "Fresh, delicious sushi with a great variety of options. The presentation was stunning, and the taste was even better.",
  },
];

export const popularList = [
  {
    id: 1,
    title: "Goals",
    icon: <TfiTarget />,
    css: "text-orange-500 bg-orange-500/20",
  },
  {
    id: 2,
    title: "Popular Dishes",
    icon: <PiHamburgerBold />,
    css: "text-blue-500 bg-blue-500/20",
  },
  {
    id: 3,
    title: "Menus",
    icon: <BiSolidDish />,
    css: "text-green-500 bg-green-500/20",
  },
];

export const barChartData = {
  monthly: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Monthly",
        data: [47, 60, 89, 76, 52, 45, 80, 55, 37, 98, 12, 47],
        backgroundColor: "rgba(75, 192, 137, 0.2)",
        borderColor: "rgba(75, 192, 137, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
  weekly: {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
      "Week 11",
      "Week 12",
    ],
    datasets: [
      {
        label: "Weekly",
        data: [33, 55, 65, 39, 84, 66, 77, 60, 89, 76, 52, 45],
        backgroundColor: "rgba(75, 192, 137, 0.2)",
        borderColor: "rgba(75, 192, 137, 1)",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
};

export const barChartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          return value + "k";
        },
      },
    },
  },
};
