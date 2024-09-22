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