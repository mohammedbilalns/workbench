#include "stdio.h"

void displayArray(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}

int main() {

  int arr[] = {4, 3, 0, 2, 4, 5, 6, 0, 2, 1, 4, 0};
  int arrSize = sizeof(arr) / sizeof(arr[0]);

  printf("original array : ");
  displayArray(arr, arrSize);

  for (int i = 0; i < arrSize; i++) {
    if (arr[i] == 0) {
      for (int j = i; j >= 0; j--) {
        arr[j] = arr[j - 1];
      }
      arr[0] = 0;
    }
  }
  printf("Array after moving zeroes ");
  displayArray(arr, arrSize);
}