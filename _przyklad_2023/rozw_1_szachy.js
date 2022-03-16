const fs = require('fs')

try {
  const data = fs.readFileSync('Dane_2023/szachy_przyklad.txt', 'utf8')
  console.log(data)
  
  
} catch (err) {
  console.error(err)
  // zmiana
}