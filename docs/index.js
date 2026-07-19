let card = (url, img, name, color, description, p = 0) => `
<a class="card sider hoverable" style="border-color: ${color}; user-select: none;" href="${url}">
    <div style="display: flex; flex-direction: row; min-width: 16rem; align-items: center;">
    <img src="src/${img}">
    <div style="height: 100%; align-content: center; margin-right: 1rem;"><h2>「${name}」</h2></div>
    </div>
    <div style="height: 100%; align-content: center;"><p>${description}</p></div>
    <div class="icons">
            <svg class="hoverable" style="margin-right: 0.5rem; rotate: 180deg; scale: 80%;"><use xlink:href="src/icons.svg#fa-reply"></svg>
            ${p ? '<svg style="margin-right: 0.5rem;"><use xlink:href="src/icons.svg#fa-code"></svg>' : ''}
    </div>
</a>
`

let stuff = [
    ["https://flag.fuyu.hu", "placeholder.png", "FlagTab", "thistle", "A webpage to separate your Zen tabs<br>Designed to be as lightweight as possible", 1],
    ["https://git.fuyu.hu", "forgejo.png", "Forgejo", "#E30", "My personal Git server<br>I have all of my open-source projects on here!"],
    ["https://matrix.fuyu.hu", "continuwuity.png", "Matrix", "#B5D", "A decentralized chat platform<br>Planning to switch to it full-time"],
    ["https://jello.fuyu.hu", "jellyfin.png", "Jellyfin", "#58D", "My self-hosted media library<br>I have some free content for the <b>demo</b> user!"]
]

let right = document.getElementById("right")

// append page
stuff.forEach((s) => { right.innerHTML += card(s[0], s[1], s[2], s[3], s[4], s[5]) })
right.innerHTML += `<h1 style="font-family: Yuyu;"> more in the works!</h1> `