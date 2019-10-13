vue 响应式：
<div id="app">
        <p>{{message}}
          {{name}}</p>
    </div>
    <script>
        const app=new Vue({
            el:'#app',                         //el属性决定了这个vue对象挂载到哪一个元素，这里是id为app元素上
            data:{                            //该属性存储数据，可以是自定义也可来自网络从服务器加载的。
                message:'nice to meet u',
                name:'000'
            }
        })
    </script>
    
 浏览器执行到第5行时显示出对应的HTML，执行到7行代码时创建vue实例，并且对原html进行解析和修改。
    
    事件：  v-on ：click="";          语法糖：@click   坑！！！！？
            v-for="item in movies"   遍历
    
