//Get value
document.querySelectorAll('input[type=color]').forEach(function(picker){
    //Target Point
    var targetLabel = document.querySelector('label[for="' + picker.id + '"]');
    colorArea = document.createElement(span);

    colorArea.innerHTML = picker.Value;
    targetLabel.appendChild(colorArea);

    //Now AddEventListener
    picker.addEventListener('change', function(){
        colorArea.innerHTML = picker.value;
        targetLabel.appendChild(colorArea)
    });
    
});