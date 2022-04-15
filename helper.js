
const dom = document

export const createDivElements = () => {
    const divsArr = []
    for (let i = 0; i < 9; i++) {
     const div = dom.createElement('div')
        div.setAttribute('id',i+1)
        div.setAttribute('class','tiktokCell')
        divsArr.push(div)
    }   
    return divsArr;
}

export const createDivContainer = (classes,id) => {
     const div = dom.createElement('div')
     div.setAttribute('class',classes)
     div.setAttribute('id',id)
     return div
}