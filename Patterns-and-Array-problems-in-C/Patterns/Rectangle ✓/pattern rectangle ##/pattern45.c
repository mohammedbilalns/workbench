#include "stdio.h"

void pattern(int n) {
  int i, j, k;
  for (i = 1; i <= n; i++) {
    k = 1;
    for (j = 1; j <= 2 * n; j++) {
      if (j <= i || j > 2 * n - i) {
        printf("%d", k);
        j<i ? k++ : j> i ? k-- : k;
      } else {
        printf("*");
      }
    }
    printf("\n");
  }
}
int main() { pattern(4); }
