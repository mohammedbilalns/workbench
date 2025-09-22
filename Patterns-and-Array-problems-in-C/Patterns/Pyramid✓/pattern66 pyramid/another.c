#include <stdio.h>

int main() {
  static int n = 10;
  static int i = 1, j = 1;
  int k;

  if (i <= n) {
    k = (j >= n - i + 1 && j <= n + i - 1)
            ? ((j <= n) ? i - 1 - (j - (n - i + 1)) : (j - n - 1))
            : -1;

    printf(k == -1 ? "  " : k < 10 ? " %d" : "%d", k);

    if (j == 2 * n - 1) {
      printf("\n");
      i++;
      j = 0;
    }
    j++;
    main();
  }

  return 0;
}