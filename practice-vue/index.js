const app1 = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
})



const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `이 페이지는 ${new Date()} 에 로드 되었습니다.`
  }
})



const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})



const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'Learn Javascript'
      },
      {
        text: 'Learn Python'
      },
      {
        text: 'Learn R'
      }
    ]
  }
})


const app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요 Vue.js'
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
})