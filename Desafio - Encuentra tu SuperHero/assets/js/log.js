// Cargar el DOM 
$(document).ready(function () {

    //Extraer los elementos del DOM.
    const formHero = $("#formHero")
    const inputNumber = $("#inputNumber")
    const heroCards = $("#heroCards")
    const chartContainer = $("#chartContainer")

    formHero.on("submit", event => {
        // Evitar el comportamiento por defecto del formulario.
        event.preventDefault();

        // Validación con campo vacío:
        const numValue = inputNumber.val()
        if (!numValue.trim()) {
            alert("No puedes dejar el campo vacío. Por favor otra vez.")
            return
        }

        // Validación con regex:
        const regexNumber = /^[0-9]+$/
        if (!regexNumber.test(numValue)) {
            alert("Valor inválido, por favor intente otra vez.")
            return
        }

        // Validación rango de números (Son 731 superhéroes).
        if (numValue < 1 || numValue > 731) {
            alert("Debe colocar un número del 1 al 731. Intente otra vez.")
            return
        }

        // API externa
        $.ajax({
            url: `https://www.superheroapi.com/api.php/4905856019427443/${numValue}`,
            method: "GET",

            // Alternativa cuando se puede extraer la data de la API sin problemas.
            success(dataHero) {

                // Renderizar datos de API en card de Bootstrap.
                console.log(dataHero);
                heroCards.html(`
                <h2 class= "text-center">¡Superhero encontrado!</h2>
                <div class="card">
                    <img src=${dataHero.image.url} class="card-img-top object-fit-cover">
                    <div class="card-body">
                        <h3>Nombre: ${dataHero.name}</h3>
                        <p class="card-text">Conexiones: ${dataHero.connections["group-affiliation"]}.</p>
                         <ul class="list-group list-group-flush">
                            <li class="list-group-item">Publicado por: ${dataHero.biography.publisher}</li>
                            <li class="list-group-item">Ocupación: ${dataHero.work.occupation}</li>
                            <li class="list-group-item">Primera aparición: ${dataHero.biography["first-appearance"]}</li>
                            <li class="list-group-item">Altura: ${dataHero.appearance.height.join(" - ")}</li>
                            <li class="list-group-item">Peso: ${dataHero.appearance.weight.join(" - ")}</li>
                            <li class="list-group-item">Aliases: ${dataHero.biography.aliases.join(", ")}</li>
                </div>
                `)
                heroCards.css({
                    "marginInline": "auto"
                })

                // CanvasJS Gráfico de torta.
                const chart = new CanvasJS.Chart("chartContainer", {
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: `Estadísticas de poder para ${dataHero.name}`
                    },
                    legend: {
                        cursor: "pointer",
                        itemclick: explodePie
                    },
                    data: [{
                        type: "pie",
                        showInLegend: true,
                        toolTipContent: "{name}: <strong>{y}%</strong>",
                        indexLabel: "{name} - {y}",
                        dataPoints: [
                            { y: dataHero.powerstats.intelligence, name: "Intelligence", exploded: true },
                            { y: dataHero.powerstats.strength, name: "Strength" },
                            { y: dataHero.powerstats.speed, name: "Speed" },
                            { y: dataHero.powerstats.durability, name: "Durability" },
                            { y: dataHero.powerstats.power, name: "Power" },
                            { y: dataHero.powerstats.combat, name: "Combat" }
                        ]
                    }]
                });
                chart.render();

                function explodePie(e) {
                    if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
                    } else {
                        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
                    }
                    e.chart.render();
                }
            },

            error(e) {
                alert(e)
            }
        })
    })
})