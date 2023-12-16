
var btn=document.getElementById('btn');
var writer=document.getElementById('witer');
var qoutess=document.getElementById('quotess');
    var quotes = [
    {
        quote: "خليك دايما جامد - جرب حاول عافر",
        author: "العسيلي"
    },
    {
        quote: "متحاولش تبقي حد تاني غير نفسك",
        author: "مكي"
    },
    {
        quote: "لا تعاشر الناقص فإن خاصمك فضح سرك و قال عنك ماليس فيك",
        author: "نجيب محفوظ"
    },
    {
        quote: "تهب يارياح الحياه دائما بما لا تشتهي الانفس",
        author: "حمزه نمره"
    },
    {
        quote: "خليك دايما جامد جرب حاول عاند  ",
        author: "عسيلي"
    },
    {
        quote: "اي حاجة تيجي من ريحة الحبايب بتطمن قلب الي مشغول عن الي غايب",
        author: "عمرو دياب"
    },
    {
        quote: "ادي الملاك البرئ ابو قلب طيب اوي",
        author: "عمرو دياب"
    },
    {
        quote: "لا تلاقي عندي وعود كدابه و كبرت علي ولا شئ مضمون ",
        author: "ويجز"
    },
    {
        quote: "علمونا في مدرستنا ازاي نحبها",
        author: "تامر حسين"
    },
    {
        quote: "في حياتنا ناس هما الاساس",
        author: "عمرو دياب"
    }
];

btn.onclick = function(){
    var random = Math.floor(Math.random() * quotes.length+1) 
    writer.innerHTML = ('للكاتب :'+ quotes[random].author) ;
    qoutess.innerHTML = quotes[random].quote;
    
}
  
