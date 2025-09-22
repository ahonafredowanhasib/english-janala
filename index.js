
const loadLessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(json => displayLessons(json.data))
}

const loadLevelWord= (id)=>{
    
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaylevelWords(data.data))

}

const displaylevelWords =(words)=>{
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML ="";

    if(words.length == 0){
       wordContainer.innerHTML =`
       <div class="font-bangla text-center col-span-full">
            <img class="mx-auto mb-[10px]" src="assets/alert-error.png">
            <p class="text-[#79716B] text-[15px]">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>
            <h2 class="font-semibold text-3xl mt-[15px]">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        return;
    }

//     {
//     "id": 88,
//     "level": 1,
//     "word": "Toy",
//     "meaning": "খেলনা",
//     "pronunciation": "টয়"
// }

    words.forEach((word) => {
        console.log(word)
        const card = document.createElement("div")
        card.innerHTML=`
        <div class="bg-white rounded-xl shadow-sm text-center py-14 px-10 ">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold mt-[10px]">Meaning /Pronounciation</p>
            <div class="font-bangla font-bold text-[#18181B] text-xl mt-[10px]">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center mt-[30px]">
                <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF90]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>`;
        
        wordContainer.append(card)
    });
}

 const displayLessons =(lessons)=>{
    // 1. get the container and empty
 const levelContainer = document.getElementById("level-container")
 levelContainer.innerHTML="";

    // 2. get into every lessons
for(let lesson of lessons){

    // 3. create element
const btnDiv = document.createElement("div")
btnDiv.innerHTML=`
    <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
`
// 4. append into container
levelContainer.append(btnDiv)
  }

    
 }

loadLessons()
