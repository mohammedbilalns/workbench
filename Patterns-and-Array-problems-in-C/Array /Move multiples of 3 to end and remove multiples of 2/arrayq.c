// Write a program to move all multiple of three to the end of given array and
// remove multiple of 2.  C programming with out function
#include "stdio.h"

int main() {

  int arr[] = {3, 8, 6, 7, 14, 19, 16, 21, 27, 6, 12};
  int arrSize = sizeof(arr) / sizeof(arr[0]);
  int newArr[50], newArrIndex = 0;

  for (int i = 0; i < arrSize; i++) {
    if (arr[i] % 3 != 0 && arr[i] % 2 != 0) {
      newArr[newArrIndex++] = arr[i];
    }
  } // move numbers which are not multiples of  2 and 3 to new array
  for (int i = 0; i < arrSize; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 2 != 0) {
      newArr[newArrIndex++] = arr[i];
    } // move multiples of 3 into the end of the new array
  }
  printf("Final array is : ");
  for (int i = 0; i < newArrIndex; i++) {
    printf("%d\t", newArr[i]);
  }
}