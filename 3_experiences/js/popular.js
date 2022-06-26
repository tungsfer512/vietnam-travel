let tabs = document.querySelectorAll('.f3_tab-tabs-item');
console.log(tabs);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab2) => {
        tab2.classList.remove('f3_tab-tabs-active');
    });
    tab.classList.add('f3_tab-tabs-active');
  });
});

