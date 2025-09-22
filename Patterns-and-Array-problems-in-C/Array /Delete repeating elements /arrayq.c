// delete all elements with duplicates 
#include <stdio.h> 
void displayArray(int arr[],int size);

int main(){
	int arr[] = {33,5,10,21,10,0,1,3,0,-13,430,56,-0,-22,0},isChecked[50]={0};
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	
	printf("Array:");
	displayArray(arr,arrSize);
	
	for(int i=0;i<arrSize;i++){
		if(isChecked[i]==0){
			int foundDuplicate = 0;
			for(int j=i+1;j<arrSize;j++){

				if(arr[j]==arr[i]){
					foundDuplicate=1;
					isChecked[j]=1;
					for(int k=j;k<arrSize-1;k++){
						arr[k]=arr[k+1];
					}
					arrSize--;
				}
			}
			if(foundDuplicate ==1){
				for(int j=i;j<arrSize-1;j++){
					arr[j]=arr[j+1];
				}
				arrSize--;
			}
		}

	}
	
	printf("\nArray after removal:");
	displayArray(arr,arrSize);
	
	
	
	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}

