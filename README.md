# 前端路由实现Demo
## DOM
```html
<view-router>
  <div component="a">
    Hello this is A
  </div>
  <div component="b">
    World this is B
  </div>
</view-router>

<router-link to="/a">go a</router-link>
<router-link to="/b">go b</router-link>
```
## configuration
```js
var router = new Router({
  routers: [
    {
      path: "/a",
      component: "a"
    },
    {
      path: "/b",
      component: "b"
    }
  ],
  mode: "history"
});
```
