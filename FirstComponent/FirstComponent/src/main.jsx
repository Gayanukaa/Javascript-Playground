import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../component/Card';
const App = () => {
  const cards = [
    {
      title: "Expense",
      description:
        "Streamline your expense management. Track / approve employee expenses.",
      image: "https://zeta.in/assets/img/expense-management.svg",
    },
    {
      title: "Digital Wallet",
      description:
        "Go cashless! Pay bills, transfer money to anyone, avail offers & much more..",
      image: "https://zeta.in/assets/img/digital-wallet.svg",
    },
    {
      title: "Benefits",
      description:
        "Finally, a way to claim tax benefits that your employees will love.",
      image: "https://zeta.in/assets/img/tax-benefits.svg",
    },
    {
      title: "Rewards",
      description:
        "Celebrate the moments in your employee's lives with Zeta's gift cards.",
      image: "https://zeta.in/assets/img/gift-cards.svg",
    },
  ];

  return (
    <div className="app">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));