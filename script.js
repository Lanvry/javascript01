  setTimeout(() => {
  document.getElementById("containerpin").style.display="block"
  setTimeout(() => {
    document.getElementById("containerpin").style.height="500px"
  document.getElementById("containerpin").style.top="0px"
    }, "100")
 
}, "2000")
function openPage() {
            var x = document.getElementById("searchinp").value;

            if (x === "0012345") {
document.getElementById("formregister").style.display="none";           document.getElementById("player").style.display="block"; 
              setTimeout(() => {
  document.getElementById("nameplayer").innerHTML = "Arjuna Lanang Adiwarsana!";
                 document.getElementById("namaplayer01").innerHTML = "Arjuna Lanang adiwarsana";
              }, "1000")
            }
            
            if (x === "Help") {
                alert("List Search")
                alert("Google, Blogger, Smp, Ulangan, Password, Translate, Game")
            }
            
            if (x === "Password") {
                alert("Password Yang Digunakan web ini ada 3. jika ada popup, masukkan password seperti berikut dan pilih salah satu atau check satu per satu")
                alert("9hwebsite0987, tcix-6547, qwerty9h1243")
            }
            
            if (x === "Google") {
                window.open("https://google.com")
            }
            
            if (x === "Samenoku") {
              window.open("https://www.google.com/url?sa=t&source=web&rct=j&url=https://biolinky.co/sanemoku&ved=2ahUKEwjLu8W9s7X1AhVe83MBHSc-ALwQFnoECAMQAQ&usg=AOvVaw1d14qVwux-3JE4MlpPlZ4P")
            }
            
            if (x === "Smp") {
                window.open("https://smpn1kalianget.sch.id")
            }
            if (x === "Game") {
                window.open("https://game.opstoreid.repl.co")
            }
            if (x === "Translate") {
                window.open("https://www.google.com/search?q=translate&oq=translaye&aqs=chrome.1.69i57j35i39i305j0i10i131i433l2j0i10i433j0i10i131i433j0i10j0i10i131i433j0i10i433.3543j0j4&client=ms-android-vivo&sourceid=chrome-mobile&ie=UTF-8")
            }

            if (x === "Ulangan") {
                var x = document.getElementById("snackbar");
           x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }
  else{
    
  }

        }
setTimeout(() => {
Swal.fire({
  icon: 'warning',
  title: 'Alert',
  text: 'Jangan ada yang memencet enter atau search di keyboard anda saat pengisian nomor reedem player!, anda bisa langsung pencet sumbit atau kirim!, dikarenakan jika memencet akan ke refres page sendiri dan kami akan berusaha untuk menangani bug ini',
  footer: '<a href="">Why do I have this issue?</a>'
})
  }, "3000")
function yes(){
  p = prompt("Kami akan memberikan anda pertanyaan yang harus anda jawab anda siap? KETIK (yes or not)")
   if(p=== "yes"){
     s = prompt("Kelas yang dimaksud dengan nama tcix class adalah kelas? Kata kunci hanya tulis angaka dan huruf kelas misal 7a")
     if(s=== "9h"){
      l = prompt("berapa siswa di dalam kelas?")
       if(l=== "32"){
         k = prompt("Pertanyaan terakhir!, siapa nam walikelas 9h?, kata kunci hanya panggilan nama atau panggilan pendek tidak disertai pak") 
         if(k=== "totok"){
           alert("hehe ku kira anda orang lain :)")
           document.getElementById("buttonnext").style.display="block"
         }
       else{
           alert("Mohon maaf jawaban yang anda berikan salah coba ulangi lagi")
         }
         }
       else{
           alert("Mohon maaf jawaban yang anda berikan salah coba ulangi lagi")
         }
       }
       
        else{
           alert("Mohon maaf jawaban yang anda berikan salah coba ulangi lagi")
         }
     }
     else{
           alert("Mohon maaf jawaban yang anda berikan salah coba ulangi lagi")
         }
}

  function no(){
    document.getElementById("containerpin").style.height="0px"
  }
function nextpage(){
  s = prompt("Nisn anda! cth : 11457")
     if(s=== "11457"){
         document.getElementById("formhasil").style.display="block";           document.getElementById("player").style.display="none"; 
        setTimeout(() => {
  document.getElementById("nameplayer").innerHTML = "Arjuna Lanang Adiwarsana!";
                 document.getElementById("namaplayer01").innerHTML = "Arjuna Lanang adiwarsana";
              }, "1000")
     }
}
function exit(){
 document.getElementById("formregister").style.display="block";           document.getElementById("player").style.display="none"; 
}