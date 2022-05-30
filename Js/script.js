if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  let theButtons = document.getElementsByClassName("btn")

  for (let i = 0; i < theButtons.length; i++) {
    let theButton = theButtons[i]
    theButton.addEventListener("click", textSwitchFunc)
  }
}


const countriesName = [
  'World',
  'China',
  'India',
  'USA',
  'Indonasia',
  'Brazil',
  'Pakistan',
  'Nigeria',
  'Bagladash',
  'Japan'
];

const countriesPopulation = [
  120000000, 119000000, 112000000, 109000000, 78000000, 72000000, 60000000, 40000000, 30000000, 29000000
]

const theLanguages = [
  'English',
  'French',
  'Arabic',
  'Spannish',
  'Portugues',
  'Russian',
  'Dutch',
  'German',
  'Chinese',
  'Serbian'
];

const theLanguagesCount = [91, 80, 78, 70, 70, 69, 50, 5, 5, 3]


function onloadChart() {
  let textSpan = document.getElementsByClassName("switch-options")[0];
  document.getElementsByClassName("graph-section")[0].innerHTML = `<canvas id="myChart"></canvas>`

  const countriesName = [
    'World',
    'China',
    'India',
    'USA',
    'Indonesia',
    'Brazil',
    'Pakistan',
    'Nigeria',
    'Bangladash',
    'Japan'
  ];

  const countriesPopulation = [
    120000000, 119000000, 112000000, 109000000, 78000000, 72000000, 60000000, 40000000, 30000000, 29000000
  ]

  let data = {
    labels: countriesName,
    datasets: [{
      label: 'Population',
      backgroundColor: 'red',
      borderColor: 'red',
      data: countriesPopulation,
    }]
  };

  let config = {
    type: 'bar',
    data: data,
    visibility: true,
    options: {
      indexAxis: 'y',
      responsive: true,
      elements: {
        bar: {
          borderWidth: 1,
        }
      },
      plugins: {
        legend: {
          position: 'center',
        },
      },
    }
  };

  myChart = new Chart(
    document.getElementById("myChart"),
    config
  );
}

onloadChart()

function textSwitchFunc(e) {
  let myChart = null

  let theClickedBtn = e.target;
  let textSpan = document.getElementsByClassName("switch-options")[0];
  document.getElementsByClassName("graph-section")[0].innerHTML = `<canvas id="myChart"></canvas>`

  if (theClickedBtn.innerText === "POPULATION") {
    textChanges = textSpan.innerHTML = "POPULATED COUNTRIES"

    let data = {
      labels: countriesName,
      datasets: [{
        label: 'Population',
        backgroundColor: 'red',
        borderColor: 'red',
        data: countriesPopulation,
      }]
    };

    let config = {
      type: 'bar',
      data: data,
      visibility: true,
      options: {
        indexAxis: 'y',
        responsive: true,
        elements: {
          bar: {
            borderWidth: 1,
          }
        },
        plugins: {
          legend: {
            position: 'center',
          },
        },
      }
    };

    myChart = new Chart(
      document.getElementById("myChart"),
      config
    );

  }

  if (theClickedBtn.innerText === "LANGUAGES") {
    textSpan.innerHTML = "SPOKEN LANGUAGES"

    let data = {
      labels: theLanguages,
      datasets: [{
        label: 'Languages',
        backgroundColor: 'black',
        borderColor: 'red',
        data: theLanguagesCount,
      }]
    };

    let config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        responsive: true,
        elements: {
          bar: {
            borderWidth: 1,
          }
        },
        plugins: {
          legend: {
            position: 'center',
          },
        },
      }
    };

    myChart = new Chart(
      document.getElementById("myChart"),
      config
    );
  }
}