const xObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('xAxisShow')
        }else{
            entry.target.classList.remove('xAxisShow')
        }
    })
})

const yObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('yAxisShow')
        }else{
            entry.target.classList.remove('yAxisShow')
        }
    })
})

const xReverseObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('xAxisReverseShow')
        }else{
            entry.target.classList.remove('xAxisReverseShow')
        }
    })
})

const midTileObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('mid-tileshow')
        }else{
            entry.target.classList.remove('mid-tileshow')
        }
    })
})

const xMovementForLastCarObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('xMovementForLastCarShow')
        }else{
            entry.target.classList.remove('xMovementForLastCarShow')
        }
    })
})



const xAxisMovingElement = document.querySelectorAll('.xMovement')
xAxisMovingElement.forEach((el)=>{
    xObserver.observe(el)
})

const yAxisMovingElement = document.querySelectorAll('.yMovement')
yAxisMovingElement.forEach((el)=>{
    yObserver.observe(el)
})

const xAxisReverseMovingElement = document.querySelectorAll('.xReverseMovement')
xAxisReverseMovingElement.forEach((el)=>{
    xReverseObserver.observe(el)
})

const midTileElement = document.querySelectorAll('.mid-tile')
midTileElement.forEach((el)=>{
    midTileObserver.observe(el)
})

const xMovementForLastCar = document.querySelectorAll('.xMovementForLastCar')
xMovementForLastCar.forEach((el)=>{
    xMovementForLastCarObserver.observe(el)
})