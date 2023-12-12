document.addEventListener("DOMContentLoaded", function() {
    const historyData = [
        { year: "7th Century", event: "Foundation of the original Casablanca settlement by Berber fishermen." },
        { year: "15th Century", event: "Portuguese conquest and the construction of a fortified town named Casa Branca." },
        { year: "1755", event: "The city was destroyed by an earthquake and rebuilt by Sultan Mohammed ben Abdallah." },
        { year: "1907", event: "French occupation begins, marking a new era of development and modernization." },
        { year: "1943", event: "Casablanca hosts the famous Anfa Conference during World War II." },
        { year: "1956", event: "Morocco gains independence; Casablanca becomes a major economic and business center." },
        { year: "1980s", event: "Rapid urban expansion and economic growth, establishing Casablanca as Morocco's largest city." },
        { year: "2012", event: "The city hosts the largest protest in Moroccan history, the 20 February Movement." },
        { year: "2015", event: "The city hosts the 2015 United Nations Climate Change Conference." },
        { year: "2018", event: "The city hosts the 2018 African Nations Championship." }
        
    ];

    const timeline = document.getElementById("timeline");

    historyData.forEach(item => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `<h3>${item.year}</h3><p>${item.event}</p>`;
        timeline.appendChild(div);
    });
});
