// console.log('hey i am fake hacking terminal');

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    const offer = document.getElementById("offer")
    const hacking_ter = document.getElementById("hacking_ter")
    hacking_ter.style.visibility = 'visible'
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    offer.remove()


function randomtime(e) {
    const rand = Math.random(1000 + 7000)*e;
    // console.log(rand)
  return rand
} 

let rantime = randomtime(7000)
let rantime2 = randomtime(7000)
let rantime3 = randomtime(7000)
let rantime4 = randomtime(7000)
let rantime5 = randomtime(7000)



// lines()

async function ok(time,line) {
return new Promise((reslove)=>{

const linescon = document.getElementById("lines")
const line1 = document.createElement('div')
let dot = ''
     
        
   

line1.innerText = `${line} ${dot}`;
linescon.appendChild(line1);







// let loading =''
const interval = setInterval(() => {
 dot += ".";
 if (dot.length>3 ) dot = "";
 line1.innerText = `${line} ${dot}`;
// console.log(dot);
}, 500);

setTimeout(() => {
  clearInterval(interval)
  line1.innerText = `${line}  **done`;
// console.log(dot)
reslove()
}, time);})}
async function done(params) {
return new Promise((reslove1)=>{
  setTimeout(() => {
      hacking_ter.style.visibility = 'hidden'
    
      
    reslove1()
  }, 2000);
  
})

}
async function run(){
    
await ok(rantime,`>>> Initalizing Hacking  `)
await ok(rantime2,">>> Reading your files ")
await ok(rantime3,">>> Password Files Detected ")
await ok(rantime4,">>> Sending all passwords and persnal files to server ")
await ok(rantime5,">>> cleanig up ")
await done()
// await ok(rantime5,"--_> Hacking Done (6)")


}
run().catch(console.error)
// lines()

})
