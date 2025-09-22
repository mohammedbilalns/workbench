#include "stdio.h"

int main() {
  int n = 5;

  for (int i = 1; i <= 2 * n - 1; i++) {
    int k = 1, l = 1;
    for (int j = 1; j <= 2 * n - 1; j++) {
      if (i == 1 || i == 2 * n - 1) {
        printf("%d", k);
        k++;
      } else if (i == j || j == 2 * n - i) {
        j > i ? l++ : l;
        printf("%d", l);

      } else {
        printf(" ");
        if (j >= i && j <= 2 * n - 1 || j > 2 * n - i && j <= 2 * n - 1) {
          l++;
        }
      }
    }
    printf("\n");
  }

  return 0;
}