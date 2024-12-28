// Common function to handle intersection observer setup
function createObserver(classToAdd) {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
            } else {
                entry.target.classList.remove(classToAdd);
            }
        });
    });
}

// Observers with corresponding classes
const observers = {
    xObserver: createObserver('xAxisShow'),
    yObserver: createObserver('yAxisShow'),
    xReverseObserver: createObserver('xAxisReverseShow'),
    midTileObserver: createObserver('mid-tileshow'),
    xMovementForLastCarObserver: createObserver('xMovementForLastCarShow'),
    yMovementForMainLogoObserver: createObserver('yMovementForMainLogoShow'),
    yReverseMovementObserver: createObserver('yReverseMovementShow')
};

// Mapping of elements and their corresponding observer
const elementObserverMap = [
    { selector: '.xMovement', observer: observers.xObserver },
    { selector: '.yMovement', observer: observers.yObserver },
    { selector: '.xReverseMovement', observer: observers.xReverseObserver },
    { selector: '.mid-tile', observer: observers.midTileObserver },
    { selector: '.xMovementForLastCar', observer: observers.xMovementForLastCarObserver },
    { selector: '.yMovementForMainLogo', observer: observers.yMovementForMainLogoObserver },
    { selector: '.yReverseMovement', observer: observers.yReverseMovementObserver }
];

// Attach observers to corresponding elements
elementObserverMap.forEach(({ selector, observer }) => {
    document.querySelectorAll(selector).forEach((el) => {
        observer.observe(el);
    });
});
