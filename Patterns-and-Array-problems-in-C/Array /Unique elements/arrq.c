#include "stdio.h"

int main() {

  int arr[] = {3, 5, 6, -1, 2, 6, 54, 3};
  int arrSize = sizeof(arr) / sizeof(arr[0]);
  int isUnique;
  int isChecked[50] = {0};

  for (int i = 0; i < arrSize; i++) {
    if (isChecked[i] == 0) {
      isUnique = 1;
      for (int j = i + 1; j < arrSize; j++) {
        if (arr[i] == arr[j]) {
          isUnique = 0;
          isChecked[j] = 1;
        }
      }
      if (isUnique == 1) {
        printf("%d is unique \n", arr[i]);
      }
    }
  }
}