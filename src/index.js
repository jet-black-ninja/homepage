import './style.css'
const observer = new IntersectionObserver((entries =>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            if(entry.target.id === "img1")
                entry.target.classList.add('showImg1')
            else if(entry.target.id==="img2")
                entry.target.classList.add('showImg2')
            else 
                entry.target.classList.add('show')
        }else{
            if(entry.target.id === 'img1')
                entry.target.classList.remove('showImg1');
            else if(entry.target.id==="img2")
                entry.target.classList.remove('showImg2')
            else
                entry.target.classList.remove('show');
        }
    });
}));

const cards = document.querySelectorAll('.cards');
cards.forEach((el) => observer.observe(el));
const topImg = document.getElementById('img1');
observer.observe(topImg);
const bottomImg = document.getElementById('img2');
observer.observe(bottomImg);