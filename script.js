


async function getMenu() {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();

    const menu = document.getElementById('menu');
    data.forEach(burger => {
      const burgerEl = document.createElement('div');
      burgerEl.innerHTML = `${burger.name} - $${burger.price}`;
      menu.appendChild(burgerEl);
    });
  }
  
  
  async function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = [];
        const menu = document.getElementById('menu').children;
        for (let i = 0; i < 3; i++) {
          const burgerIndex = Math.floor(Math.random() * menu.length);
          burgers.push(menu[burgerIndex].innerText.split(' - ')[0]);
        }
        resolve(burgers);
      }, 2500);
    });
  }
  
  async function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }

  async function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  async function restaurantProcess() {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const orderStatus = await orderPrep();
    console.log('Order status:', orderStatus);
    const paymentStatus = await payOrder();
    console.log('Payment status:', paymentStatus);
    thankyouFnc();
  }
  
  restaurantProcess();