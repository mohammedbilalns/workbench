#include <stdio.h>
int main() {

  int n = 4;
  int k = n + 3 - 1;

  for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
      printf("%d", k);
    }
    printf("\n");
    k--;
  }
}