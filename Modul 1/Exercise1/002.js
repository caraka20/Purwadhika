function soal2(param){
    // your code here 
  let titipIndex = 0
  let tampungObject =[]
  // let tampungObject ={
  //       firstname : 
  //       lastname : 
  //       hobies : 
  //       profession : 
  // }
  let hasil = []
  for (let i = 0; i < param.length; i++) {
    titipIndex = i

      let tampung = {
        firstname : param[i][0],
        lastname : param[i][1],
        hobies : param[i][2],
        profession : param[i][3]
    }
    tampungObject = tampung
    hasil.push(tampungObject)
    tampungObject = []
  }
  return hasil

}

/*
looping arr dengan index sebanyak, 
index arrai pertama mendata identitas 1 org
didalam arr yg ada data org nya di looping terus hasil nilai dari idex itu dibentuk object baru yg ada didalam arr hasil
index 0 firstnama : param[0]
lastname : param[1]
hobies : param[2]
profession : param[3]
kurang nya tidak dinamis
*/
console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));

// let a = [ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
// ['Radit','Dika',['manga','gaming'],'Web Developer'] ]
// // console.log(a.length);

// let b = []
// let c = {
//   nama : 'caraka',
//   lengkap : 'wijaya'
// }
// b=c
// console.log(b);
// console.log(b);