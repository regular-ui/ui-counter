import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Digitron
 * @extends Component
 * @param {Object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.digit               => 数字
 * @param {number=1000}             options.data.duration            => 动画间隔
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
});

export default Digitron;
