#include "stdio.h"

int main() {
  int lineCount, i, j, k;
  printf("Enter the number of lines ");
  scanf("%d", &lineCount);

  for (i = 1; i <= lineCount; i++) {
    for (j = 1; j <= lineCount; j++) {
      if (i % 2 == 1) {
        k++;
        printf("%d ", k);
      } else {
        printf("%d ", k);
        k--;
      }
    }
    k += lineCount;
    printf("\n");
  }
}