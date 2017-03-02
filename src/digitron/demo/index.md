## 示例
### 基本形式

<div class="m-example"></div>

```xml
<digitron digit={digit} />
```

```javascript
let component = new RGUI.Component({
    template,
    config() {
        this.defaults({
            digit: 0,
        });
        setInterval(() => {
            this.data.digit = (this.data.digit + 1)%10;
            this.$update();
        }, 1000);
    },
});
```

### 动画

<div class="m-example"></div>

```xml
<digitron digit={digit} animation="scroll" />
<digitron digit={digit} animation="flip" />
```

```javascript
let component = new RGUI.Component({
    template,
    config() {
        this.defaults({
            digit: 0,
        });
        setInterval(() => {
            this.data.digit = (this.data.digit + 1)%10;
            this.$update();
        }, 1000);
    },
});
```
