//Binary search in JS, Recursive 
//Time complexity is O(logN)
//Space complexity is consistent O(1) since we are not creating anything new , we are just going iteratively through an algorithm

//Binary search is basically: 
//1.finding the midpoint of a sorted array 
//2.then throw out the half of array that deosn't conatin the wanted number 
//3. Go to step 1 and repeat 

// our argumnets are : Array , the wanted number , start & end numbers 
let myBinarySearch = (array , wantedNum , startNum , endNum) => {
    //Check if it's sorted 
    //check if it's  not null
    if(array.length===0 || startNum>endNum) return false ; //if its null "equals 0 "or the start is greater than the end meaning it's not sorted

   //find the midpoint of the sorted array 
   let middleNum = Math.floor((startNum+endNum)/2);//Math.floor is used to ensure that the middle index is always an integer 

   //if wantedNum IS the mid-point , return true 
   if (array[middleNum]=== wantedNum) return middleNum ; 

   //if mid-point > wantedNum , we will run it again but the middel-1 will be the new end number
   if(array[middleNum]>wantedNum) return myBinarySearch(array, wantedNum , startNum,middleNum -1 )

   //if  mid-point < wantedNum,we will run it again but the middle+1 will be the new start number 
   else return myBinarySearch(array , wantedNum ,middleNum + 1,endNum )
    

}
let array =[1,2,3,4,5,6,7,8,9];//define an array
let wantedNum =2;//define the wanted number 
if (myBinarySearch(array,wantedNum,0,array.length -1 )){
    console.log("The binary search found the wanted Number " +wantedNum +" in your array");
}//output the result if found
else{
    console.log("Sorry not found");
    }//output if not found 
