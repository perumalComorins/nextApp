import moment from 'moment';
export function title_case(string){
    if(string!=null){
       //remove underscore and capitalize words
      var i = "";
      var str = string.split("_");
      for(i=0;i<str.length;i++){
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1) ;
      }
    return str.join(" ");
    }else{
      return string;
    }
  }

  export function format_date(date, incl_time = false, year_digits = 4, str_date_format = "YYYY-MM-DD h:mm a"){

    var out_format = "DD MMM YYYY"

   if(year_digits == 2){
       out_format = "DD MMM YY";
   }
   if(incl_time){
       out_format = out_format + " h:mm a"
   }

   if(date instanceof moment){
       return date.format(out_format);
   }
   else if(date == null){
       return "";
   }
   else{
    return moment(date, str_date_format).format(out_format);
   }
}

export const checkDiamension=async(event,file_width,file_height)=> {
    var files = event.target.files;
    var height = 0;
    var width = 0;
    var _URL = window.URL || window.webkitURL;
    var img = new Image();
    img.src = _URL.createObjectURL(files[0]);
    const promise = new Promise((resolve, reject) => {
        img.onload =  function async () {
            height = img.height;
            width = img.width;
            if(width<file_width && height<file_height){
                resolve(false)
            }else{
                resolve(true)
            }

        }
        img.onerror = reject;
      })

        return promise;
  }