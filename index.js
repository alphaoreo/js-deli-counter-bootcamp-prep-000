function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length +1} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return line.shift()

  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty"
  }
  else{
    var people = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      people = people + `${i+1}. ${line[i]}`
      if( i + 1 <line.length){
        people = people +`,`
      }
    }
    return people
  }
}
