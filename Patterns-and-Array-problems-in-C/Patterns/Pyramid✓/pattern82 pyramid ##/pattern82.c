#include <stdio.h>
int main() {

  int n = 4;
  int k = 0;
  int l = 2;
  for (int i = 1; i <= 2 * n; i++) {
    k = i <= n ? k + 1 : i > n + 1 ? k - 1 : k;
    for (int j = 1; j <= k; j++) {
      printf("%d ", l);
      j < k ? l-- : l;
    }
    if (i < n) {
      l = l + 2 * i;
    } else if (i == n) {
      l = l + i - 1;
    } else {
      l = l - 1;
    }
    printf("\n");
  }
}