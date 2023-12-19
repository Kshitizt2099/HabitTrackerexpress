function getFormattedDate(date) {
    let year = date.getFullYear();
  
  
    let month=date.getMonth()+1;
   console.log(month,"month")
    
    let day=date.getDate()
  
    return month + "/" + day + "/" + year;
  }
  
  
  
  export function  weekdetailcreator(id) {
      const week = [];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
       let date=new Date()
       
       console.log(date)
      for (let i = 0; i <= 6; i++) {
        let date = new Date();
        let currday=date.getDate()
        
        date.setDate(currday+i)
       
        const weekDay = {
          did:(Math.random()*10000)+"/"+id,
          day: days[date.getDay()],
          date: getFormattedDate(date),
    
          status: "Notdone",
        };
        week.push(weekDay);
      }
      return week;
    }