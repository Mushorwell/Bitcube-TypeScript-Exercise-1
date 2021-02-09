import { Validate } from './validate';
import * as Helpers from './utility';

// add click handler to the start game button
document.getElementById('register')!.addEventListener('click', () => {
  Validate();
});

document.getElementById('run_array_methods')!.addEventListener('click', () => {
      let numbers:number[] = [89,5,56,102,7];
      let numbersBiggerThan50:number[] = numbers.filter((element, index)=>(element>50));
      console.log(numbersBiggerThan50);
      let names:string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
      let newNames:string[] =  names.splice(2, 2, "Cindy","Zoe");
      console.log(names);
      let otherNames:string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
      let otherDel:string[] =  otherNames.splice(3, 1);
      console.log(otherNames);
      let x:number[] = [89,5,56,102,7];
      x.pop();
      console.log(x);
      let y:number[] = [89,5,56,102,7];
      y.push(78);
      console.log(y);
      let z:number[] = [89,5,56,102,7];
      let index5 = z.indexOf(5);
      console.log(index5);
      let a:string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
      let b:string[] = a.slice(1,3);
      console.log(b);
      let c:number[] = [89,5,56,102,7];
      c.unshift(14,67);
      console.log(c);
      let d:number[] = [1,2,3];
      let e:string[] = ['a','b','c'];
      console.log(d.concat(e));
    }
);
