AFRAME.registerComponent('festival', {
    init: function () {
        initFestival()
    },
});

const initFestival = () => {
    let camera = document.getElementById("camera")
    let rig = document.getElementById("rig")
    let cursor = document.getElementById("cursor")

    randomEnemies()

    const collisionTests = document.getElementsByClassName('collisionTest')
    for (const collisionTest of collisionTests) {
        collisionTest.addEventListener('hitstart', hitPlayer)
    }
}

const hitPlayer = (e) => {
    console.log('Player has been hit')
}

const randomEnemies = () => {
    const enemiesEl = document.getElementById('enemies')
    const enemies = generateEnemiesList()
    const test = document.getElementsByClassName('collisionTest')[0]
    const colors = ['red', 'blue', 'yellow', 'pink', 'purple', 'green']

    enemies.forEach((enemy) => {
        const e = test.cloneNode(true)
        e.setAttribute('position', { x: enemy.x, y: -.2, z: enemy.z })
        e.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])

        enemiesEl.appendChild(e)
    })
}

const generateEnemiesList = () => {
    var enemies = [],
        enemy = {},
        overlapping = false,
        maxEnemies = 50,
        protection = 10000,
        counter = 0

    while (enemies.length < maxEnemies && counter < protection) {
        enemy = {
            x: Math.floor(Math.random() * 201),
            z: Math.floor(Math.random() * 201),
            r: 10
        }
        overlapping = false

        for (var i = 0; i < enemies.length; i++) {
            var existing = enemies[i]
            var d = Math.sqrt((enemy.x - existing.x) ** 2 + (enemy.y - existing.y) ** 2)
            if (d < enemy.r + existing.r) {
                overlapping = true;
                break;
            }
        }
        
        if (!overlapping) {
            enemies.push(enemy)
        }
        
        counter++
    }

    return enemies
}