## 示例
### 基本形式

<div class="m-example"></div>

```xml
<p><counter duration={duration} /></p>
<p><counter duration={duration} animation="scroll" /></p>
<p><counter duration={duration} animation="flip" /></p>
<p><counter duration={duration} animation="flipHalf" /></p>
```

### 缓动

<div class="m-example"></div>

```xml
<p><counter duration={duration} on-tick={this._onTick($event)} /></p>
<p><counter duration={duration} animation="scroll" on-tick={this._onTick($event)} /></p>
<p><counter duration={duration} animation="flip" on-tick={this._onTick($event)} /></p>
<p><counter duration={duration} animation="flipHalf" on-tick={this._onTick($event)} /></p>
```

```javascript
let component = new RGUI.Component({
    template,
    config() {
        this.data.duration = 20;
    },
    _onTick($event) {
        const $counter = $event.sender;
        const number = $event.number/10;
        $counter.data.duration = Math.pow(1.8, number) + 19;
    },
});
```
