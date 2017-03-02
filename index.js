import Regular from 'regularjs';
// const animDirective = Regular.directive('r-animation');
// Regular.directive({
//   'r-anim2': function(node, value){
//     var animDestroy;
//     if(value && value.type==='expression'){
//       this.$watch(value, function(val){
//         if(animDestroy) animDestroy();
//         animDestroy = animDirective.link.call(this.node,val)
//       })
//     }
//     return animDirective.link.call(this,node,value)
//   }
// })

import Digitron from './src/digitron';
import Counter from './src/counter';

export { Digitron, Counter };
