function timeWord(timeString) {
    const hours = parseInt(timeString.slice(0, 2));
    const minutes = parseInt(timeString.slice(3));
  
    const numbersToWords = [
      "twelve", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven"
    ];
  
    const minuteWords = [
      "oh", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
      "seventeen", "eighteen", "nineteen"
    ];
  
    const tensWords = [
      "", "", "twenty", "thirty", "forty", "fifty"
    ];
  
    let timeDescription = "";
  
    if (hours === 0 && minutes === 0) {
      timeDescription = "midnight";
    } else if (hours === 12 && minutes === 0) {
      timeDescription = "noon";
    } else {
      if (hours >= 12) {
        timeDescription += numbersToWords[hours - 12];
      } else {
        timeDescription += numbersToWords[hours];
      }
  
      if (minutes === 0) {
        timeDescription += " o'clock";
      } else if (minutes >= 10 && minutes <= 19) {
        timeDescription += ` ${minuteWords[minutes]}`;
      } else if (minutes >= 1 && minutes <= 9) {
        timeDescription += ` oh ${minuteWords[minutes]}`;
      } else {
        const tens = Math.floor(minutes / 10);
        const ones = minutes % 10;
  
        if (tens === 1) {
          timeDescription += ` ${minuteWords[minutes]}`;
        } else {
          if (ones === 0) {
            timeDescription += ` ${tensWords[tens]}`;
          } else {
            timeDescription += ` ${tensWords[tens]} ${minuteWords[ones]}`;
          }
        }
      }
  
      if (hours >= 12) {
        timeDescription += " pm";
      } else {
        timeDescription += " am";
      }
    }
  
    return timeDescription.trim();
  }
  
  // Test cases
  console.log(timeWord("00:00")); // 'midnight'
  console.log(timeWord("12:00")); // 'noon'
  console.log(timeWord("01:00")); // 'one o'clock am'
  console.log(timeWord("06:01")); // 'six oh one am'
  console.log(timeWord("06:10")); // 'six ten am'
  console.log(timeWord("06:18")); // 'six eighteen am'
  console.log(timeWord("06:30")); // 'six thirty am'
  console.log(timeWord("10:34")); // 'ten thirty four am'
  console.log(timeWord("00:12")); // 'twelve twelve am'
  console.log(timeWord("12:09")); // 'twelve oh nine pm'
  console.log(timeWord("23:23")); // 'eleven twenty three pm'
  