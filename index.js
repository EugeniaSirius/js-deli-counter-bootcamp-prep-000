var katzDeliLine=[]

 function takeANumber(katzDeliLine,name)  {
    katzDeliLine.push(name)
   return 'Welcome, ' + name + '. You are number '+ katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine)  {
   
  if (katzDeliLine.length===0) {
    return ('There is nobody waiting to be served!')
  } else {
   var shift=katzDeliLine.shift(0)
   return ('Currently serving '+shift+'.')
  }
 } 

function currentLine(katzDeliLine)  {
  for (let i=0; i>katzDeliLine.length; i++)  {
    if (katzDeliLine.length===0)  {
    return 
  }
  else  {
    return ('The line is currently: 1. '+ katzDeliLine[0] + ', 2. '+ katzDeliLine[1])
  } 
  }
}





takeANumber(katzDeliLine,'Ada')
takeANumber(katzDeliLine,'Grace')
takeANumber(katzDeliLine,'Kent')
currentLine(katzDeliLine)
takeANumber(katzDeliLine,'Matz')
currentLine(katzDeliLine)
nowServing(katzDeliLine,'Steven')
currentLine(katzDeliLine)
