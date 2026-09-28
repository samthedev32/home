const uptimeTab = document.getElementById("uptime");

function formatUptime(days) {
    if (days === 0) return 'starting today'
    if (days === 1) return 'a day'
    if (days < 7) return `${days} days`;

    const weeks = Math.floor(days / 7);
    if (weeks === 1) return 'a week'
    if (days < 31) return `${weeks} weeks`

    const months = Math.floor(days / 31);
    if (months === 1) return 'a month'
    if (days < 365) return `${months} months`

    const years = Math.floor(days / 365);

    const ext = (days - years * 365 >= 182) ? ' and a half' : ''
    if (years === 1 && ext === '') return 'a year'

    return `${years === 1 ? 'one' : years} ${(ext)} year${years === 1 ? '' : 's'} `
}

async function updateTime() {
    try {
        const response = await fetch("https://netstat.fuyu.hu/uptime", { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status} `);

        const { uptime } = await response.json(); // Unix seconds

        const days = Math.floor(uptime / 60 / 60 / 24);
        uptimeTab.textContent = formatUptime(days)
    } catch (err) {
        console.warn("Couldn't fetch uptime:", err);
        uptimeTab.textContent = "Err"
    }
}

updateTime()
