import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Counter
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='Hello World'}    options.data.message            <=> 消息
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Counter = Component.extend({
    name: 'counter',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            length: 3,
            number: 0,
            // start: 0,
            end: 100,
            autoStart: true,
            duration: 200,
            animation: '',
            _digits: [],
        });
        this.supr();
        this.watch();
    },
    watch() {
        this.$watch('number', (number) => {
            const length = this.data.length;
            this.data._digits = String(number).slice(-length).padStart(length, '0').split('').map((digit) => +digit);

            this.$emit('change', {
                sender: this,
                number,
            });
        });
    },
    init() {
        this.supr();
        this.data.autoStart && this.start();
    },
    destroy() {
        clearInterval(this.interval);
        this.supr();
    },
    start() {
        this.interval = setInterval(() => {
            if (this.data.number === this.data.end)
                return clearInterval(this.interval);

            this.data.number++;
            this.$emit('tick', {
                sender: this,
                number: this.data.number,
            });
            this.$update();
        }, this.data.duration);
    },
    reset() {
        this.data.number = this.data.start;
    },
});

export default Counter;
