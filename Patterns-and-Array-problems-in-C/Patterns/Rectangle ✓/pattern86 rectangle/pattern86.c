#include "stdio.h"

int main() {

  int n = 4, k = 1;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= 2 * n - 1; j++) {
      if (j % 2 == 1) {
        printf("%d", k++);
      } else {
        printf("*");
      }
    }
    printf("\n");
  }

  return 0;
}