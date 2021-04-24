let entries = []
const goal = 25;
const entriesWrapper = document.querySelector('#entries')
document.querySelector('#target').innerText=goal;

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild)
  const listItem = document.createElement('li')
  const listValue = document.createTextNode(newEntry.toFixed(1))
  listItem.appendChild(listValue)
  entriesWrapper.appendChild(listItem)
}

function total(){
    var totalValue=0;
    var average=0;
    for(var i in entries){
        totalValue+=entries[i];
    }
    average = totalValue/entries.length;
    document.getElementById("total").innerText = totalValue.toFixed(1);
    document.getElementById("progressTotal").innerText = totalValue.toFixed(1);
    document.getElementById("average").innerText = average.toFixed(1);
}

function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById("high").innerText=high.toFixed(1);
}

function goalRing(){
    var totalValue=0;
    for(var i in entries){
        totalValue+=entries[i];
    }
    const completedPercent = totalValue / (goal / 100)
  const progressCircle = document.querySelector('#progressCircle')
  if (completedPercent > 100) completedPercent === 100
  progressCircle.style.background = `conic-gradient(
    #70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%`
}


function handleSubmit(event) {
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value)
  console.log(entry)

  if (!entry) return
  entries.push(entry)
  document.querySelector('form').reset()
  addNewEntry(entry)
  total();
  weeklyHigh();
  goalRing();
}

const form = document
  .querySelector('form')
  .addEventListener('submit', handleSubmit)