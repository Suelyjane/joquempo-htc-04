const $buttonStonePlayer1 = document.querySelector('.button-move-stone-1')
const $buttonStonePlayer2 = document.querySelector('.button-move-stone-2')
const $moveBox1 = document.querySelector('#move-box-1')
const $moveBox2 = document.querySelector('#move-box-2')

function handleStone1Move(){
    $moveBox1.innerHTML = 'img src=""'
}

function handlePaper1Move(){
    $moveBox1.innerHTML = 'img src=""'
}

function handleScissors1Move(){
    $moveBox1.innerHTML = 'img src=""'
}

function handleStone2Move(){
    $moveBox1.innerHTML = 'img src=""'
}

function handlePaper2Move(){
    $moveBox1.innerHTML = 'img src=""'
}

function handleScissors2Move(){
    $moveBox1.innerHTML = 'img src=""'
}

$buttonStonePlayer1.addEventListener('click', handleStone1Move)
$buttonStonePlayer1.addEventListener('click', handleStone1Move)