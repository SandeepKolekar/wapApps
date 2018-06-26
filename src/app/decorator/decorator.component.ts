import { Component, OnInit } from '@angular/core';

function memberLog(target , name , descriptor) {
  console.log(target , name , descriptor);
  const  original = descriptor.value;
  descriptor.value =  function(...args){
    console.log('This function was hacked!');
    console.log('Arguments-'+ args + ' were passed in this function');
    const result = original.apply(this, args);
    console.log('the result of this function '+ result );
    return result;
  }
  return descriptor;
}

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.less']
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   console.log('constructor result = ' +  this.sampleMethod(5));
  }

  @memberLog
  sampleMethod(a){
    return a*a ;
  }
}
