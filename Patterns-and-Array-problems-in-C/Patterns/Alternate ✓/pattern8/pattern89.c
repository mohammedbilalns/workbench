#include "stdio.h"

int main() {

  int n = 4, k = 1;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= 2 * n - 1; j++) {

      if (j % 2 == 1) {
        printf("%d", k);
        k += j < 2 * n - 1 ? 1 : 0;
      } else {
        printf("*");
      }
    }
    if (i == 1) {
      k += 5;
    } else if (i == 2) {
      k++;
    } else if (i == 3) {
      k -= 11;
    }
    printf("\n");
  }

  return 0;
}