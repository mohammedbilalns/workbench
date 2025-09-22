// Find frequency of elements
#include <stdio.h> 
int main(){
	int arr[] = {43,2,5,23,56,6,2,4,3,234,2,6,6,5665,3,3,3,3,32};
	int arrSize = sizeof(arr)/sizeof(arr[0]),isChecked[50]={0};
	int frequency;
	
	for(int i=0;i<arrSize;i++){
		if(isChecked[i]==0){
		frequency =1;
		for(int j=i+1;j<arrSize;j++){
			if(arr[j]==arr[i]){
			frequency++;
			isChecked[j]=1;
			}
		}
			printf("%d is contained %d times in the array\n",arr[i],frequency);
		
		}
		
	}
	return 0;
}
