#include "stdio.h"

int main(){

    int arr[] = {2,2,43,3,3},isChecked[50]={0};
    int arrSize = sizeof(arr)/sizeof(arr[0]),foundDuplicate,duplicateElementsCount=0;

    for(int i=0;i<arrSize;i++){
        if(isChecked[i] ==0){
            foundDuplicate =0;
            for(int j=i+1;j<arrSize;j++){
                if(arr[j]==arr[i]){
                    isChecked[j]=1;
                    foundDuplicate = 1;              
                }
            }
            if(foundDuplicate==1){
                duplicateElementsCount++;
            }
        }
    }
    printf("Number of duplicate elments: %d",duplicateElementsCount);

    return 0;
}