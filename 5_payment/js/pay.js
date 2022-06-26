let upgradeDrops = document.querySelectorAll('.upgrade-content-item-plus-display span:last-of-type');
upgradeDrops.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    let target = e.target;
    let targetContent = target.parentElement.nextElementSibling;
    if (targetContent.style.display === 'flex') {
      targetContent.style.display = 'none';
    } else {
      targetContent.style.display = 'flex';
    }
  });
});

let couponTrigger = document.querySelector('.coupon-discount>span>span:last-child');
couponTrigger.addEventListener('click', (e) => {
  let couponDrop = e.target.parentElement.parentElement.nextElementSibling;
  if (couponDrop.style.display === 'block') {
    couponDrop.style.display = 'none';
  } else {
    couponDrop.style.display = 'block';
  }
});

let payInfos = document.querySelector('.pay-info .content-left-heading>span:last-child');
payInfos.addEventListener('click', (e) => {
  let target = e.target.parentElement.nextElementSibling;
  console.log(target);
  if (target.style.display === 'block') {
    target.style.setProperty('display', 'none', 'important');
  } else {
    target.style.setProperty('display', 'block', 'important');
  }
});

let radios = document.querySelectorAll('.content-left-content-radio-item .content-left-content-radio-item-text>span:first-child');

radios.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('checked')) {
      radios.forEach((item2) => {
        if (item2.classList.contains('checked')) {
          item2.classList.remove('checked');
        }
      });
      e.target.classList.add('checked');
    }
  });
});