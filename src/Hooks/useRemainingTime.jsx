

const useRemainingTime = ({expire_date,currentDate}) => {



    const expireDateArray = expire_date.split('-');
    const expireDate = new Date(
      parseInt(expireDateArray[0]),  // Year
      parseInt(expireDateArray[1]) - 1,  // Month (0-11)
      parseInt(expireDateArray[2])  // Day
    );
  
    // Calculate the time difference
    const timeDifference = expireDate - currentDate;
  
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
      return `${days} days, ${hours} hours, ${minutes} minutes remaining.`
    } else {
      return "Order has expired."
    }





  
}

export default useRemainingTime