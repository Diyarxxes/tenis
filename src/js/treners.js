        const line = document.querySelector('.treners__line');
        const btnNext = document.querySelector('.treners__btn-next');
        const btnPrev = document.querySelector('.treners__btn-prev');
        let possition = 0;

        btnPrev.addEventListener('click', function(){
            possition -= 200;


            if(possition<0){
                possition=600
            }

            line.style.left = -possition + 'px'




        })
        btnNext.addEventListener('click', function(){
            possition += 200;


            if(possition>600){
                possition=0
            }

            line.style.left = -possition + 'px'




        })