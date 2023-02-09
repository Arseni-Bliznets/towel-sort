module.exports = function towelSort (matrix = []) {
  let result = [];
  if (matrix.length === 0){
    return matrix
  }
  else {
  for (let i  =  0; i < matrix.length; i++){
    if(i == 1 || i == 3){
      result += matrix[i].reverse() + ','
    } else {
    result += matrix[i] + ','}
  }
  return result.split(',').slice(0, -1);
} 
}
