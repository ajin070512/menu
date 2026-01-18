let data = [
  {
    title: '新建',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/new.png',
    children: [
      {
        title: '文件',
        icon: 'https://style.youkeda.com/img/pizza/context-menu/new_file.png'
      },
      {
        title: '文件夹',
        icon: 'https://style.youkeda.com/img/pizza/context-menu/new_folder.png'
      }
    ]
  },
  {
    title: '导入',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/import.png'
  },
  {
    title: '重命名',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/rename.png'
  },
  {
    title: '删除',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/delete.png'
  }
];

// 先用函数表达出代码模板，注意代码中反引号和美元的用法
function creatItem(item){
  const newDom = document.createElement('li');
  newDom.innerHTML=`
  <div class='left'>
      <img class="icon" 
      src="${item.icon}"/>
      <span>
        ${item.title}
      </span>

  </div>
  ${item.children&&item.children.length>0?
    `<img class='more' src='https://style.youkeda.com/img/pizza/context-menu/more.png' />`:''
  }
  `;
  return newDom;//注意返回得到的代码块
}

const firstMenuBox = document.querySelector('.first');
const secondMenuBox = document.querySelector('.second');

firstMenuBox.innerHTML='';
secondMenuBox.innerHTML='';

for(let i = 0;i<data.length;i++){
  const li = creatItem(data[i]);
  firstMenuBox.appendChild(li);
  li.addEventListener('mouseover',function(){
    if(data[i].children&&data[i].children.length>0){
      secondMenuBox.innerHTML='';
      secondMenuBox.style.display='block';
      for(let j = 0;j<data[i].children.length;j++){
        const newLi = creatItem(data[i].children[j]);
        secondMenuBox.appendChild(newLi);
  
      }
    }else{
      secondMenuBox.style.display='none';
    } 
  });
  }

  const input = document.querySelector('input');
  input.addEventListener('input',function(){
    console.log(this.value.length);
    });

    window.addEventListener('scroll',function(){
      console.log(this.scrollY);
    });

    //you can get the content height you need through "clientHeight";and the broswer height you need through "screen.height"
    