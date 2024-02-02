// 1) შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს.
// გაფილტრეთ მოცემული მასივი შემდეგ კი დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი.
//  გამოიყენეთ მასივის filter და reduce მეთოდები.
let arr = [-50, -10, 3, -5, 10, -9, 20, 30, 1]

function count(arr) {
    if (!arr) return
    return arr
        .filter((i)=>i>0)
        .reduce((total, amount) => total + amount ,0)
        // .map ((i)=> i )    აქ უბრალოდ ვვარჯიშობი თორე არაფერში მჭირდება
        // .sort((a,b)=>b-a)

}

console.log(count(arr));

// 2) შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს). 
// დაწერეთ კოდი,რომელიც დაითვლის რამდენჯერ მეორდება თითოეული სტრინგი მასივში 
// და დააბრუნეთ ობიექტის სახით, მაგ: { a:1 , b: 6, c : 2}. გამოიყენეთ მასივის reduce მეთოდი.

let arrTwo = ["apple", "banana", "cherry", "apple", "orange", "banana", "apple"]

let countArrTwo = arrTwo.reduce((acc , i) => {
if (!arrTwo) return 
acc [i] = (acc[i] || 0 ) + 1
return acc
}, {})

console.log(countArrTwo);



// 4) შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს.
//  თუ ორივე პარამეტრი გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია)
//   პრომისი უნდა დარიზოლვდეს(resolve), წინააღმდეგ შემთხვევაში დარიჯექთდეს(reject).
//    გამოიძახეთ ფუნქცია რამდენიმეჯერ, სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.



 const addAsync = (num1, num2) => {
    return new Promise ((resolve, reject) => {
if (num1 && num2) {
  let  square = num1 ** num2 
    resolve (`${num1} ხარისხად  ${num2} = ${square}` )
} 
else {
    reject("enter numbers")
}
 }) 
 } 

 console.log(addAsync(2,4));
 console.log(addAsync ());
 

