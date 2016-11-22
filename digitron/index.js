import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Digitron
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.digit              <=> 数字
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Digitron = Component.extend({
    name: 'digitron',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            digit: 0,
            radix: 10, // 暂不支持十六进制
            _direction: 'Up',
            duration: 1000,
            animation: '',
            ANIMATIONS: {
                scrollUp: 'on: enter; class: a-scrollUpIn; on: leave; class: a-scrollUpOut;',
                scrollDown: 'on: enter; class: a-scrollDownIn; on: leave; class: a-scrollDownOut;',
                flipUp: 'on: enter; class: a-flipUpIn; on: leave; class: a-flipUpOut;',
                flipDown: 'on: enter; class: a-flipDownIn; on: leave; class: a-flipDownOut;',
                flipHalfUp: 'on: enter; class: z-front a-flipUpIn; on: leave; class: a-wait;',
                flipHalfDown: 'on: enter; class: z-front a-flipDownIn; on: leave; class: a-wait;',
            },
            HELPER_ANIMATIONS: {
                flipHalfUp: 'on: enter; class: a-wait; on: leave; class: z-front a-flipUpOut;',
                flipHalfDown: 'on: enter; class: a-wait; on: leave; class: z-front a-flipDownOut;',
            },
        });
        this.supr();
    },
    increase() {
        this.data._direction = 'Up';
        if (++this.data.digit === this.data.radix) {
            this.data.digit = 0;

            this.$emit('carry', {
                sender: this,
                digit: this.data.digit,
            });
        }

        this.$emit('increase', {
            sender: this,
            digit: this.data.digit,
        });
    },
    decrease() {
        this.data._direction = 'Down';
        if (this.data.digit-- === 0) {
            this.data.digit = this.data.radix - 1;

            this.$emit('borrow', {
                sender: this,
                digit: this.data.digit,
            });
        }

        this.$emit('decrease', {
            sender: this,
            digit: this.data.digit,
        });
    },
    /**
     * @method toggle(open) 展开/收起
     * @public
     * @param  {boolean} open 展开/收起状态。如果无此参数，则在两种状态之间切换。
     * @return {void}
     */
});

export default Digitron;
