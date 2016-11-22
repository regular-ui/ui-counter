## 示例
### 基本形式

<div class="m-example"></div>

```xml
<counter duration={duration} />
<counter duration={duration} animation="scroll" />
<counter duration={duration} animation="flip" />
<counter duration={duration} animation="flipHalf" />
```

### 缓动

<div class="m-example"></div>

```xml
<counter duration={duration} on-tick={this._onTick($event)} />
<counter duration={duration} animation="scroll" on-tick={this._onTick($event)} />
<counter duration={duration} animation="flip" on-tick={this._onTick($event)} />
<counter duration={duration} animation="flipHalf" on-tick={this._onTick($event)} />
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
