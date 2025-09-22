#include <stdio.h>
int main() {
  int n = 10;
  int k = n * (n + 1) / 2;

  for (int i = n; i >= 1; i--) {

    for (int j = 1; j <= i; j++) {

      printf("%d ", k);
      if (j < i) {
        k = i % 2 == 1 ? k + 1 : k - 1;
      }
    }
    k = i % 2 == 0 ? k - i + 1 : k - i;
    printf("\n");
  }
}