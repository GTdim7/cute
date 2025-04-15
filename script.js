// 为兴趣列表添加鼠标悬停效果
const interestsList = document.querySelectorAll('.interests ul li');
interestsList.forEach((li) => {
  li.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#f0f0f0';
  });
  li.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'transparent';
  });
});
