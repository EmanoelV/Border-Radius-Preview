var tipValues = [0,0,0,0]
var radiusValues = ''

function changeValues() {
    tipValues = tipValues.map((value, index) => document.forms[0][index].value )
    radiusValues = `${tipValues[0]}% ${tipValues[1]}% ${tipValues[2]}% ${tipValues[3]}%`
    
    document.querySelector('#box').style
        .borderRadius = radiusValues

    document.querySelector("input[type='text']").value = 'border-radius: '+radiusValues+';'
}

function copyCSS() {
    inputCopy = document.querySelector("input[type='text']")
    inputCopy.select()
    inputCopy.setSelectionRange(0,99999)
    document.execCommand('copy')
    console.log('[copyCSS] CSS Copiado: '+ inputCopy.value)
}