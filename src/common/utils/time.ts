export function timeToSeconds(time: String){
    const [h = "0",m= "0",s= "0"] = time.split(":")
    const secondsToHours = Number(h) * 3600
    const minutesToSeconds = Number(m) * 60
    
    return secondsToHours + minutesToSeconds + Number(s)
}