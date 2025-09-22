#include "stdio.h"

int main() {
  int number, i;
  printf("Enter the nubmer to generate table ");
  scanf("%d", &number);
  for (i = 1; i <= 12; i++) {
    printf("%d * %d = %d \n", i, number, i * number);
  }
}