function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length +1} in line.`
}
