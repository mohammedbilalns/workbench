#include "stdio.h"

int main() {

  int n = 5, i, j, k;

  for (i = 1; i <= 2 * n - 1; i++) {
    k = i <= n ? i : 2 * n - i;
    for (j = 1; j <= n; j++) {
      if (j >= k) {
        printf("* ");
      } else {
        printf(" ");
      }
    }
    printf("\n");
  }
}