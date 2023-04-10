function printNextGreter(arr)
      {
        var next;
        var res=[];
        for ( let i = 0; i < arr.length; i++){
          next = -1;
          for ( let j = i + 1; j < arr.length; j++){
            if (arr[i] < arr[j]) 
            {
              next = arr[j];
              break;
            }
          }
        res.push(next);
        }
        return res;
      }
      var arr = [1,3,2,4];
 console.log(printNextGreter(arr));

















