const addToLocalStorage = (breakTime) =>{

    localStorage.setItem('breakTimes',JSON.stringify(breakTime))
    // const get = localStorage.getItem('breakTimes')
    // const stored = JSON.parse(get)
    // setBtnTime(stored)

    // console.log(stored)
 
}

const getToLocalStorage =()=>{

const get = localStorage.getItem('breakTimes')
    const stored = JSON.parse(get)
    return stored;

}
export {addToLocalStorage, getToLocalStorage}