// Write a program in C to move all negative elements to the first without
// sorting (Don’t change order of elements)
#include "stdio.h"
int main() {

  int arr[] = {-3, 2, -4, 3, 6, 7, 4, -7, 6, 0};
  int arrSize = sizeof(arr) / sizeof(arr[0]);
  int newArr[50], newArrIndex = 0;

  for (int i = 0; i < arrSize; i++) {
    if (arr[i] < 0) {
      newArr[newArrIndex++] = arr[i];
    }
  }
  for (int i = 0; i < arrSize; i++) {
    if (arr[i] >= 0) {
      newArr[newArrIndex++] = arr[i];
    }
  }
  printf("Final Array is: ");
  for (int i = 0; i < newArrIndex; i++) {
    printf("%d\t", newArr[i]);
    int a,b;
  }
}

