function twoSum(numbers, target) {
  
  const map = new Map();
  for (let i=0; i<numbers.length; i++){
   if (map.has(target-numbers[i])) {
     return [map.get(target-numbers[i]), i];
     
   }else{
   map.set(numbers[i], i);
   }
  }
}
