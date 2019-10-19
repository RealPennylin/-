2019.10.13
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
    
            
            
2019.10.29：
        mustache 语法：可直接写变量和简单的表达式。
        v-pre : <h2 v-pre>{}}</h2>  不与mustache中的大括号冲突，完全将语句显示出来。
        v-text:  功能用法==<h2 v-text="message"></h2>  会覆盖，少用。
        v-once:  <h2 v-once>  只渲染一次，并且不会随着数据的改变而改变
        v-html:  
       
        
