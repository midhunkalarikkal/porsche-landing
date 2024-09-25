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

const yMovementForMainLogoObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('yMovementForMainLogoShow')
        }else{
            entry.target.classList.remove('yMovementForMainLogoShow')
        }
    })
})

const yReverseMovementObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('yReverseMovementShow')
        }else{
            entry.target.classList.remove('yReverseMovementShow')
        }
    })
})



const xAxisMovingElements = document.querySelectorAll('.xMovement')
xAxisMovingElements.forEach((el)=>{
    xObserver.observe(el)
})

const yAxisMovingElements = document.querySelectorAll('.yMovement')
yAxisMovingElements.forEach((el)=>{
    yObserver.observe(el)
})

const xAxisReverseMovingElements = document.querySelectorAll('.xReverseMovement')
xAxisReverseMovingElements.forEach((el)=>{
    xReverseObserver.observe(el)
})

const midTileElements = document.querySelectorAll('.mid-tile')
midTileElements.forEach((el)=>{
    midTileObserver.observe(el)
})

const xMovementForLastCar = document.querySelectorAll('.xMovementForLastCar')
xMovementForLastCar.forEach((el)=>{
    xMovementForLastCarObserver.observe(el)
})

const yMovementForMainLogo = document.querySelectorAll('.yMovementForMainLogo')
yMovementForMainLogo.forEach((el)=>{
    yMovementForMainLogoObserver.observe(el)
})

const yReverseMovementElements = document.querySelectorAll('.yReverseMovement')
yReverseMovementElements.forEach((el)=>{
    yReverseMovementObserver.observe(el)
})